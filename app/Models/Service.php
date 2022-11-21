<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\HasApiTokens;

class Service extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function environments(): HasMany
    {
        return $this->hasMany(Environment::class);
    }
}
