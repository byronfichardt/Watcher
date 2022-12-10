<template>
    <div class="accordion h-full" id="accordionExample">
        <div class="accordion-item h-full bg-white border-b border-l border-r border-gray-200">
            <div :id="'collapse0'" class="accordion-collapse collapse show" :aria-labelledby="'heading0'"
                 data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5">
                    <ssh-pre language="php">
                        {{JSON.parse(event.payload)}}
                    </ssh-pre>
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
