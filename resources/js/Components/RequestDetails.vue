<template>
    <div class="accordion h-full" id="accordionExample">
        <div class="accordion-item h-full bg-white border-b border-l border-r border-gray-200">
            <div :id="'collapse0'" class="accordion-collapse collapse show" :aria-labelledby="'heading0'"
                 data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5">
                    <ul>
                        <li>
                            <label >
                                <span class="font-bold">Host : </span>
                                <span>{{ event?.host }}</span>
                            </label>
                        </li>
                        <li>
                            <label >
                                <span class="font-bold">User-Agent : </span>
                                <span>{{ event.user_agent }}</span>
                            </label>
                        </li>
                        <li>
                            <label >
                                <span class="font-bold">IP : </span>
                                <span>{{ event.ip }}</span>
                            </label>
                        </li>
                        <li>
                            <label >
                                <span class="font-bold">Browser : </span>
                                <span>{{ exception.requestDetails.browser?.name +' : '+ (exception.requestDetails.browser.version?.value) }}</span>
                            </label>
                        </li>

                        <li>
                            <label >
                                <span class="font-bold">OS : </span>
                                <span>{{ exception.requestDetails.os?.name +' : '+ (exception.requestDetails.os.version?.value) }}</span>
                            </label>
                        </li>

                        <li>
                            <label >
                                <span class="font-bold">Device : </span>
                                <span>{{ exception.requestDetails.device?.type }}</span>
                            </label>
                        </li>
                    </ul>
                    <hr class="mt-2">
                    <h3 class="font-bold text-xl py-2">Request Headers</h3>
                    <ul v-for="(header, index) in exception.headers">
                        <li>
                            <label >
                                <span class="font-bold">{{ index }} : </span>
                                <span>{{ header }}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

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
.ssh-pre {
    margin-top: unset;
    padding: unset;
    border: unset;
    background-color: unset;
}
.collapse {
    visibility: visible!important;
}
</style>
