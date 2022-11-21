<?php

namespace App\Domain\Exception;

class ExceptionDto
{
    public function __construct(
        protected int $serviceId,
        protected int $environmentId,
        protected string $message,
        protected array $stackTrace,
        protected array $payload,
        protected string $file,
        protected int $line,
        protected array $headers,
    ) {
    }

    /**
     * @return int
     */
    public function getServiceId(): int
    {
        return $this->serviceId;
    }

    /**
     * @return int
     */
    public function getEnvironmentId(): int
    {
        return $this->environmentId;
    }

    /**
     * @return string
     */
    public function getMessage(): string
    {
        return $this->message;
    }

    /**
     * @return array
     */
    public function getStackTrace(): array
    {
        return $this->stackTrace;
    }

    /**
     * @return array
     */
    public function getPayload(): array
    {
        return $this->payload;
    }

    /**
     * @return string
     */
    public function getFile(): string
    {
        return $this->file;
    }

    /**
     * @return int
     */
    public function getLine(): int
    {
        return $this->line;
    }

    /**
     * @return array
     */
    public function getHeaders(): array
    {
        return $this->headers;
    }
}
