<template>
    <div class="bg-gray-100 border-b-4 border-gray-200 rounded-t-lg p-1 grid grid-cols-12">
        <div class=" col-span-8">
        </div>
        <div class="col-span-1">
            <h5 class="text-lg font-bold">7 days</h5>
        </div>
        <div class="col-span-1">
            <h5 class="text-lg font-bold">24 Hours</h5>
        </div>
        <div class=" col-span-1">
            <h5 class="text-lg font-bold">Events</h5>
        </div>
        <div class=" col-span-1">
            <h5 class="text-lg font-bold">Users</h5>
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
