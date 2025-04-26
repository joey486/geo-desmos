<template>
    <form class="graph-form" @submit.prevent="onSubmit">
      <label class="input-label">
        y =
        <input
          :value="modelValue"
          @input="event => emit('update:modelValue', event.target.value)"
          class="eq-input"
          :placeholder="placeholder"
        />
      </label>
      <button type="submit" class="plot-btn">Plot</button>
    </form>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: String,
    placeholder: { type: String, default: 'e.g. sin(x), x^2, 0.5*x+1' }
  });
  const emit = defineEmits(['update:modelValue', 'submit']);
  
  function onSubmit() {
    emit('submit');
  }
  </script>