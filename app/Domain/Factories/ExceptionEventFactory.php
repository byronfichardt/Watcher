<?php

namespace App\Domain\Factories;

use App\Models\ExceptionEvent;

class ExceptionEventFactory
{
    public function create(int $exceptionId, string $message, string $stackTrace, string $payload = null, string $tags = null)
    {
        ExceptionEvent::create([
            'exception_id' => $exceptionId,
            'message' => $message,
            'stack_trace' => $stackTrace,
            'payload' => $payload,
        ]);
    }
}
