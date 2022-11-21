<?php

use App\Models\Environment;
use App\Models\Service;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exceptions', function (Blueprint $table) {
            $table->id();
            $table->string('message');
            $table->dateTime('last_occurred_at');
            $table->integer('users')->nullable();
            $table->integer('last_day')->nullable();
            $table->integer('last_week')->nullable();
            $table->integer('last_month')->nullable();
            $table->boolean('new')->default(true);
            $table->boolean('resolved')->default(false);
            $table->string('file');
            $table->integer('line');
            $table->foreignIdFor(Environment::class);
            $table->foreignIdFor(Service::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exceptions');
    }
};
