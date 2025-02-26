<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([PermissionSeeder::class]);

        $johndoe = User::factory()->create([
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => Hash::make('secret')
        ]);

        $peter = User::factory()->create([
            'name' => 'Peter Parker',
            'email' => 'peterparker@example.com',
            'password' => Hash::make('secret')
        ]);

        User::factory(10)->create();
    }
}
