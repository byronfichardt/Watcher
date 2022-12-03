<?php

namespace App\Domain\Factories;

use App\Models\ExceptionEvent;

class ExceptionEventFactory
{
    public function create(
        int $exceptionId,
        string $message,
        string $stackTrace,
        string $host,
        string $ip,
        string $userAgent,
        string $payload = null
    ): void {
        ExceptionEvent::create([
            'exception_id' => $exceptionId,
            'message' => $message,
            'stack_trace' => $stackTrace,
            'payload' => $payload,
            'host' => $host,
            'ip' => $ip,
            'user_agent' => $userAgent,
        ]);
    }
}
