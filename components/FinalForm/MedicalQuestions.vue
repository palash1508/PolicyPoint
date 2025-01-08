<template>
  <div class="p-6 md:p-11 border rounded-b-lg shadow-md bg-white border-[#99999980]">
    <h2 class="text-3xl font-semibold mb-4 text-[#2B2B5F]">Medical Questions</h2>
    <div class="w-full md:w-1/2 xl:w-1/2">
      <div class="flex items-center justify-between">
        <span class="text-[#2B2B5F] text-xl font-semibold">
          Selected Members
        </span>
        <span class="text-[#000000] text-xs font-semibold">
          Age
        </span>
      </div>
      <div v-for="member in members" :key="member.name" class="flex items-center justify-between">
        <span class="text-[#000000] text-[13px] font-semibold">
          {{ member.name }}
        </span>
        <span class="text-[#999999] text-[13px] font-semibold">
          {{ member.age }} yrs
        </span>
      </div>
    </div>

  </div>
  
  <div class="mt-6 lg:mt-10">
    <div class="space-y-6">
      <FinalFormQuestionCard v-for="(member, index) in members" :key="index" :member="member" />
    </div>

    <div class="mt-6 text-center">
      <button class="bg-[#2B2B5F] text-[#FFFFFF] px-12 py-2 rounded-md font-semibold text-sm" @click="$emit('next')">Proceed</button>
    </div>
  </div>
</template>

<script setup>

defineProps({
  members: Array,
});
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>