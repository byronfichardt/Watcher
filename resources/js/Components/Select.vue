<template>
    <div class="xl:w-60">
        <select v-model="selected" class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected disabled>{{ name }}</option>
            <option v-for="model in models" :value="model.id">{{ model.name }}</option>
        </select>
    </div>
</template>

<script setup>
import {ref, watch} from "vue";
import { Inertia } from '@inertiajs/inertia'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    models: {
        type: Array,
        required: true,
    },
});

const selected = ref(props.name);

watch(selected, (val) => {
    let pathname = window.location.pathname;
    let search = window.location.search;
    Inertia.get(pathname + search, {
        [props.name.toLowerCase()]: val
    }, {
        preserveState: true,
        preserveScroll: true,
    });
});
</script>

<style scoped>

</style>
