<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;



Route::get("/home",[AuthController::class,"home"]);

Route::post('/home', function () {
    return inertia('Home');
});
Route::get('/contact', function () {
    return Inertia::render('ContactForm');
});

// Handle form submission
Route::post('/contact', function (Request $request) {
    // Static validation (no database checks)
    $validated = $request->validate([
        'name' => 'required|min:3|max:50',
        'email' => 'required|email',
        'message' => 'required|min:10|max:500',
    ]);

    // If validation passes, return success (no database save)
    return back()->with('success', 'Form submitted successfully!');
});

Route::get("/test",function(){
    return Inertia::render('test');
});

Route::post("/test",function(){
    return Inertia::render('test');
});
Route::get('/csrf-token', function() {
    return response()->json(['token' => csrf_token()]);
});
