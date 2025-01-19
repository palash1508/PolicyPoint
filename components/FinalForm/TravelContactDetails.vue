<template>
    <div class="bg-[#2B2B5F] p-6">
        <span class=" text-[#FFFFFF] font-semibold text-xl">Contact Details</span>
    </div>
    <div class="p-6 py-6 border rounded-b-lg shadow-md bg-white border-[#99999980]">
        <div class="grid xl:grid-cols-2 gap-8 w-full items-center">
            <FinalFormField v-for="(field, index) in contactDetailsFields" :key="index" :type="field.type"
                :label="field.label" :placeholder="field.placeholder" :options="field.options" />

        </div>
        <div class="mt-6 text-center py-6">
            <button class="bg-[#2B2B5F] font-semibold text-sm px-11 py-2 rounded-lg text-[#FFFFFF]" @click="$emit('next')">
                Buy
            </button>
        </div>
    </div>

</template>

<script setup>

const contactDetailsFields = [
    {
        type: 'text',
        label: 'Enter Email',
        placeholder: 'xyz@gmail.com',
    },
    {
        type: 'text',
        label: 'Enter Pincode',
        placeholder: 'Pincode',
    },
    {
        type: 'select',
        label: 'Select City',
        options: ['Delhi', 'Mumbai', 'Kolkata'],
    },
    {
        type: 'text',
        label: 'Enter Address',
        placeholder: 'Enter Address',
    },
    {
        type: 'text',
        label: 'Enter Alternate Mobile No.',
        placeholder: 'Enter Alternate Mobile No.',
    },
];

</script>

<style scoped></style>