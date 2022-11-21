<?php

use App\Http\Controllers\ServiceController;
use App\Models\Environment;
use App\Models\Service;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
])->group(function () {
    Route::get('/dashboard', function (Request $request) {
        $environments = Environment::all();
        $services = Service::all();
        $exceptions = App\Models\Exception::with('events');

        if($request->input('service')) {
            $exceptions = $exceptions->where('service_id', $request->input('service'));
        }
        if($request->input('environment')) {
            $exceptions = $exceptions->where('environment_id', $request->input('environment'));
        }

        return Inertia::render('Exceptions/Exceptions', [
            'exceptions' => $exceptions->get(),
            'environments' => $environments,
            'services' => $services,
        ]);
    })->name('dashboard');

    Route::get('/exception/{exception}', function (App\Models\Exception $exception) {
        return Inertia::render('Exceptions/Details', [
            'exception' => $exception->load(['events', 'service', 'environment']),
        ]);
    })->name('exception.details');

    Route::get('/services', function () {
        return Inertia::render('Services/Services');
    })->name('services');

    Route::resource('/services', ServiceController::class);

    Route::get('/users/createToken/{name}', function (Request $request, string $name) {
        $user = $request->user();
        return $user->createToken($name)->plainTextToken;
    })->name('createToken');
});
