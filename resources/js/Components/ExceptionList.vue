<template>
    <div class="bg-gray-100 border-gray-200 rounded-t-lg p-1 grid grid-cols-12 text-base">
        <div class=" col-span-6">
        </div>
        <div class="col-span-1">
            <h5 class=" font-bold">Environment</h5>
        </div>
        <div class="col-span-1">
            <h5 class="font-bold">24 Hours</h5>
        </div>
        <div class="col-span-1">
            <h5 class=" font-bold">7 Days</h5>
        </div>
        <div class=" col-span-1">
            <h5 class=" font-bold">Events</h5>
        </div>
        <div class=" col-span-1">
            <h5 class=" font-bold">Users</h5>
        </div>
        <div class=" col-span-1">
            <h5 class=" font-bold">Resolve</h5>
        </div>
    </div>
    <div v-for="exception in exceptions">
        <Exception :exception="exception"></Exception>
    </div>
</template>

<script setup>
import Exception from "@/Components/Exception.vue";

const props = defineProps({
    exceptions: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped>

</style>
