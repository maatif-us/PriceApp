<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// Product Routes
Route::controller(UserController::class)->group(function () {
    Route::post('/user/register', 'register');
    Route::post('/user/login', 'login');

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', 'user');
        Route::post('/logout', 'logout');
    });

});