<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExceptionEvent extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function exception(): BelongsTo
    {
        return $this->belongsTo(Exception::class);
    }
}
