<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ClearOldLogs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'logs:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Logs Remove';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $limitDate = Carbon::now()->subDays(30);

        $removedRegisters = DB::table('logs')
            ->where('created_at', '<', $limitDate)
            ->delete();
        Log::info('Old records were successfully deleted!');
        $this->info("Old records deleted successfully! - ".Carbon::now());
    }
}
