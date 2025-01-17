<template>
    <div class="flex flex-col items-center rounded-t-lg py-3">
        <!-- Header with Steps -->
        <div class="w-full flex justify-between items-center px-4 py-3 bg-white gap-10 md:gap-28 border-b-2 border-[#EEEEEE]">
            <button @click="prevStep" class="text-[#2B2B5F]">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="text-lg font-medium text-[#2B2B5F]">
                {{ stepTitles[currentStep - 1] }}
            </h1>
            <div class="flex space-x-1">
                <span v-for="step in totalSteps" :key="step" :class="[
                    'w-3 h-3 rounded-full',
                    currentStep === step ? 'bg-[#2B2B5F]' : 'bg-gray-300'
                ]"></span>
            </div>
        </div>

        <!-- Step Content -->
        <div class="w-full mt-3 p-4">
            <div v-if="currentStep === 1">
                <div class="grid gap-4 w-full items-center">
                    <FinalFormField v-for="(field, index) in cityRto" :key="index" :type="field.type"
                        :label="field.label" :placeholder="field.placeholder" :options="field.options" />

                </div>

            </div>

            <div v-if="currentStep === 2">
                <!-- Step 2: Enter Car Details -->
                <div class="grid gap-4 w-full items-center">
                    <FinalFormField v-for="(field, index) in carDetails" :key="index" :type="field.type"
                        :label="field.label" :placeholder="field.placeholder" :options="field.options" />

                </div>

                <div class="mt-4">
                    <p class="text-[#000000] text-[15px] font-medium">Select Car Fuel Type</p>
                    <div class="grid md:grid-cols-3 gap-x-10 gap-y-3 mt-2">
                        <button @click="selectFuel(fuel)" :class="[
                            'px-8 py-2 border border-[#01C4DE] rounded-lg font-medium text-[13px]',
                            selectedFuel === fuel ? 'bg-[#2B2B5F] text-white' : 'bg-white text-black'
                        ]" class="px-8 py-2 border border-[#01C4DE] rounded-lg font-medium text-[13px]"
                            v-for="fuel in fuelType">{{ fuel }}</button>
                    </div>
                </div>
            </div>

            <div v-if="currentStep === 3">
                <!-- Step 3: Personal Information -->
                <div class="grid gap-4 w-full items-center">
                    <FinalFormField v-for="(field, index) in personalDetail" :key="index" :type="field.type"
                        :label="field.label" :placeholder="field.placeholder" :options="field.options" />

                </div>
            </div>
        </div>

        <!-- Next Button -->
        <NuxtLink to="/insurance/Car/plans" v-if="currentStep === totalSteps"
            class="mt-6 px-11 py-2 bg-[#2B2B5F] text-white rounded-lg text-[13px] font-semibold">
            View Plans
        </NuxtLink>
        <button v-else class="mt-6 px-11 py-2 bg-[#2B2B5F] text-white rounded-lg text-[13px] font-semibold"
            @click="nextStep">
            Next
        </button>

    </div>
</template>

<script setup>
const emit = defineEmits(['closeDialog']);
const currentStep = ref(1);
const totalSteps = 3;
const stepTitles = ['Select City And RTO', 'Enter Car Details', 'Personal Information'];
const fuelType = ['Petrol', 'Diesel', 'CNG', 'Electric', 'External CNG Kit']
const selectedFuel = ref('');

// Select fuel type
const selectFuel = (fuel) => {
    selectedFuel.value = fuel;
};

// Step navigation
const nextStep = () => {
    if (currentStep.value < totalSteps) {
        currentStep.value++;
    }
};

const prevStep = () => {
    if (currentStep.value === 1) {
        emit('closeDialog');
    } else {
        currentStep.value--;
    }
};

const cityRto = [
    {
        type: 'select',
        label: 'City Name',
        options: ['Delhi', 'Sonipat', 'Chandigarh'],
    },
    {
        type: 'select',
        label: 'RTO',
        options: ['Delhi', 'Sonipat', 'Chandigarh'],
    },
];

const carDetails = [
    {
        type: 'select',
        label: 'Car Brand Name',
        options: ['Honda', 'Maruti', 'Toyota'],
    },
    {
        type: 'select',
        label: 'Car Model',
        options: ['Swift', 'Amaze', 'Dzire'],
    },
    {
        type: 'select',
        label: 'Car Variant',
        options: ['VXI', 'LDI', 'ZXI'],
    },
];

const personalDetail = [
    {
        type: 'text',
        label: 'Full Name',
        placeholder: 'Full Name',
    },
    {
        type: 'text',
        label: 'Phone No.',
        placeholder: 'Phone No.',
    },
];
</script>
