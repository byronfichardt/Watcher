<template>
    <nav aria-label="alternative nav" class="basis-1/12 fixed">
        <div class="bg-gray-800 h-screen z-10 ">
            <div class="md:mt-12 md:w-48 content-center md:content-start text-left justify-between">
                <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left mt-4">
                    <li class="mr-3 flex-1">
                        <div v-if="$page.component === 'Services/Services'">
                            <Link :href="'/services'" class="block py-1 md:py-3 pl-1 align-middle text-white bg-gray-600 rounded no-underline hover:text-white">
                                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Projects</span>
                            </Link>
                        </div>
                        <div v-else>
                            <Link :href="'/services'" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white">
                                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Projects</span>
                            </Link>
                        </div>
                    </li>
                    <li class="mr-3 flex-1">
                        <div v-if="$page.component === 'Dashboard'">
                            <Link :href="route('dashboard')" class="block py-1 md:py-3 pl-1 align-middle text-white bg-gray-600 rounded no-underline hover:text-white">
                                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Issues</span>
                            </Link>
                        </div>
                        <div v-else>
                            <Link :href="route('dashboard')" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white">
                                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Issues</span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
</script>

<style scoped>

</style>
