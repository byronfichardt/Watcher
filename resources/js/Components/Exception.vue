<template>
    <div class="bg-gradient-to-b from-gray-100 to-gray-100 border-b-4 p-5 pr-1 grid grid-cols-12">
        <div class=" col-span-8">
             <span class="flex gap-4">
                 <Link class="font-bold text-xl" :href="'/exception/' + exception.id">{{exception.message }}</Link>
                 <span class="font-bold text-gray-400 mt-0.5">{{ exception.file }}</span>
             </span>
            <p class="text-xl">{{ exception.description }}</p>
            <span class="flex gap-4">
                <span class="px-2 py-2 flex align-center">{{ exception.last_occurred_at }}</span>
                <span v-if="exception.new" class="px-2 py-1 rounded text-gray-500 bg-red-200 font-semibold text-sm align-center flex w-max mt-1 mb-2">
                     New Issue
                </span>
            </span>
        </div>
        <div class="col-span-1">
            <p class="text-xl mt-6">{{ exception.last_day }}</p>
        </div>
        <div class="col-span-1">
            <p class="text-xl mt-6">{{ exception.last_week }}</p>
        </div>
        <div class=" col-span-1">
            <p class="text-xl mt-6">{{ exception.events.length }}</p>
        </div>
        <div class=" col-span-1">
            <p class="text-xl mt-6">{{ exception.users }}</p>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import {Link} from '@inertiajs/inertia-vue3';

defineProps({
    exception: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>

</style>
