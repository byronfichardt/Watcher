<template>
    <div class="bg-gradient-to-b from-gray-100 to-gray-100 border-b-4 p-5 pr-1 grid grid-cols-12">
        <div class=" col-span-4">
            <p class="text-xl mt-1 font-bold">{{ service.name }}</p>
        </div>
        <div class="col-span-4">
            <p class="text-xl mt-1">{{ service.service_id }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    service: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>

</style>
