<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\BookController;
use Illuminate\Support\Facades\Route;

/**
 * External routes
 */
Route::group(['prefix' => 'auth'], function(){
    Route::post('register', [AuthController::class, 'store']);
    Route::post('login', [AuthController::class, 'login']);
});

/**
 * Protected routes
 */
Route::middleware(['auth:sanctum', 'admin'])->group(function(){
    Route::get('/me', [AuthController::class, 'me']);
});
