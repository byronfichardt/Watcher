<script setup>
import Nav from '@/Layouts/Partials/Nav.vue';
import SideNav from "@/Layouts/Partials/SideNav.vue";

defineProps({
    title: String,
});
</script>

<template>
    <header class="w-screen">
        <Nav />
    </header>

    <main class="h-screen">
        <SideNav />
        <div class="flex flex-row ml-48">
            <section class="w-full">
                <slot />
            </section>
        </div>
    </main>
</template>
