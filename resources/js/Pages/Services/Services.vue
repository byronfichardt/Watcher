<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ServiceForm from "@/Pages/Services/ServiceForm.vue";
import ServiceList from "@/Components/ServiceList.vue";
import TokenModal from "@/Components/TokenModal.vue";

const props = defineProps({
    token: {
        type: String,
    },
    services: {
        type: Array,
        required: true,
    },
});

</script>

<template>
    <AppLayout title="Services">
        <div id="main" class="mt-14 duration-500 ease-in-out ml-36">
            <div class="p-6">
                <TokenModal :token="token" v-if="props.token"/>
                <ServiceForm></ServiceForm>
                <div class="bg-gray-100 border-b-4 border-gray-200 rounded-t-lg p-1 grid grid-cols-12">
                    <div class=" col-span-4">
                        <h5 class="text-lg font-bold ml-3">Service Name</h5>
                    </div>
                    <div class="col-span-4">
                        <h5 class="text-lg font-bold ml-3">Service Id</h5>
                    </div>
                </div>
                <ServiceList :services="services"></ServiceList>
            </div>
        </div>
    </AppLayout>
</template>
