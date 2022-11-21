<?php

namespace App\Console\Commands;

use App\Models\Exception;
use Illuminate\Console\Command;

class CheckNewExceptions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'exception:status:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check for new exceptions and set them to old if they are older than 12 hours';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Exception::where('new', true)->get()
            ->map(function (Exception $exception) {
                if($exception->created_at->diffInHours(now()) > 12) {
                    $exception->new = false;
                    $exception->save();
                }
            });
    }
}
