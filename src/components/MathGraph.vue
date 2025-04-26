<template>
    <div class="graph-container">
        <GraphForm v-model="inputFunc" @submit="drawGraph" />
        <GraphCanvas :inputFunc="inputFunc" :drawGraph="internalDrawGraph" />
        <div v-if="error" class="error-msg">{{ error }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import GraphForm from './GraphForm.vue'
import GraphCanvas from './GraphCanvas.vue'
import { toJsFunc, drawGraphOnCanvas } from './graphHelper.js'

const inputFunc = ref('sin(x)')
const error = ref('')

function internalDrawGraph(canvasElement, funcString) {
    error.value = ''
    let fn
    try {
        const jsExpr = toJsFunc(funcString)
        fn = new Function('x', `return ${jsExpr}`)
        fn(0)
    } catch (e) {
        error.value = 'Invalid function.'
        return
    }
    drawGraphOnCanvas(canvasElement, fn)
}
function drawGraph() {
    // Will automatically update GraphCanvas via watch
}
</script>
