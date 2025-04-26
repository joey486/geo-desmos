<template>
    <canvas ref="canvas" width="600" height="400" class="graph-canvas"></canvas>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, nextTick } from 'vue';
  
  const props = defineProps({
    inputFunc: String,
    drawGraph: Function, // Passed as a prop
  });
  
  const canvas = ref(null);
  
  const updateGraph = () => {
    if (props.drawGraph && canvas.value) {
      props.drawGraph(canvas.value, props.inputFunc);
    }
  };
  
  onMounted(updateGraph);
  watch(() => props.inputFunc, updateGraph);
  </script>