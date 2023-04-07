<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

// Product Routes

require __DIR__ . '/api/users.php';
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});