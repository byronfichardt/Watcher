<?php

use App\Http\Controllers\ExceptionController;
use App\Http\Middleware\TrimStrings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/exception', ExceptionController::class)->withoutMiddleware(TrimStrings::class);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
