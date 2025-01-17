<template>
    <div class="bg-[#2B2B5F] p-6">
        <span class="pl-6 text-[#FFFFFF] font-semibold text-xl">Nominee Details</span>
    </div>
    <div class="p-6 py-10 border rounded-b-lg shadow-md bg-white border-[#99999980]">
        <div class="grid xl:grid-cols-2 gap-8 w-full items-center">
            <FinalFormField v-for="(field, index) in nomineeDetail" :key="index" :type="field.type" :label="field.label"
                :placeholder="field.placeholder" :options="field.options" />

        </div>
        <div class="mt-6 text-center py-10">
            <button class="bg-[#2B2B5F] font-semibold text-sm px-11 py-2 rounded-lg text-[#FFFFFF]"
                @click="$emit('next')">
                Proceed To The Aditional Details
            </button>
        </div>
    </div>
</template>

<script setup>
const generateNumberOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString());
};

const nomineeDetail = [
    {
        type: 'text',
        label: 'Name of Nominee',
        placeholder: 'Full Name',
    },
    {
        type: 'select',
        label: 'Age Of Nominee',
        options: generateNumberOptions(18, 60),
    },
    {
        type: 'select',
        label: 'Relationship With Bike Owner',
        options: ['Son', 'Daughter', 'Spouse'],
    },
];


</script>

<style scoped></style>