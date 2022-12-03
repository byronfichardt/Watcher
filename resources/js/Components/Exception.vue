<template>
    <div class="bg-white border p-2 pr-1 grid grid-cols-12">
        <div class=" col-span-6">
            <Link :href="'/exception/' + exception.id">
                <span class= "w-full">
                    <div class="font-bold text-lg flex gap-4" >
                        {{exception.type ? exception.type : exception.message}}
                        <span class="font-bold text-gray-800 mt-1.5 text-sm">{{ exception.method ?? '' }} {{ exception.route ? exception.route.split('?')[0] : '' }}</span>
                    </div>
                </span>
                <span class="font-bold text-gray-500 mt-0.5">{{ exception.type ? exception.message : exception.file + '  :  ' + exception.line}}</span>
                <span class="block">
                    <span v-if="exception.new" class="px-2 py-1 mr-2 rounded text-gray-500 bg-red-200 font-semibold text-sm align-center flex w-max mt-1 mb-2 float-left">
                         New Issue
                    </span>
                    <span class="pr-2 pt-1.5 float-left">{{ dayjs(exception.last_occurred_at).fromNow() }}</span>
                </span>
            </Link>
        </div>
        <div class="col-span-1">
            <p class="text-lg mt-7">{{ exception.environment.name }}</p>
        </div>
        <div class="col-span-1">
            <p class="text-lg mt-7">{{ exception.last_day }}</p>
        </div>
        <div class="col-span-1">
            <p class="text-lg mt-7">{{ exception.last_week }}</p>
        </div>
        <div class=" col-span-1">
            <p class="text-lg mt-7">{{ exception.events.length }}</p>
        </div>
        <div class=" col-span-1">
            <p class="text-lg mt-7">{{ exception.users }}</p>
        </div>
        <div class=" col-span-1">
            <div class="mt-6">
                <button @click="resolve(exception)" class="border border-gray-500 rounded-md bg-white focus:outline-none p-1
                 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="button" :id="'flexCheck' + exception.id">
                    Resolve
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import {Link} from '@inertiajs/inertia-vue3';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Inertia} from "@inertiajs/inertia";
dayjs.extend(relativeTime);

defineProps({
    exception: {
        type: Object,
        required: true,
    },
});

const resolve = (exception) => {
    Inertia.post('/exception/' + exception.id + '/resolve', [], {
        preserveState: true,
        preserveScroll: true,
        only: ['exceptions'],
    });
}
</script>

<style scoped>

</style>
