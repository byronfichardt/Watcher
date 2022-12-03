<template>
    <div class="code">
        <span class="code-line flex" v-for="(item, index) in JSON.parse(code)">
            <span>{{parseInt(index) + 1}}</span>
            <span class="code-line-number ml-4 w-full" :class="(parseInt(index) + 1) === parseInt(line) ? 'bg-red-300': ''">
                <pre>{{ item }}</pre>
            </span>
        </span>
    </div>
</template>

<script setup>
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
</script>

<style scoped>
pre, code {
    font-family: monospace, monospace;
}
pre {
    overflow: auto;
}
pre > code {
    display: block;
    padding: 1rem;
    word-wrap: normal;
}
.collapse {
    visibility: visible!important;
}
.accordion-item:first-of-type {
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
}
.accordion-button:not(.collapsed) {
    color: unset;
}
.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
}
</style>
