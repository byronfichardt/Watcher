<?php

use App\Http\Controllers\ExceptionController;
use App\Http\Controllers\ServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use WhichBrowser\Parser;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/dashboard', [ExceptionController::class, 'index'])->name('dashboard');

    Route::get('/exception/{exception}', [ExceptionController::class, 'show'])->name('exception.details');

    Route::post('/exception/{exception}/resolve', function (App\Models\Exception $exception) {
        $exception->resolved = true;
        $exception->save();
    })->name('exception.resolve');

    Route::get('/exception/{exception}/request', function (App\Models\Exception $exception) {
        $requestDetails = new Parser($exception->headers);

        return Inertia::render('Exceptions/Exceptions', ['requestDetails' => $requestDetails ]);
    })->name('exception.request');

    Route::resource('/services', ServiceController::class);

    Route::get('/users/createToken/{name}', function (Request $request, string $name) {
        $user = $request->user();
        return $user->createToken($name)->plainTextToken;
    })->name('createToken');
});
