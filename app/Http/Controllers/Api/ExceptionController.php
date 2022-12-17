<?php

namespace App\Http\Controllers\Api;

use App\Domain\Exception\ExceptionDto;
use App\Domain\Factories\ExceptionFactory;
use App\Http\Controllers\Controller;
use App\Models\Environment;
use App\Models\Service;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\NoReturn;

class ExceptionController extends Controller
{
    public function __construct(ExceptionFactory $exceptionFactory)
    {
        $this->exceptionFactory = $exceptionFactory;
    }

    #[NoReturn] public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'environment' => 'required|string',
            'exception' => 'required|array',
            'payload' => 'array',
        ]);

        $service = Service::where('service_id', $request->header('X-Service-ID'))->firstOrFail();
        $environment = Environment::where('name', $request->environment)
            ->where('service_id', $service->getKey())
            ->firstOrCreate([
                'name' => $validated['environment'],
                'service_id' => $service->getKey(),
            ]);

        $exception = $request->exception;
        $exception = new ExceptionDto(
            $service->getKey(),
            $environment->getKey(),
            $exception['message'],
            $exception['statusCode'],
            $exception['trace'],
            $validated['payload'],
            $exception['file'],
            $exception['line'],
            $exception['code'],
            $exception['server'],
            $exception['headers'],
            $exception['type'],
            $exception['breadcrumbList'] ?? [],
        );

        $this->exceptionFactory->create($exception);
    }
}
