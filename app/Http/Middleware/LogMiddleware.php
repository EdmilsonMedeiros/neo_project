<?php

namespace App\Http\Middleware;

use App\Models\Log;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class LogMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $route = $request->route();
        $functionName = $route ? $route->getActionName() : 'Unknown';

        Log::create([
            'function' => $functionName,
            'user' => $user->name . " - $user->id"
        ]);

        return $next($request);
    }
}
