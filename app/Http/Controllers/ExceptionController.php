<?php

namespace App\Http\Controllers;

use App\Domain\Exception\ExceptionDto;
use App\Domain\Factories\ExceptionFactory;
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
            'exception.message' => 'required|string',
            'exception.trace' => 'required|array',
            'exception.payload' => 'array',
            'exception.file' => 'required|string',
            'exception.line' => 'required|integer',
            'headers' => 'required|array',
        ]);
        $service = Service::where('service_id', $request->header('X-Service-ID'))->firstOrFail();
        $environment = Environment::where('name', $request->environment)
            ->where('service_id', $service->getKey())
            ->firstOrCreate([
                'name' => $validated['environment'],
                'service_id' => $service->getKey(),
            ]);

        $exception = new ExceptionDto(
            $service->getKey(),
            $environment->getKey(),
            $validated['exception']['message'],
            $validated['exception']['trace'],
            $validated['exception']['payload'],
            $validated['exception']['file'],
            $validated['exception']['line'],
            $validated['headers'],
        );

        $this->exceptionFactory->create($exception);
    }
}
