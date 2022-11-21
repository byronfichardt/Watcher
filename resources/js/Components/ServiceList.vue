<template>
    <div v-for="service in services">
        <Service :service="service"></Service>
    </div>
</template>

<script setup>
import Service from "@/Components/Service.vue";

const props = defineProps({
    services: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped>

</style>
