<template>
  <div class="p-6 border rounded-b-lg shadow-md bg-white border-[#99999980]">
    <div class="md:ml-6 lg:ml-10">
      <h2 class="text-3xl font-semibold mb-4 text-[#2B2B5F]">Please specify the nominee you wish to designate.</h2>
      <p class="mb-4 text-xl text-[#000000] font-medium">
        Provide the details of the nominee you wish to designate for your policy.
      </p>
      <div class="grid gap-2 w-full lg:w-1/2 mt-6 md:mt-10">
        <FinalFormField v-for="(field, index) in fields" :key="index" :type="field.type" :label="field.label"
          :placeholder="field.placeholder" :options="field.options" />
      </div>
      <div class="mt-8 md:mt-14 text-center pb-10">
        <button class="bg-[#2B2B5F] font-semibold text-sm px-20 md:px-44 py-2 rounded-lg text-[#FFFFFF]" @click="$emit('next')">
          Buy
        </button>
      </div>

    </div>
  </div>
</template>
<script setup>
const fields = [
  {
    type: 'text',
    label: 'Nominee Full Name',
    placeholder: 'Your Name',
  },
  {
    type: 'select',
    label: 'Relationship With Proposer',
    options: ['Spouse', 'Child', 'Parent'],
  },
  {
    type: 'date',
    label: 'Date of Birth',
    placeholder: '',
  },
  {
    type: 'text',
    label: 'Contact Number',
    placeholder: 'Phone Number',
  },
];
</script>
<style scoped>
</style>