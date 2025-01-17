<template>
    <div class="bg-[#2B2B5F] p-6">
        <span class="pl-6 text-[#FFFFFF] font-semibold text-xl">Bike Owner Details</span>
    </div>
    <div class="p-6 py-10 border rounded-b-lg shadow-md bg-white border-[#99999980]">
        <div class="grid xl:grid-cols-2 gap-8 w-full items-center">
            <FinalFormField v-for="(field, index) in fields" :key="index" :type="field.type" :label="field.label"
                :placeholder="field.placeholder" :options="field.options" />

        </div>
    </div>

    <div class="bg-[#2B2B5F] p-6">
        <span class="pl-6 text-[#FFFFFF] font-semibold text-xl">Communication Address</span>
    </div>
    <div class="p-6 py-10 border rounded-b-lg shadow-md bg-white border-[#99999980]">
        <div class="grid xl:grid-cols-2 gap-8 w-full items-center">
            <FinalFormField v-for="(field, index) in address" :key="index" :type="field.type" :label="field.label"
                :placeholder="field.placeholder" :options="field.options" />

        </div>
        <div class="mt-6 text-center py-10">
            <button class="bg-[#2B2B5F] font-semibold text-sm px-11 py-2 rounded-lg text-[#FFFFFF]"
                @click="$emit('next')">
                Proceed To The Nominee Details
            </button>
        </div>
    </div>
</template>

<script setup>

const fields = [
    {
        type: 'text',
        label: 'Owner Full Name (As Mentioned on RC)',
        placeholder: 'Your Name',
    },
    {
        type: 'text',
        label: 'Mobile',
        placeholder: 'Your Mobile No.',
    },
    {
        type: 'text',
        label: 'Email ID',
        placeholder: 'Your Email ID',
    },
    {
        type: 'radio',
        label: 'Bike Is Owned By',
        options: ['A company', 'Individual'],
    },
    {
        type: 'radio',
        label: 'Owner’s gender',
        options: ['Male', 'Female'],
    },
    {
        type: 'radio',
        label: 'Bike ownership changed in last 12 months',
        options: ['Yes', 'No'],
    },
];

const address = [
    {
        type: 'text',
        label: 'Address 1',
        placeholder: 'Address Line 1',
    },
    {
        type: 'text',
        label: 'Address 2',
        placeholder: 'Address Line 2',
    },
    {
        type: 'select',
        label: 'City',
        options: ['Delhi', 'Mumbai', 'Pune'],
    },
    {
        type: 'text',
        label: 'State Name',
        placeholder: '',
    },
    {
        type: 'text',
        label: 'Pincode',
        placeholder: 'Pincode',
    },
    {
        type: 'text',
        label: 'Pan No. (optional)',
        placeholder: 'Your Pan No.',
    },
];
</script>

<style scoped></style>