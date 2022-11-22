<template>
    <div class="grid grid-cols-12">
        <span v-for="trace in JSON.parse(props.event.stack_trace)" class="col-span-12">
            <div class="grid grid-cols-12">
                <div class="col-span-10 overflow-hidden px-2 ">{{trace.file}}</div>
                <div class="col-span-2 px-2 text-right"> {{trace.line}}</div>
            </div>
        </span>
    </div>
</template>

<script setup>
import {computed, defineProps, ref} from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
    exception: {
        type: Object,
        required: true,
    },
});

</script>

<style scoped>

</style>
