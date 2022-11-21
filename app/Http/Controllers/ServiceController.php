<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Ramsey\Uuid\Uuid;

class ServiceController extends Controller
{
    public function index(): Response
    {
        $services = Service::all();

        return Inertia::render('Services/Services', [
            'services' => $services,
        ]);
    }

    public function store(Request $request): Response
    {
        $serviceId = Uuid::uuid4()->toString();

        Service::create([
            'service_id' => $serviceId,
            'name' => $request->input('name'),
        ]);

        if ($request->user()->tokens()->count() === 0) {
            $token = $request->user()->createToken($request->input('name'))->plainTextToken;
        }

        $services = Service::all();

        return Inertia::render('Services/Services', [
            'services' => $services,
            'token' => $token,
        ]);
    }
}
