<template>
    <header v-if="currentStep > 1" class="px-4 py-2 shadow">
        <button @click="goBack" class="flex items-center space-x-2 text-[#2B2B5F]">
            <i class="fas fa-arrow-left"></i>
            <span>Back</span>
        </button>
    </header>
    <main class=" mx-auto flex flex-col lg:flex-row gap-16 items-start p-3 md:p-14 bg-[#EEEEEE33]">
        <section class="flex-1 lg:px-0 w-full">
            <div class="flex flex-col w-full">
                <div class="">
                    <div class="">
                        <FinalFormStepper :steps="['Car Owner Details', 'Nominee Details', 'Other Details']"
                            :currentStep="currentStep" />
                    </div>
                    <div v-if="currentStep === 1">
                        <FinalFormCarOwnerDetail @next="goToStep(2)" />
                    </div>
                    <div v-else-if="currentStep === 2">
                        <FinalFormCarOwnerNominee :members="members" @next="goToStep(3)" />
                    </div>
                    <div v-else-if="currentStep === 3">
                        <FinalFormCarOtherDetail />
                    </div>
                </div>

            </div>
        </section>

        <!-- Sidebar Buy -->
        <aside class="w-full lg:w-1/4 ">
            <div
                class="flex flex-col  bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                <div class="border-b-2">
                    <div class="p-3 text-xl font-semibold text-[#2B2B5F]">
                        Summary
                    </div>
                </div>
                <div class="flex items-center justify-between mt-1">
                    <div class="px-3 text-[#999999] font-medium text-sm">Base Premium - <span
                            class="text-[#2B2B5F] font-semibold">1 Years</span></div>
                    <div class="px-3 text-sm font-semibold text-[#000000]">₹ 9999</div>
                </div>
                <div class="flex items-center justify-between ">
                    <div class="px-3 text-[#000000] font-medium text-base">Select Rider(s)</div>
                </div>
                <div class=" px-2 py-1">
                    <div class="flex items-center justify-between  border border-[#01B9D1] rounded-[10px] px-2 py-2">
                        <div class="text-[#2B2B5F] font-medium text-xs">
                            No Rider Selected
                        </div>
                        <div class="text-[#01B9D1] text-[10px] font-medium">
                            View Riders
                        </div>

                    </div>
                </div>
                <div class="flex items-center justify-between ">
                    <div class="px-3 text-[#000000] font-medium text-base">Select add on</div>
                </div>
                <div class="flex items-center justify-between ">
                    <div class="px-3 text-[#999999] font-semibold text-sm">OPD Care</div>
                    <div class="px-3 text-[#000000] font-semibold text-sm">₹ 9999</div>
                </div>
                <div class="flex items-center justify-between bg-[#2B2B5F0D] py-1">
                    <div class="px-3 text-[#000000] font-semibold ">Total</div>
                    <div class="px-3 text-[#000000] font-semibold text-sm">₹ 9999</div>
                </div>
                <div v-if="currentStep === 3" class=" px-3 py-1 mb-2 mt-2">
                    <div class="flex items-center justify-center  bg-[#2B2B5F] rounded-lg px-2 py-1">
                        <NuxtLink class="text-[#FFFFFF] text-sm font-semibold py-1">
                            Buy
                        </NuxtLink>
                    </div>
                </div>

            </div>

            <div
                class="flex flex-col  bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom mt-4">
                <div class=" px-2 py-1">
                    <div class="flex items-center justify-between px-2 py-1">
                        <div class="text-[#2B2B5F] font-medium text-[10px]">
                            Vehicle Details
                        </div>
                        <div class="text-[#2B2B5F] text-[10px] font-medium">
                            Dl-14-AB-1234
                        </div>

                    </div>
                    <div class="flex items-center justify-between px-2">
                        <div class="">
                            <span class="text-[#000000] font-semibold text-[15px]">Tata Nexon </span>
                            <div class="flex items-center gap-2 text-[#000000] font-semibold text-[10px]">
                                <span>2020</span>
                                <span>Petrol</span>
                                <span>Adventure Mt</span>
                            </div>
                        </div>
                        <div class="">
                            <!-- <img src="/assets/images/insurance/Car_Info.png" class="" alt=""> -->
                        </div>

                    </div>
                </div>

            </div>

        </aside>

    </main>

</template>

<script setup>
const currentStep = ref(1);

// Mock members
const members = ref([
    { name: 'Rahul Sharma', age: 26 },
    { name: 'Parul Sharma', age: 24 },
]);

const goToStep = (step) => {
    currentStep.value = step;
};

const goBack = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};

</script>
<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>