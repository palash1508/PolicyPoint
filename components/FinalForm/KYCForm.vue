<template>
  <div class="p-6 border rounded-b-lg shadow-md bg-white border-[#99999980]">
    <div class="grid gap-2 w-full lg:w-1/2 lg:ml-4 xl:ml-12">
      <FinalFormField v-for="(field, index) in fields" :key="index" :type="field.type" :label="field.label"
        :placeholder="field.placeholder" :options="field.options" />
    </div>
    <div class="mt-6 text-center">
      <button class="bg-[#2B2B5F] font-semibold text-sm px-11 py-2 rounded-lg text-[#FFFFFF]" @click="$emit('next')">
        Proceed To The Medical Questions
      </button>
    </div>
  </div>
</template>

<script setup>

const fields = [
  {
    type: 'text',
    label: 'Full Name As Per Your ID',
    placeholder: 'Your Name',
  },
  {
    type: 'text',
    label: 'Phone No.',
    placeholder: 'Your Mobile No.',
  },
  {
    type: 'select',
    label: 'KYC Document',
    options: ['Document', 'PAN', 'Aadhar'],
  },
  {
    type: 'text',
    label: 'KYC Document Number',
    placeholder: 'Pan Number',
  },
  {
    type: 'text',
    label: 'Pincode',
    placeholder: 'Pincode',
  },
];
</script>

<style scoped></style>
