<template>
    <div id="mySidenav" class="duration-500 ease-in-out fixed h-full w-36 z-10 top-0 left-0 bg-gray-700 overflow-hidden">
        <ul class="mt-20">
            <li class="mr-3 flex-1">
                <div v-if="$page.component === 'Services/Services'">
                    <Link :href="'/services'" class="block duration-250 text-xl text-gray-300 hover:text-white px-8 pb-4">
                        <span class="pb-1 md:pb-0 text-gray-400 md:text-gray-200 block md:inline-block underline">Projects</span>
                    </Link>
                </div>
                <div v-else>
                    <Link :href="'/services'" class="block duration-250 text-xl text-gray-300 hover:text-white px-8 pb-4">
                        <span class="pb-1 md:pb-0 text-gray-400 md:text-gray-200 block md:inline-block">Projects</span>
                    </Link>
                </div>
            </li>
            <li class="mr-3 flex-1">
                <div v-if="$page.component === 'Exceptions/Exceptions'">
                    <Link :href="route('dashboard')" class="block duration-250 text-xl text-gray-300 hover:text-white px-8 pb-4">
                        <span class="pb-1 md:pb-0 text-gray-400 md:text-gray-200 block md:inline-block underline">Issues</span>
                    </Link>
                </div>
                <div v-else>
                    <Link :href="route('dashboard')" class="block duration-250 text-xl text-gray-300 hover:text-white px-8 pb-4">
                        <span class="pb-1 md:pb-0 text-gray-400 md:text-gray-200 block md:inline-block">Issues</span>
                    </Link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'

</script>

<style scoped>
</style>
