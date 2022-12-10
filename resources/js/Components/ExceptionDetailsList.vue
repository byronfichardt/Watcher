<template>
    <div class="border border-gray-200 bg-gray-100 rounded-lg py-1 grid grid-cols-8 mb-4">
        <div class=" col-span-12 py-1 ml-2">
            <div class="w-full">
                <span class="flex justify-between">
                    <span class=" flex gap-4">
                        <span class="font-bold text-xl">{{ exception.type }}</span>
                        <span class="text-sm mt-1.5">{{exception.method + ' ' + exception.route.split('?')[0]}}</span>
                    </span>
                    <span class="mr-4 text-sm border border-red-300 rounded pt-1 px-1">{{ exception.environment.name.toUpperCase() }}</span>
                </span>

                <span class="font-bold text-gray-600 text-lg">{{ exception.message }}</span>
                <span class="font-bold text-gray-400 block">{{ dayjs(exception.created_at).fromNow() }}</span>
            </div>
        </div>
    </div>
    <div class=" bg-gray-100 rounded-t-lg grid grid-cols-12">
        <div class="col-span-4 px-2 py-1">
            <h5 class="text-lg font-bold">File</h5>
        </div>
        <div class="col-span-8 flex gap-4 justify-between">
            <div class="flex gap-1">
                <h5 class="text-lg font-bold cursor-pointer p-1 rounded-t-lg"
                    @click="stacktrace = true; payload = false; request = false"
                    :class="stacktrace ? 'bg-white p-1 border-t border-l border-r border-gray-200' : ''">Stack
                    Trace</h5>
                <h5 class="text-lg font-bold cursor-pointer p-1 rounded-t-lg"
                    @click="stacktrace = false; payload = true; request = false"
                    :class="payload ? 'bg-white p-1 border-t border-l border-r border-gray-200' : ''">Payload</h5>
                <h5 class="text-lg font-bold cursor-pointer p-1 rounded-t-lg"
                    @click="stacktrace = false; payload = false; request = true"
                    :class="request ? 'bg-white p-1 border-t border-l border-r border-gray-200' : ''">Request</h5>
            </div>
            <button class=" font-bold cursor-pointer p-1 float-right border border-neutral-100"
                    @click="showAll = !showAll">{{ showAll ? 'Collapse vendor frames' : 'Show vendor frames' }}
            </button>
        </div>
    </div>

    <div class="grid grid-cols-12">
        <div class=" col-span-4 overflow-hidden ">
            <div class="w-full bg-white border">
                <div v-for="event in exception.events" class="text-lg p-3 bg-"
                     :class="selectedEvent && selectedEvent.id === event.id ? 'text-white bg-gray-700' : ''">
                    <a @click="selectedEvent = event">
                        <span class="font-semibold cursor-pointer break-words dec block">{{
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
        <div class="bg-gradient-to-b from-gray-100 to-gray-100 col-span-8 overflow-hidden" v-if="payload">
            <PayloadDetails v-if="selectedEvent" :event="selectedEvent"></PayloadDetails>
        </div>
        <div class="bg-gradient-to-b from-gray-100 to-gray-100 col-span-8 overflow-hidden" v-if="request">
            <RequestDetails v-if="selectedEvent" :event="selectedEvent" :exception="exception"></RequestDetails>
        </div>
    </div>
</template>

<script setup>
import ExceptionDetails from "@/Components/ExceptionDetails.vue";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {ref} from "vue";
import PayloadDetails from "@/Components/PayloadDetails.vue";
import RequestDetails from "@/Components/RequestDetails.vue";

dayjs.extend(relativeTime);

const props = defineProps({
    exception: {
        type: Object,
        required: true,
    },
});

const selectedEvent = ref(null);

const stacktrace = ref(true);

const request = ref(false);

const showAll = ref(false);

const payload = ref(false);

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
