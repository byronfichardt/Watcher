<?php

namespace Database\Factories;

use App\Models\ExceptionEvent;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ExceptionEvent>
 */
class ExceptionEventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "exception_id"=> $this->faker->randomDigitNotNull,
            "trace"=> $this->faker->text
        ];
    }
}
