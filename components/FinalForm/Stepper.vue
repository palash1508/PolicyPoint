<template>
  <div class="flex w-full items-center justify-between py-6 rounded-t-lg border border-[#99999980] bg-white">
    <div class="w-full px-12 lg:px-0 lg:w-1/3 flex items-start justify-between mx-auto gap-10 ">
      <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center justify-center text-center ">
        <div :class="[
          'flex items-center justify-center w-8 h-8 rounded-full text-[15px] font-normal',
          currentStep >= index + 1
            ? 'bg-[#2B2B5F] text-white '
            : ' text-[#999999] border border-[#999999]',
        ]">
          {{ index + 1 }}
        </div>
        <div class="text-[15px] font-normal text-[#999999]">
          {{ step }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: Array,
  currentStep: Number,
});
</script>