<template>
    <div class="p-2 rounded-lg bg-white max-w-lg mb-4">
        <form @submit.prevent="postServicesForm">
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group">
                    <input type="text" class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="ServiceName"
                            placeholder="Enter Service Name"
                            v-model="form.name">
                    <div v-if="form.errors.name">{{ form.errors.name }}</div>
                </div>
                <div class="form-group">
                    <button type="submit" :disabled="form.processing" class="
                        w-full
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Create
                    </button>
                </div>
            </div>

        </form>
    </div>
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
const form = useForm({
    name: '',
});
const postServicesForm = () => {
    form.post('/services', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('name');
        },
    });
}
</script>

<style scoped>

</style>
