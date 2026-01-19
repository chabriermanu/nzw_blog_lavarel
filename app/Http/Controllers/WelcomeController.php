<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index():Response
    {
        $posts=Post::with('author')->latest()->get();
        return Inertia::render('Welcome', [
            'posts'=>$posts,
            'canRegister' => Route::has('register'),
              ]);
    }
}
