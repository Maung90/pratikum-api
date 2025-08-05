<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Yajra\DataTables\DataTables;

class PageController extends Controller
{
    public function index()
    { 
        return view('home');
    }

    public function userPage()
    { 
        $apiUrl = env('USERS_URL');
        return view('users', compact('apiUrl'));
    }    

    public function productPage()
    {
        $url = env('PRODUCTS_URL'); 
        $response = Http::get($url);
        $posts = $response->json();

        return view('home', compact('posts'));
    }
    
    public function transactionPage()
    {
        $url = env('transactions_list_URL'); 
        $response = Http::get($url);
        $posts = $response->json();

        return view('home', compact('posts'));
    }
}
