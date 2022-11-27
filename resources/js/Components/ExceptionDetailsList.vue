<template>
    <div class="border border-gray-200 bg-gray-100 rounded-lg py-1 grid grid-cols-8 mb-4">
        <div class=" col-span-4 py-2 ml-2">
            <div class="w-full">
                <a class="font-bold text-xl" href="#">{{ exception.message }}</a>
                <span class="font-bold text-gray-400 ml-4">{{ dayjs(exception.created_at).fromNow() }}</span>
            </div>
        </div>
    </div>
    <div class=" bg-gray-100 rounded-t-lg grid grid-cols-12">
        <div class="col-span-4 px-2 py-1">
            <h5 class="text-lg font-bold">File</h5>
        </div>
        <div class="col-span-8 flex gap-4 justify-between">
            <div class="flex">
                <h5 class="text-lg font-bold cursor-pointer p-1 rounded-t-lg"
                    @click="stacktrace = true; payload = false"
                    :class="stacktrace ? 'bg-white p-1 border-t border-l border-r border-gray-200' : ''">Stack
                    Trace</h5>
                <h5 class="text-lg font-bold cursor-pointer p-1 rounded-t-lg"
                    @click="stacktrace = false; payload = true"
                    :class="payload ? 'bg-white p-1 border-t border-l border-r border-gray-200' : ''">Payload</h5>
            </div>
            <button class=" font-bold cursor-pointer p-1 float-right border border-neutral-100"
                    @click="showAll = !showAll">{{ showAll ? 'Collapse vendor frames' : 'Show vendor frames' }}
            </button>
        </div>
    </div>

    <div class="grid grid-cols-12">
        <div class=" col-span-4 overflow-hidden ">
            <div class="w-full bg-white border">
                <div v-for="event in exception.events" class="text-lg border-b-2 p-3 bg-"
                     :class="selectedEvent && selectedEvent.id === event.id ? 'text-white bg-gray-700' : ''">
                    <a @click="selectedEvent = event">
                        <span class="cursor-pointer break-words dec block font-semibold">{{ event.message }}</span>
                        <span class=" text-sm cursor-pointer break-words dec block">{{
                                exception.file
                            }} : {{ exception.line }}</span>
                        <span class=" text-sm block">{{ dayjs(event.created_at).fromNow() }}</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-b from-gray-100 to-gray-100 col-span-8 overflow-hidden" v-if="stacktrace">
            <ExceptionDetails v-if="selectedEvent" :event="selectedEvent" :exception="exception"
                              :showAll="showAll"></ExceptionDetails>
        </div>
        <div class="bg-white pr-1 col-span-8 overflow-hidden" v-if="payload">
            <pre><code>{{ selectedEvent.payload }}</code></pre>
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

const showAll = ref(false);

const payload = ref(false);

const props = defineProps({
    exception: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
pre, code {
    font-family: monospace, monospace;
}

pre {
    overflow: auto;
}

pre > code {
    display: block;
    padding: 1rem;
    word-wrap: normal;
}
</style>
