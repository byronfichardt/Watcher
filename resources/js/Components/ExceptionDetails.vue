<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item bg-white border-b border-l border-r border-gray-200">
            <h2 class="accordion-header mb-0" :id="'heading0'">
                <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse0'" aria-expanded="true"
                        :aria-controls="'collapse0'">
                    {{ exception.file }}:{{ exception.line }}
                </button>
            </h2>
            <div :id="'collapse0'" class="accordion-collapse collapse show" :aria-labelledby="'heading0'"
                 data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5">
                    <pre><code>{{ parseCode(exception.code, exception.line) }}</code></pre>
                </div>
            </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200" v-for="(trace, index) in filteredStackTrace" :key="index+1" >
            <h2 class="accordion-header mb-0 pt-2" :id="'heading'+(index+1)">
                <span class="pl-5 py-2 font-bold">Method: {{ trace.method }}</span>
                <button class="
    accordion-button
    relative
    flex
    items-center
    w-full
    px-5
    pb-2
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none
  " type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+(index+1)" aria-expanded="true"
                        :aria-controls="'collapse'+(index+1)">
                    <span>{{ trace.file }}:{{ trace.line }}</span>
                </button>
            </h2>
            <div :id="'collapse'+(index+1)" class="accordion-collapse collapse" :aria-labelledby="'heading'+(index+1)"
                 data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5">
                    <pre><code>{{ parseCode(trace.code, trace.line) }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, defineProps, ref} from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
    exception: {
        type: Object,
        required: true,
    },
    showAll: {
        type: Boolean,
        required: true,
    },
});

const filteredStackTrace = computed(() => {
    let stackTrace = JSON.parse(props.event.stack_trace)
    if(props.showAll === false) {
        return stackTrace.filter(trace => !trace.isInternal)
    }
    return stackTrace
});

const parseCode = (codeArray, line) => {
    let code = '';
    try {
        code = JSON.parse(codeArray)
    } catch (e) {
        return codeArray
    }

    let codeString = '';
    if(code) {
        for (const key of Object.keys(code)) {
            codeString += (parseInt(key)+1) + ' ' + code[key] + '\n';
        }
    }
    return codeString;
}

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
