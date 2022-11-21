<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';
import Nav from '@/Layouts/Partials/Nav.vue';
import Banner from '@/Components/Banner.vue';

defineProps({
    title: String,
});
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <Nav />

            <!-- Page Content -->
            <div>
                <main>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
