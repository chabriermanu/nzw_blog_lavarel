<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index():Response
    {
        $posts=Post::with('author')->latest()->get();
        return Inertia::render('Welcome', [
            'posts'=>$posts,
            'canRegister' =>config('services.registration.enabled', true),
              ]);
    }
}
