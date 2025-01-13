<template>
    <main class=" mx-auto flex flex-col lg:flex-row gap-16 items-start p-3 md:p-14 bg-[#EEEEEE33]">
        <section class="flex-1 px-2 lg:px-0 lg:pl-3 pb-3">
            <div class="flex flex-col gap-5">
                <div
                    class="flex flex-col md:flex-row items-center justify-between md:items-center gap-8 p-6 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                    <div class="flex flex-col items-center">
                        <div>
                            <img src="/assets/images/Insurance/Health_SBI.png" alt="Plan Logo" class="" />
                        </div>
                    </div>

                    <div class="flex-1 flex-col items-center justify-center gap-3">
                        <div>
                            <p class="text-2xl  font-semibold text-[#2B2B5F]">SBI Health Insurance</p>
                        </div>
                        <div class="flex items-center gap-10 mt-2">
                            <div class="flex flex-col xl:flex-row items-center gap-2 text-center">
                                <p class="text-[#999999] text-xs font-semibold">Network Hospital</p>
                                <img src="/assets/images/Insurance/Hospital_Card_Img.png" class="hidden xl:block"
                                    alt="">
                                <p class="text-sm xl:text-lg font-bold text-[#2B2B5F]">237</p>
                            </div>
                            <div class="flex flex-col xl:flex-row items-center gap-2 text-center">
                                <p class="text-[#999999] text-xs font-semibold">Sum Insured</p>
                                <p class="text-sm xl:text-lg font-bold text-[#2B2B5F]">5 Lakh</p>
                            </div>
                            <div class="flex flex-col xl:flex-row items-center gap-2 text-center">
                                <p class="text-[#999999] text-xs font-semibold">Policy Tenure</p>
                                <p class="text-sm xl:text-lg font-bold text-[#2B2B5F]">1 Year</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col items-center">
                        <p class="text-[#999999] font-semibold text-xs">Premium</p>
                        <p class="text-[#2B2B5F] font-bold text-xl">
                            ₹ 9999
                            <span class="text-sm text-[#2B2B5FB2] font-semibold">/annually</span>
                        </p>
                        <p class="text-[#999999] font-semibold text-[11px] leading-[17px]">or</p>
                        <p class="text-[#2B2B5FB2] font-semibold text-sm">₹ 999/month</p>
                    </div>
                </div>


                <div
                    class="flex flex-col md:flex-row items-center justify-between md:items-start gap-8 px-6 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                    <div class="flex-1 flex-col items-center xl:justify-center gap-3">
                        <div class="w-full md:w-2/3 xl:w-1/3 flex items-center justify-between gap-10 md:gap-0">
                            <span class="text-xl  font-semibold text-[#2B2B5F]">Selected Members</span>
                            <span class="text-xs  font-semibold text-[#000000]">Age</span>
                        </div>
                        <div class="w-full md:w-2/3 xl:w-1/3 flex items-center justify-between gap-10 md:gap-0  mt-2">
                            <span class="text-xs  font-semibold text-[#000000]">Rahul Sharma</span>
                            <span class="text-xs  font-semibold text-[#999999]">25 yrs</span>
                        </div>
                        <div class="w-full md:w-2/3 xl:w-1/3 flex items-center justify-between gap-10 md:gap-0">
                            <span class="text-xs  font-semibold text-[#000000]">Parul Sharma</span>
                            <span class="text-xs  font-semibold text-[#999999]">24 yrs</span>
                        </div>

                    </div>

                    <div class="flex justify-items-start">
                        <button class="text-[#01B9D1] font-semibold text-xs">Edit Members</button>
                    </div>
                </div>

                <div>
                    <div
                        class=" px-6 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                        <div class="flex-1 flex-col items-center justify-center gap-3 mb-4">
                            <div class="w-full flex flex-col">
                                <span class="text-xl  font-semibold text-[#2B2B5F]">Riders</span>
                                <span class="text-xs  font-medium text-[#999999]">Enhance your current plan with these
                                    additional benefits</span>
                            </div>
                            <div class="w-full flex flex-col items-center justify-between gap-3  mt-2">
                                <div v-for="data in ridersData"
                                    class="w-full border-1 border flex flex-col xl:flex-row items-center justify-between p-4 rounded-lg gap-3 xl:gap-0">
                                    <div class="w-full xl:w-1/2 ">
                                        <span class="text-[#2B2B5F] font-semibold text-sm">{{ data.title }}</span>
                                        <div class="xl:w-2/3 text-[#999999] font-semibold text-xs mt-1">
                                            <p>{{ data.desc }}</p>
                                        </div>

                                    </div>
                                    <div class="w-full xl:w-1/2 flex items-center justify-between xl:px-4">
                                        <div class="flex flex-col text-center">
                                            <span class="font-semibold text-[#000000] text-xs">Premium</span>
                                            <p class="text-[#2B2B5F] font-semibold text-[15px]">₹ {{ data.price }}</p>
                                        </div>
                                        <div v-if="data.waitingPeriod" class="flex flex-col text-center">
                                            <span class="font-semibold text-[#000000] text-xs">Waiting Period</span>
                                            <p class="text-[#2B2B5F] font-semibold text-[11px]">{{ data.waitingPeriod }}
                                            </p>
                                        </div>
                                        <button
                                            class="flex items-center justify-center px-10 py-2 bg-[#2B2B5F] text-[#FFFFFF] text-xs font-semibold rounded-md">
                                            Add
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="w-fit mx-auto -mt-4 z-10 ">
                        <button
                            class="bg-white px-5 py-2 border border-[#2B2B5F] rounded-lg text-[11px] font-semibold">View
                            More Riders</button>
                    </div>
                </div>

                <!-- Recommended Add-ons -->
                <div>
                    <div
                        class=" px-6 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                        <div class="flex-1 flex-col items-center justify-center gap-3 mb-4">
                            <div class="w-full flex flex-col">
                                <span class="text-xl  font-semibold text-[#2B2B5F]">Recommended Add-Ons</span>
                                <div class="flex items-center gap-4 py-2">
                                    <button
                                        class="text-[#2B2B5F] border border-[#01B9D1] text-[11px] font-semibold px-7 py-2 rounded-2xl bg-[#01B9D166]">OPD
                                        Care</button>
                                    <button
                                        class="text-[#2B2B5F] border border-[#01B9D1] text-[11px] font-semibold px-7 py-2 rounded-2xl">Critical
                                        Illness</button>
                                </div>
                            </div>
                            <div class="w-full flex flex-col items-center justify-between gap-3  mt-2">
                                <div v-for="data in recommendData"
                                    class="w-full border-1 border flex flex-col xl:flex-row items-center justify-between p-4 rounded-lg gap-3 xl:gap-0">
                                    <div class="w-full xl:w-1/2 ">
                                        <span class="text-[#2B2B5F] font-semibold text-sm">{{ data.title }}</span>
                                        <div class="xl:w-2/3 text-[#999999] font-semibold text-xs mt-1">
                                            <p>{{ data.desc }}</p>
                                        </div>

                                    </div>
                                    <div class="w-full xl:w-1/2 flex items-center justify-between xl:px-4">
                                        <div class="flex flex-col text-center">
                                            <span class="font-semibold text-[#000000] text-xs">Premium</span>
                                            <p class="text-[#2B2B5F] font-semibold text-[15px]">₹ {{ data.price }}</p>
                                        </div>
                                        <div v-if="data.waitingPeriod" class="flex flex-col text-center">
                                            <span class="font-semibold text-[#000000] text-xs">Waiting Period</span>
                                            <p class="text-[#2B2B5F] font-semibold text-[11px]">{{ data.waitingPeriod }}
                                            </p>
                                        </div>
                                        <button
                                            class="flex items-center justify-center px-10 py-2 bg-[#2B2B5F] text-[#FFFFFF] text-xs font-semibold rounded-md">
                                            Add
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="w-fit mx-auto -mt-4 z-10 ">
                        <button
                            class="bg-white px-5 py-2 border border-[#2B2B5F] rounded-lg text-[11px] font-semibold">View
                            More Riders</button>
                    </div>
                </div>


                <!-- Features -->
                <div>
                    <div
                        class=" px-6 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                        <div class="flex-1 flex-col items-center justify-center gap-3 mb-4">
                            <div class="w-full flex flex-col">
                                <span class="text-xl  font-semibold text-[#2B2B5F]">COVERED SPECIAL FEATURES</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 mt-3">
                                <ul v-for="col in 2" :key="'col-' + col" class="space-y-1">
                                    <li v-for="(feature, index) in features.filter((_, i) => i % 2 === col - 1)"
                                        :key="'feature-' + index" class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-green-500 flex-shrink-0 mr-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span class="font-medium text-[11px] text-[#999999]">{{ feature }}</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Tax Benefits -->
                <div>
                    <div
                        class=" px-6 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                        <div class="flex-1 flex-col items-center justify-center gap-3">
                            <div class="w-full flex flex-col">
                                <span class="text-xl  font-semibold text-[#2B2B5F]">TAX BENEFIT</span>
                                <span class="text-xs  font-semibold text-[#999999] mt-2">Premiums paid are eligible for
                                    tax deduction under Section 80D and 10 (10D) of the Income Tax Act, 1961.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Exclusion -->
                <div>
                    <div
                        class=" px-6 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                        <div class="flex-1 flex-col items-center justify-center gap-3 mb-4">
                            <div class="w-full flex flex-col">
                                <span class="text-xl  font-semibold text-[#2B2B5F]">Exclusions</span>
                            </div>
                            <div class="grid grid-cols-1 mt-3">
                                <ul class="space-y-1">
                                    <li v-for="(exclusion, index) in exclusions" :key="index" class="flex items-center">
                                        <!-- Icon -->
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-red-500 flex-shrink-0 mr-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <!-- Text -->
                                        <span class="font-medium text-[11px] text-[#999999]">{{ exclusion }}</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                
                <!-- Network Hospitals -->
                <div
                    class="flex flex-col md:flex-row items-center justify-between md:items-start gap-4 px-6 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                    <div class="flex-1 flex-col items-center xl:justify-center gap-3">
                        <div class="w-full md:w-2/3 flex items-center gap-7 ">
                            <span class="text-xl font-semibold text-[#2B2B5F]">Network Hospitals</span>
                            <img src="/assets/images/Insurance/Network_Hospitals_PNG.png" class="" alt="">
                            <span class="text-xl font-semibold text-[#2B2B5F]">237</span>
                        </div>
                    </div>

                    <div class="flex justify-items-start">
                        <NuxtLink to="/insurance/health/network-hospitals" class="text-[15px] font-semibold text-[#01B9D1]">View List</NuxtLink>
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
                <div class=" px-3 py-1 mb-2 mt-2">
                    <div class="flex items-center justify-center  bg-[#2B2B5F] rounded-lg px-2 py-1">
                        <NuxtLink to="/insurance/health/kyc-final-form" class="text-[#FFFFFF] text-sm font-semibold py-1">
                            Proceed To The Proposal
                        </NuxtLink>
                    </div>
                </div>

            </div>

        </aside>


    </main>



</template>

<script setup>
const ridersData = [
    {
        title: 'Instant Cover',
        desc: 'Claim can be made for hospitalization related to Diabetes, Hypertension, Hyperlipidemia & Asthma after initial wait period of 30 days',
        waitingPeriod: '',
        price: '999'
    },
    {
        title: 'Reduction in PED',
        desc: 'Get your pre-existing disease waiting period reduced to 1year, 2year or 3year from default existing 4 years waiting period',
        waitingPeriod: '1 Year',
        price: '999'
    },
    {
        title: 'Annual Health Check-up',
        desc: 'Once for all insured every policy year',
        waitingPeriod: '',
        price: '999'
    },
]

const recommendData = [
    {
        title: 'Enhance your coverage affordably with smart add-ons',
        desc: 'Once for all insured every policy year',
        waitingPeriod: '',
        price: '999'
    },
]

const features = [
    "In patient treatment expenses - Covered upto SI",
    "Pre Hospital Exp - 1% of SI upto a max of 30 days",
    "Post Hospital Exp - 1% of SI upto a max of 45 days",
    "Day Care Treatments - Covered upto SI",
    "Ambulance charges - 1% of SI upto to max of Rs 1000",
    "Hospital daily cash allowance - NA",
    "Room rent sub limit - 1% of SI or Rs 3000/day",
    "ICU sub limit - 2% of SI or Rs 6000/day",
    "Health check up (with T&C) - Free",
    "Waiting Period (for all diseases): 30 Days",
    "Waiting Period (for listed diseases): Covered After 2 Years",
    "Pre Existing conditions exclusion: Covered After 4 Years",
    "Loyalty Benefit: Per year: 10%, Max upto 50%",
    "Sub Limits on medical expenses: Applicable",
    "Co-pay: Applicable",
    "Stay-fit Perks: SI Upto 5 lacs - Lump sum amount of Rs 3000",
];

const exclusions = [
    "Any sexually transmitted disease",
    "Acquired Immuno Deficiency Syndrome (AIDS)",
    "Pregnancy related expenses except ectopic pregnancy",
    "Treatment of fertility, infertility, sub fertility or assisted conception procedure or sterilization, birth control procedures",
    "Mental Illnesses",
    "Cosmetic surgery other than as may be necessitated due to an Injury or Burns.",
    "Circumcision unless necessary for treatment of an Illness",
    "All preventive care, vaccination, including inoculation and immunizations (except in case of post-bite treatment or when it is medically necessary and part of the treatment)",
    "Non-allopathic treatment",
    "Any treatment/loss required arising from Insured Person's participation in any hazardous activity",
    "Non medical expenses as listed by IRDA",
];

</script>
<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>