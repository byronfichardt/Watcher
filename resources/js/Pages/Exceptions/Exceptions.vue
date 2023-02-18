<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Select from "@/Components/Select.vue";
import ExceptionList from "@/Components/ExceptionList.vue";

const props = defineProps({
    exceptions: {
        type: Array,
        required: true,
    },
    services: {
        type: Array,
        required: true,
    },
    environments: {
        type: Array,
        required: true,
    },
});

</script>

<template>
    <AppLayout title="Dashboard">
        <div id="main" class="mt-2 duration-500 ease-in-out ml-36">
            <div class="px-8">
                <div class="bg-gray-100 rounded-lg p-2 mb-2">
                    <div class="items-center flex flex-row gap-4">
                        <Select :name="'Service'" :models="services"/>
                        <Select :name="'Environment'" :models="environments"/>
                    </div>
                </div>
                <ExceptionList :exceptions="exceptions"/>
            </div>
        </div>
    </AppLayout>
</template>
