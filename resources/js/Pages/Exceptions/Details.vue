<template>
    <AppLayout title="Details">
        <div id="main" class="mt-14 duration-500 ease-in-out ml-36">
            <div class="p-6">
                <ExceptionDetailsList :exception="exception"/>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ExceptionDetailsList from "@/Components/ExceptionDetailsList.vue";

const props = defineProps({
    exception: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>

</style>
