<template>
    <div class="flex flex-col items-center justify-center w-full md:w-52 h-20 py-6">
      <label
        :for="label"
        class="block w-full text-center py-4 rounded-lg border text-2xl font-semibold text-[#2B2B45] cursor-pointer"
        :class="selected ? 'border-[#2B2B5F] bg-blue-100' : 'border-[#01C4DE] bg-white'"
        @click="toggleSelect"
      >
        {{ label }}
      </label>
  
      <div
        v-if="selected && withCounter"
        class="flex items-center space-x-2 border border-[#2B2B5FB2] rounded-lg px-4 -mt-4 z-10 bg-white"
      >
        <button
          type="button"
          class="minus  text-[#000000] text-sm font-semibold hover:bg-blue-100"
          @click.stop="decrement"
        >
          -
        </button>
        <p class="text-sm font-semibold text-[#000000]">{{ count }}</p>
        <button
          type="button"
          class="plus  text-[#000000] text-sm font-semibold hover:bg-blue-100"
          @click.stop="increment"
        >
          +
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    withCounter: {
      type: Boolean,
      default: false,
    },
    defaultCount: {
      type: Number,
      default: 1,
    },
  });
  
  const emit = defineEmits(['update:count', 'select']);
  const count = ref(props.defaultCount);
  const selected = ref(false);
  
  const toggleSelect = () => {
    selected.value = !selected.value;
  
    if (selected.value && withCounter) {
      count.value = 1; 
      emit('update:count', count.value);
    } else {
      count.value = 0;
    }
  
    emit('select', selected.value);
  };
  
  const increment = () => {
    count.value++;
    emit('update:count', count.value);
  };
  
  const decrement = () => {
    if (count.value > 1) {
      count.value--;
      emit('update:count', count.value);
    }
  };
  </script>
  
  <style scoped>
  .minus,
  .plus {
    line-height: 1.5;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  
  label {
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }
  
  label:hover {
    border-color: #1d4ed8;
  }
  </style>
  