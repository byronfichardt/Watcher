<?php

namespace App\Http\Controllers;

use App\Models\Environment;
use App\Models\Exception;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;
use WhichBrowser\Parser;

class ExceptionController extends Controller
{
    public function index(Request $request): Response
    {
        $environments = Environment::all();
        $services = Service::all();
        $exceptions = Exception::with(['events', 'environment', 'service']);
        if($request->input('service')) {
            $exceptions = $exceptions->where('service_id', $request->input('service'));
        }
        if($request->input('environment')) {
            $exceptions = $exceptions->where('environment_id', $request->input('environment'));
        }

        $exceptions = $exceptions->orderByDesc('last_occurred_at')->get();

        $exceptions = $exceptions->map(function ($exception) {
            $exception->requestDetails = new Parser($exception->headers);
            $type = explode('\\',$exception->type);
            $exception->type = end($type);
            $exception->last_occurred_at = Carbon::parse($exception->last_occurred_at)->toiSOString();
            return $exception;
        });

        return Inertia::render('Exceptions/Exceptions', [
            'exceptions' => $exceptions,
            'environments' => $environments,
            'services' => $services,
        ]);
    }

    public function show(Exception $exception): Response
    {
        $exception->load(['events' => fn($query) => $query->orderByDesc('created_at'), 'service', 'environment']);
        $exception->requestDetails = new Parser($exception->headers);

        return Inertia::render('Exceptions/Details', [
            'exception' => $exception,
        ]);
    }
}
