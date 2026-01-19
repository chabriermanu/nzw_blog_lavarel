<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\WelcomeController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [WelcomeController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('/posts/{post}/like', [PostController::class, 'like'])->name('posts.like');
});

Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'userPosts'=> Auth::user()->posts()->with('author')->latest()->get(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile',[ProfileController::class,'edit'])->name('profil.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profil.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profil.destroy');
        return Inertia::render('Dashboard');
});


require __DIR__.'/settings.php';
