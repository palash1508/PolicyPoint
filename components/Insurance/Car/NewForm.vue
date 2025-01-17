<template>
    <div class="w-full bg-[#EEEEEE33] pb-20">
        <div class="max-w-4xl mx-auto py-8 space-y-6">
            <!-- Header -->
            <h1 class="text-4xl font-semibold text-center text-[#2B2B5F]">
                For tailored car insurance plans, share your details today!
            </h1>
            <h2 class="text-xl font-semibold text-center text-[#000000]">
                Renew Your Car Insurance in Just 2 Minutes!
            </h2>

            <!-- Form -->
            <div class=" p-6 max-w-lg mx-auto">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-4">
                        <label for="carNumber" class="block text-lg font-medium text-[#000000CC]">Car Number</label>
                        <input id="carNumber" v-model="form.carNumber" type="text"
                            placeholder="Car Number (DL-01-AB-1234)"
                            class="w-full mt-1 px-3 py-2 border border-[#0000004D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B5F]"
                            required />
                    </div>
                    <div class="mb-4">
                        <label for="fullName" class="block text-lg font-medium text-[#000000CC]">Full Name</label>
                        <input id="fullName" v-model="form.fullName" type="text" placeholder="Full Name"
                            class="w-full mt-1 px-3 py-2 border border-[#0000004D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B5F]"
                            required />
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="block text-lg font-medium text-[#000000CC]">Phone Number</label>
                        <input id="phone" v-model="form.phone" type="tel" placeholder="9999999999"
                            class="w-full mt-1 px-3 py-2 border border-[#0000004D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B5F]"
                            required />
                    </div>
                    <div class="justify-items-center">
                        <img src="/assets/images/Insurance/Car_Form_Img.png" alt="">
                    </div>
                    <button type="submit"
                        class="w-full bg-[#2B2B5F] text-white py-2 rounded-lg hover:bg-[#202054] transition">
                        Continue
                    </button>
                </form>
                <div class="text-center">
                    <button class="text-center mt-2" @click="newCarFormDialog = true"> 
                        <span class="text-[#000000] font-medium text-[15px]">Brand New Car ? <button
                                class="text-[#3C8AFF]">Click Here</button> </span>
                    </button>

                </div>
            </div>
        </div>

        <Dialog v-model:visible="newCarFormDialog" modal :closable="false" :close-icon="false"
            pt:root:class="!border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
            <div class="bg-[#FFFFFF] border border-[#2B2B5F] rounded-lg">
                <InsuranceCarNewCarEntry @closeDialog="newCarFormDialog = false"/>
            </div>
        </Dialog>

        <!-- PrimeVue Dialog -->
        <Dialog v-model:visible="showDialog" modal :closable="false" :close-icon="false"
            pt:root:class="!border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
            <div v-if="step === 1" class="bg-[#FFFFFF] border border-[#2B2B5F] rounded-lg">
                <div class="border border-[#EEEEEE] text-center px-9 py-3 rounded-t-lg">
                    <p class="text-[#000000] text-base font-medium">Do you know when your 'Own Damage' car insurance
                        policy expires?</p>
                </div>
                <div class="py-6">
                    <div class="flex items-center justify-center p-6">
                        <DatePicker v-model="expiryDate" inline class="w-full px-4 py-2 " @update:modelValue="proceedToSeePlans"
                            variant="filled" />

                    </div>
                    <div class="text-center py-3">
                        <button @click="proceedToNextStep" class=" text-[#3C8AFF] text-xs font-medium">
                            Don't know policy expiry date?
                        </button>
                    </div>

                </div>
            </div>
            <div v-if="step === 2" class="bg-[#FFFFFF] border border-[#2B2B5F] rounded-lg">
                <div class="border border-[#EEEEEE] text-center px-9 py-3 rounded-t-lg">
                    <p class="text-[#000000] text-base font-medium">Don't know policy expiry date?</p>
                </div>
                <div class="py-6 px-9">
                    <div class="space-y-4 flex flex-col">
                        <button v-for="option in options" :key="option.value" @click="selectOption(option.value)"
                            class=" flex items-center justify-between gap-12 text-[13px] font-medium bg-white text-[#000000] border border-[#01C4DE] py-3 rounded-lg px-7 hover:bg-gray-100 transition">
                            <span>{{ option.label }}</span>
                            <img src="/assets/favicon/Car_Next_Btn.png" alt="">
                        </button>
                    </div>
                    <div class="text-center mt-4">
                        <button @click="goBackToDateSelection" class=" text-[#3C8AFF] text-xs font-medium">
                            I know my exact policy expiry date
                        </button>
                    </div>

                </div>
            </div>
            <div v-if="step === 3" class="bg-[#FFFFFF] border border-[#2B2B5F] rounded-lg">
                <div class="border border-[#EEEEEE] text-center px-9 py-3 rounded-t-lg">
                    <p class="text-[#000000] text-base font-medium">Claim Details</p>
                </div>
                <div class="text-center px-9 py-1">
                    <p class="text-[#2B2B45] text-sm font-semibold ">Do you make a claim in your existing policy ?</p>
                </div>
                <div class="py-6 px-9">
                    <div class="space-y-4 flex flex-col">
                        <NuxtLink v-for="option in didMakeClaimOptions" :key="option.value" to="/insurance/Car/plans"
                            class=" flex items-center justify-between gap-12 text-[13px] font-medium bg-white text-[#000000] border border-[#01C4DE] py-3 rounded-lg px-7 hover:bg-gray-100 transition">
                            <span>{{ option.label }}</span>
                            <img src="/assets/favicon/Car_Next_Btn.png" alt="">
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </Dialog>
    </div>

    <InsuranceCarFormEnd />
</template>

<script setup>
import Dialog from 'primevue/dialog';
import DatePicker from 'primevue/datepicker';

// Form data
const form = ref({
    carNumber: '',
    fullName: '',
    phone: '',
});

// Dialog state
const showDialog = ref(false);
const newCarFormDialog = ref(false);
const step = ref(1); // 1: Date selection, 2: Options selection
const expiryDate = ref(null);

// Options for the second step
const options = [
    { label: 'Policy not expired yet', value: 'notExpired' },
    { label: 'Expired within last 60 days', value: 'expired60Days' },
    { label: 'Expired 60-90 days ago', value: 'expired90Days' },
    { label: 'Expired more than 90 days ago', value: 'expired90PlusDays' },
    { label: 'I have bought a used car', value: 'usedCar' },
];

const didMakeClaimOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Not Sure', value: 'notSure' },
];

// Handlers
const handleSubmit = () => {
    showDialog.value = true;
};

const proceedToSeePlans = () => {
    step.value = 3;
} 

const proceedToNextStep = () => {
    step.value = 2;
    
};

const selectOption = (value) => {
    console.log('Selected option:', value);
    proceedToSeePlans()
};

const goBackToDateSelection = () => {
    step.value = 1;
};

</script>
<style scoped>
.p-datepicker-header {
    padding: 10px !important;
}

.p-datepicker-select-month{
    padding: 10px !important;
}
</style>
