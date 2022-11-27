<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class ResolvedScope implements Scope
{
    /**
     * {@inheritDoc}
     */
    public function apply(Builder $builder, Model $model)
    {
        $builder->where('resolved', false);
    }
}
