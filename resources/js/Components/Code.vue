<template>
    <div class="code">
        <span class="code-line flex" v-for="(item, index) in parsedCode">
            <span>{{parseInt(index) + 1}}</span>
            <span class="code-line-number ml-4 w-full" :class="(parseInt(index) + 1) === parseInt(line) ? 'bg-neutral-300': ''">
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
</script >

<style>
.ssh-pre {
    margin-top: unset;
    padding: unset;
    border: unset;
    background-color: unset;
}

.txt {color: #333;}
.comment {color: #aaa;}
.quote {color: #c11;}
.number {color: #c11;}
.boolean {color: #c11;}
.keyword {color: #3131bb !important;}
.this {color: #c6d;}
.punctuation {color: #7a7a7a !important;}
.external-var, .special {color: #f63;}
.variable {color: #1d79ee !important;}
.obj-attr {color: #0bc;}

[data-type="shell"] .keyword {color: #ff5252;}
[data-type="shell"] .param {color: #f63;}

[data-type="html"] .doctype {color: #02027e;}
[data-type="html"] .tag-name {color: #11c;}
[data-type="html"] .attribute {color: #f63;}

[data-type="html-vue"] .doctype {color: #02027e;}
[data-type="html-vue"] .tag-name {color: #42b983;}
[data-type="html-vue"] .punctuation {color: #128953;}
[data-type="html-vue"] .attribute {color: #ff5252;}

[data-type="xml"] .doctype {color: #02027e;}
[data-type="xml"] .tag-name {color: #11c;}
[data-type="xml"] .attribute {color: #f93;}

[data-type="css"] .selector {color: #f0d;}
[data-type="css"] .class-id {color: #f0d;}
[data-type="css"] .pseudo {color: #f35;}
[data-type="css"] .keyword {color: #f5f;}
[data-type="css"] .vendor {color: #0c8;}
[data-type="css"] .keyword {color: #c06;}
[data-type="css"] .attribute {color: #70d;}
[data-type="css"] .keyword {color: #e28;}
[data-type="css"] .vendor {color: #0c8;}
[data-type="css"] .value {color: #c11;}
[data-type="css"] .vendor {color: #0c8;}
[data-type="css"] .color {background: #eee;}
[data-type="css"] .unit {color: #0bc;}
[data-type="css"] .important {color: #f00;}

[data-type="sql"] .var-type {color: #f63;font-weight: bold;}
</style>
