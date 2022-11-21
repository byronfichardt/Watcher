<template>
    <div class=" col-span-12 pb-4 ml-2">
        <div class="w-full flex justify-between">
            <a class="font-bold text-xl" href="#">{{ exception.message }}</a>
        </div>
    </div>
    <div class="bg-gray-100 border-b-4 border-gray-200 rounded-t-lg px-3 py-1 grid grid-cols-12">
        <div class=" col-span-4 px-2">
            <h5 class="text-lg font-bold">File</h5>
        </div>
        <div class="col-span-8 px-2">
            <div class="grid grid-cols-12">
                <div class="col-span-10 flex justify-between">
                    <h5 class="text-lg font-bold px-2">Trace</h5>
                    <h5 class="text-lg font-bold px-2">Line</h5>
                </div>
                <div class="col-span-2">

                </div>
            </div>
        </div>
    </div>

    <div v-for="event in exception.events">
        <ExceptionDetails :event="event" :exception="exception"></ExceptionDetails>
    </div>
</template>

<script setup>
import ExceptionDetails from "@/Components/ExceptionDetails.vue";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const props = defineProps({
    exception: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>

</style>
