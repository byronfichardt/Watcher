<?php

namespace App\Http\Controllers;

use App\Models\Environment;
use App\Models\Exception;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use WhichBrowser\Parser;

class ExceptionController extends Controller
{
    public function index(Request $request): Response
    {
        $environments = Environment::all();
        $services = Service::all();
        $exceptions = Exception::with(['events' => fn($query) => $query->orderByDesc('created_at'), 'environment', 'service']);

        if($request->input('service')) {
            $exceptions = $exceptions->where('service_id', $request->input('service'));
        }
        if($request->input('environment')) {
            $exceptions = $exceptions->where('environment_id', $request->input('environment'));
        }

        $exceptions = $exceptions->orderByDesc('created_at')->get();

        $exceptions = $exceptions->map(function ($exception) {
            $exception->requestDetails = new Parser($exception->headers);
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
        $exception->load(['events', 'service', 'environment']);
        $exception->requestDetails = new Parser($exception->headers);

        return Inertia::render('Exceptions/Details', [
            'exception' => $exception,
        ]);
    }
}
