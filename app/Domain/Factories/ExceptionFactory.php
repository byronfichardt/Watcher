<?php

namespace App\Domain\Factories;

use App\Domain\Exception\ExceptionDto;
use App\Models\Exception;
use App\Models\ExceptionEvent;

class ExceptionFactory
{
    protected ExceptionEventFactory $exceptionEventFactory;

    public function __construct(ExceptionEventFactory $exceptionEventFactory)
    {
        $this->exceptionEventFactory = $exceptionEventFactory;
    }

    public function create(ExceptionDto $exceptionDto): void
    {
        $exception = Exception::where('message', $exceptionDto->getMessage())->first();
        if ($exception) {
            $this->reEnableIfRecurrence($exception);
            $exception->last_occurred_at = now();
            $exception->save();
        } else {
            $exception = Exception::create([
                'message' => $exceptionDto->getMessage(),
                'last_occurred_at' => now(),
                'new' => true,
                'users' => 1,
                'resolved' => false,
                'file' => $exceptionDto->getFile(),
                'line' => $exceptionDto->getLine(),
                'environment_id' => $exceptionDto->getEnvironmentId(),
                'service_id' => $exceptionDto->getServiceId(),
                'code' => $exceptionDto->getCode(),
                'status_code' => $exceptionDto->getStatusCode(),
            ]);
        }

        $this->createExceptionEvent($exceptionDto, $exception);
        $this->recalculateStats($exception);
    }

    /**
     * @param ExceptionDto $exceptionEvent
     * @param Exception $exception
     * @return void
     */
    protected function createExceptionEvent(ExceptionDto $exceptionEvent, Exception $exception): void
    {
        $this->exceptionEventFactory->create(
            $exception->getKey(),
            $exceptionEvent->getMessage(),
            json_encode($exceptionEvent->getStackTrace()),
            json_encode($exceptionEvent->getPayload()),
        );
    }

    protected function reEnableIfRecurrence(Exception $exception): void
    {
        if ($exception && $exception->resolved) {
            $exception->resolved = false;
            $exception->save();
        }
    }

    protected function recalculateStats(Exception $exception): void
    {
        $exception->last_day = $exception->events()->whereDate('created_at', '>=', now()->subDay())->count();
        $exception->last_week = $exception->events()->whereDate('created_at', '>=', now()->subWeek())->count();
        $exception->last_month = $exception->events()->whereDate('created_at', '>=', now()->subMonth())->count();
        $exception->save();
    }
}
