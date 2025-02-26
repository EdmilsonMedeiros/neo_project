<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


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

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ], [
            'name.required' => 'O nome é obrigatório.',
            'email.required' => 'O email é obrigatório.',
            'email.unique' => 'O email já está em uso.',
            'password.required' => 'A senha é obrigatória.',
            'password.confirmed' => 'As senhas não conferem.',
            'password.min' => 'A senha deve ter no mínimo 6 caracteres.',
        ]);

        try{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return redirect()->route('users.index')->with('success', 'Usuário criado com sucesso.');
        }catch(Exception $e){
            return redirect()->back()->with('error', 'Algo deu errado: ' . $e->getMessage());
        }
    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => $user
        ]);
    }

    public function update(User $user, Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:6|confirmed',
        ], [
            'name.required' => 'O nome é obrigatório.',
            'email.required' => 'O email é obrigatório.',
            'email.unique' => 'O email já está em uso.',
            'password.confirmed' => 'As senhas não conferem.',
            'password.min' => 'A senha deve ter no mínimo 6 caracteres.',
        ]);
        
        try{
            $data = [
                'name' => $request->name,
                'email' => $request->email,
            ];

            if ($request->filled('password')) {
                $data['password'] = Hash::make($request->password);
            }

            $user->update($data);

            return redirect()->route('users.index')->with('success', 'Usuário atualizado com sucesso.');
        }catch(Exception $e){
            return redirect()->back()->with('error', 'Algo deu errado: ' . $e->getMessage());
        }
    }

    public function destroy(User $user)
    {
        try{
            $user->delete();

            return redirect()->back()->with('success', 'Usuário deletado com sucesso.');
        }catch(Exception $e){
            return redirect()->back()->with('error', 'Algo deu errado: ' . $e->getMessage());
        }
    }
}
