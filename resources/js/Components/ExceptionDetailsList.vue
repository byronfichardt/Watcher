<template>
    <div class=" border-gray-200 rounded-t-lg px-3 py-1 grid grid-cols-4 w-2/6">
        <div class=" col-span-4 pb-4 ml-2">
            <div class="w-full">
                <a class="font-bold text-xl break-words" href="#">{{ exception.message }}</a>
                <span class="font-bold text-gray-400 ml-4">{{ dayjs(exception.created_at).fromNow() }}</span>
            </div>
        </div>
    </div>
    <div class="bg-gray-100 border-b-4 border-gray-200 rounded-t-lg px-3 py-1 grid grid-cols-12">
        <div class="col-span-4 px-2">
            <h5 class="text-lg font-bold">File</h5>
        </div>
        <div class="col-span-4 px-2 flex gap-4">
            <h5 class="text-lg font-bold cursor-pointer" @click="stacktrace = true; payload = false" :class="stacktrace ? 'bg-gray-200' : ''">Stack Trace</h5>
            <h5 class="text-lg font-bold cursor-pointer" @click="stacktrace = false; payload = true" :class="payload ? 'bg-gray-200' : ''">Payload</h5>
        </div>
    </div>

    <div class="grid grid-cols-12" >
        <div class="bg-gray-100 pr-1 col-span-4 overflow-hidden " >
            <div class="w-full">
                <div v-for="event in exception.events" class="text-lg border-b-4 p-3" :class="selectedEvent && selectedEvent.id === event.id ? 'bg-gray-200' : ''">
                    <a @click="selectedEvent = event"  class="cursor-pointer">{{ exception.file }} : {{exception.line}}</a>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-b from-gray-100 to-gray-100 border-b-4 p-3 pr-1 col-span-8 overflow-hidden"  v-if="stacktrace">
            <ExceptionDetails v-if="selectedEvent" :event="selectedEvent" :exception="exception"></ExceptionDetails>
        </div>
        <div class="bg-gradient-to-b from-gray-100 to-gray-100 border-b-4 p-3 pr-1 col-span-8 overflow-hidden"  v-if="payload">
            <pre class="text-sm text-gray-500 font-mono">{{ selectedEvent.payload }}</pre>
        </div>
    </div>
</template>

<script setup>
import ExceptionDetails from "@/Components/ExceptionDetails.vue";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {ref} from "vue";
dayjs.extend(relativeTime);

const selectedEvent = ref(null);

const stacktrace = ref(true);

const payload = ref(false);

const props = defineProps({
    exception: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>

</style>
