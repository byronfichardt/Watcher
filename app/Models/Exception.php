<?php

namespace App\Models;

use App\Models\Scopes\ResolvedScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Exception extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'server' => 'array',
        'headers' => 'array',
    ];

    public static function booted()
    {
        static::addGlobalScope(new ResolvedScope());
    }

    public function events(): HasMany
    {
        return $this->hasMany(ExceptionEvent::class);
    }

    public function service(): HasOne
    {
        return $this->hasOne(Service::class, 'id', 'service_id');
    }

    public function environment(): HasOne
    {
        return $this->hasOne(Environment::class, 'id', 'environment_id');
    }
}
