<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ServiceOrderController;

/**
 * External routes:
 */
Route::get("/login", [AuthController::class, "index"])->name("login");
Route::post("/login", [AuthController::class, "loginSubmit"])->name("loginSubmit");
Route::get("/register", [AuthController::class, "register"])->name("register");
Route::post('/register', [AuthController::class, 'registerSubmit'])->name('registerSubmit');

/**
 * Protected routes:
 */
Route::middleware(['auth', 'log'])->group(function(){

    Route::get('/logOut', [AuthController::class, "logOut"])->name('logOut');
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('users')->group(function(){
        Route::get('/', [UserController::class, 'index'])->name('users.index');
        ROute::put('permissions/sync/{user}', [UserController::class, 'permissionsSync'])->name('users.permissions.sync');
        Route::post('/getUsers', [UserController::class, 'getUsers'])->name('users.getUsers');
        Route::get('/create', [UserController::class, 'create'])->name('users.create');
        Route::post('/store', [UserController::class, 'store'])->name('users.store');
        Route::delete('/{user}', [UserController::class, 'destroy'])->name('users.destroy');
        Route::get('/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
        Route::put('/{user}/update', [UserController::class, 'update'])->name('users.update');
    });

    Route::prefix('orders')->group(function(){
        // Route::get('', [])->name('order.index');
        Route::get('/my-orders', [ServiceOrderController::class, 'myOrders'])->name('order.my-orders');
    });

});