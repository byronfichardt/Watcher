<?php

namespace Database\Factories;

use App\Models\ExceptionEvent;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Exception>
 */
class ExceptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "message"=> $this->faker->sentence,
            "last_occurred_at"=> $this->faker->dateTime,
            "users" => $this->faker->randomDigitNotNull,
            "last_day"=> $this->faker->randomDigitNotNull,
            "last_week"=> $this->faker->randomDigitNotNull,
            "last_month"=> $this->faker->randomDigitNotNull,
            "new"=> $this->faker->boolean,
            "file"=> $this->faker->filePath()
        ];
    }
}
