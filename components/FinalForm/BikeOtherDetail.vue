<template>
    <div class="bg-[#2B2B5F] p-6">
        <span class="pl-6 text-[#FFFFFF] font-semibold text-xl">Other Details</span>
    </div>
    <div class="p-6 py-10 border rounded-b-lg shadow-md bg-white border-[#99999980]">
        <div class="grid xl:grid-cols-1 gap-8 w-full items-center">
            <FinalFormField v-for="(field, index) in otherDetailsFields" :key="index" :type="field.type" :label="field.label"
                :placeholder="field.placeholder" :options="field.options" />

        </div>
    </div>

    <div class="bg-[#2B2B5F] p-6">
        <span class="pl-6 text-[#FFFFFF] font-semibold text-xl">Previous Policy Details</span>
    </div>
    <div class="p-6 py-10 border rounded-b-lg shadow-md bg-white border-[#99999980]">
        <div class="grid xl:grid-cols-2 gap-8 w-full items-center">
            <FinalFormField v-for="(field, index) in previousPolicyDetails" :key="index" :type="field.type" :label="field.label"
                :placeholder="field.placeholder" :options="field.options" />

        </div>
    </div>
    
    <div class="bg-[#2B2B5F] p-6">
        <span class="pl-6 text-[#FFFFFF] font-semibold text-xl">Where Should We Send The Policy</span>
    </div>
    <div class="p-6 py-10 border rounded-b-lg shadow-md bg-white border-[#99999980]">
        <div class="grid xl:grid-cols-2 gap-8 w-full items-center">
            <FinalFormField v-for="(field, index) in policySendDetails" :key="index" :type="field.type" :label="field.label"
                :placeholder="field.placeholder" :options="field.options" />

        </div>
        <div class="mt-6 text-center py-10">
            <button class="bg-[#2B2B5F] font-semibold text-sm px-11 py-2 rounded-lg text-[#FFFFFF]"
                @click="$emit('next')">
                Buy
            </button>
        </div>
    </div>
</template>

<script setup>

const otherDetailsFields = [
    {
        type: 'radio',
        label: 'Existing Policy Type',
        options: ['Third Party', 'Comprehensive / Pakage'],
    },
    {
        type: 'radio',
        label: 'Is Bike On Loan',
        options: ['Yes', 'No'],
    },
];

const previousPolicyDetails = [
    {
        type: 'select',
        label: 'Select Current Policy Insurer',
        options: ['SBI', 'Kotak', 'Bajaj'],
    },
    {
        type: 'text',
        label: 'Previous Policy Number',
        placeholder: 'Previous Policy Number',
    },
];

const policySendDetails = [
    {
        type: 'text',
        label: 'Email',
        placeholder: 'Email',
    },
    {
        type: 'text',
        label: 'Mobile Number',
        placeholder: 'Mobile Number',
    },
];
</script>

<style scoped></style>