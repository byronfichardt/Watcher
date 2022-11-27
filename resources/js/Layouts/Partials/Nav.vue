<template>
    <nav aria-label="menu nav" class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

        <div class="flex flex-wrap justify-between">
            <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white ml-4 mt-3">
                <h3 class="text-2xl">
                    FreeET4
                </h3>
            </div>

            <div class="flex pt-2 content-center justify-between md:w-1/3 md:justify-end">
                <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li class="flex-1 md:flex-none md:mr-3">
                        <div class="relative inline-block">
                            <button @click="logout()" class="drop-button text-white py-2 px-2"> <span class="pr-2"><i class="em em-robot_face"></i></span> Logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script setup>
import {Inertia} from "@inertiajs/inertia";

const logout = () => {
    Inertia.post(route('logout'));
};
</script>

<style scoped>

</style>
