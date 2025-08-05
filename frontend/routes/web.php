<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::controller(PageController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/users','userPage')->name('users.index');
    Route::get('/products','productPage')->name('products.index');
    Route::get('/transactions','transactionPage')->name('transactions.index'); 
}); 