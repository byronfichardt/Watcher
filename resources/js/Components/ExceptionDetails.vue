<template>
    <div class="bg-gradient-to-b from-gray-100 to-gray-100 border-b-4 p-3 pr-1 grid grid-cols-12 overflow-hidden " :class="hide ? 'h-20' : ''">
        <div class=" col-span-4 px-2">
             <div class="w-full">
                 <div>
                     <a class=" text-lg" href="#">{{ exception.file }}</a>
                     <span>{{exception.line}}</span>
                 </div>
                 <span class="font-bold text-gray-400">{{ dayjs(event.created_at).fromNow() }}</span>
             </div>
        </div>

        <div class="col-span-8 px-2">
            <div class="grid grid-cols-12">
                <div class="col-span-10">
                    <span v-for="trace in filteredItems" class="flex justify-between">
                        <div class="max-w-3xl overflow-hidden px-2">{{trace.file}}</div>
                        <div class="px-2"> {{trace.line}}</div>
                    </span>
                </div>
                <button class="text-gray-400 col-span-2 flex items-start justify-end" @click="hide = !hide">{{ hide ? 'Show more' : 'Show less' }}</button>
            </div>
        </div>
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

const hide = ref(true);

const filteredItems = computed(() => {
    let items = JSON.parse(props.event.stack_trace)
    return items.filter((item, index) => {
        if (hide.value === true) {
            if(index >= 2) {
                return false
            }
        }
        return true;
    });
});

</script>

<style scoped>

</style>
