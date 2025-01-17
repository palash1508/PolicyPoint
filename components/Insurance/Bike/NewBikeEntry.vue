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
                <!-- Step 2: Enter Bike Details -->
                <div class="grid gap-4 w-full items-center">
                    <FinalFormField v-for="(field, index) in bikeDetails" :key="index" :type="field.type"
                        :label="field.label" :placeholder="field.placeholder" :options="field.options" />
                </div>
                
            </div>

        </div>

        <!-- Next Button -->
        <NuxtLink to="/insurance/Bike/plans" v-if="currentStep === totalSteps"
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
const totalSteps = 2;
const stepTitles = ['Select City And RTO', 'Enter Bike Details'];

const generateNumberOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString());
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

const bikeDetails = [
    {
        type: 'select',
        label: 'Purchase Year',
        options: generateNumberOptions(2024, 2026),
    },
    {
        type: 'select',
        label: 'Select two wheeler make',
        options: ['Honda', 'TVS', 'Bajaj'],
    },
    {
        type: 'select',
        label: 'Select two wheeler model',
        options: ['Activa', 'ShineCB', 'Unicorn', 'Aviator'],
    },
    {
        type: 'select',
        label: 'Car two wheeler Variant',
        options: ['Kick Start Drum Brake Spoke WheelsCBS (110) ', 'Electric Start Drum Brake Alloy Wheels(110 cc)'],
    },
];

</script>
