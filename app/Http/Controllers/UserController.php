<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class UserController extends Controller
{
    /**
     * Get users
     */
    public function getUsers(Request $request){
        $perpage        = $request->perPage;
        $searchedValue  = $request->searchedValue;
        $page           = $request->page;

        $registers = User::where('name', 'LIKE', "%$searchedValue%")
            ->orWhere('email', 'LIKE', "%$searchedValue%")
            ->whereNot('id', Auth::user()->id)
            ->with('permissions')
            ->paginate($perpage, ['*'], 'page', $page);
            
        return response()->json($registers, 200);
    }

    public function index()
    {
        $users = User::whereNot('id', Auth::user()->id)->get();
        $permissions = Permission::all();
    
        foreach ($users as $user) {
            $user['permissions'] = $user->getPermissionNames();
        }

        return Inertia::render('Users/Index', [
            'users' => $users,
            'permissions' => $permissions,
            'user' => Auth::user()
        ]);
    }

    public function permissionsSync(User $user, Request $request)
    {
        try{
            $permissions = $request->all();

            $user->syncPermissions($permissions);
        }catch(Exception $e){
            return redirect()->back()->with('error', 'Algo deu errado: ' . $e->getMessage());
        }
        
        return redirect()->back()->with('success', 'Permissões atualizadas.');
    }
}
