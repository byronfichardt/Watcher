<template>
    <nav aria-label="menu nav" class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

        <div class="flex flex-wrap justify-between">
            <div class="text-white ml-4 transition duration-500 ease-in-out ">
                <span style="font-size:30px;cursor:pointer"  >
                    <span id="navBurger" class="hidden transition duration-500 ease-in-out w-20" @click="openNav()">&#9776;</span>
                    <span id="navBurgerClose" class="text-4xl transition duration-500 ease-in-out w-20" @click="closeNav()">&times;</span>
                </span>

            </div>

            <div class="text-white ml-4 transition duration-500 ease-in-out ">
                <span style="font-size:30px "  class="text-center">
                    Watcher
                </span>

            </div>

            <div class="flex pt-2 justify-end  md:justify-end">
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

const openNav = () => {
    document.getElementById("mySidenav").style.width = "9rem";
    document.getElementById("main").style.marginLeft = "9rem";
    document.getElementById("navBurger").style.display = "none";
    document.getElementById("navBurgerClose").style.display = "inline-block";
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft= "0px";
    document.getElementById("navBurger").style.display = "inline-block";
    document.getElementById("navBurgerClose").style.display = "none";
}

const logout = () => {
    Inertia.post(route('logout'));
};
</script>

<style scoped>

</style>
