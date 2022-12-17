<template>
    <div class="code">
        <span class="code-line flex" v-for="(item, index) in parsedCode">
            <span>{{parseInt(index) + 1}}</span>
            <span class="code-line-number ml-4 w-full" :class="(parseInt(index) + 1) === parseInt(line) ? 'bg-red-300': ''">
                <ssh-pre language="php">
                    {{ item }}
                </ssh-pre>
            </span>
        </span>
    </div>
</template>

<script setup>
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import {computed} from "vue";
const props = defineProps({
    code: {
        type: Array,
        required: true,
    },
    line: {
        type: Number,
        required: true,
    },
});

const parsedCode = computed(() => {
    try {
        return JSON.parse(props.code)
    } catch (e) {
        return [props.code]
    }
});
</script>

<style scoped>
.ssh-pre {
    margin-top: unset;
    padding: unset;
    border: unset;
    background-color: unset;
}
</style>
