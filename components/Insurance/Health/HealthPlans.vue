<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Header -->
        <header class="px-9 py-6 bg-[#EEEEEE33] shadow flex justify-between items-center">
            <div>
                <h1 class="text-2xl md:text-[40px]  font-semibold text-[#2B2B5F]">Health Insurance</h1>
                <p class="text-[#000000] text-[25px] leading-[40px] font-medium">Find The Best Health Insurance Plans
                    Tailored to You</p>
            </div>
            <div class="flex flex-col justify-between bg-white border-2 border-[#2B2B5F] rounded-lg shadow-md w-48 px-3 py-1">
                <!-- Label -->
                <p class="text-[10px] text-[#999999] font-semibold">Sum Insured</p>

                <!-- Value with Dropdown -->
                <div class="flex items-center justify-between">
                    <p class="text-sm  font-semibold text-[#2B2B5F]">5 Lakh</p>
                    <i class="fas fa-chevron-down text-[#2B2B5F]"></i>
                </div>

                <!-- Description -->
                <p class="text-[8px] font-semibold text-[#999999]">
                    This is the policy's coverage amount
                </p>
            </div>
        </header>

        <!-- Filters and Plans -->
        <main class=" mx-auto flex flex-col lg:flex-row gap-8 mt-2">
            <!-- Sidebar Filters -->
            <aside class="w-full lg:w-1/5 p-10 border-r-2">
                <button class="bg-[#2B2B5F] text-white w-full py-2 px-4  mb-6 hover:bg-blue-800 flex gap-3 rounded-lg items-center justify-center">
                    <img src="/assets/images/Insurance/Edit_Info.png" alt="">
                    Edit your info
                </button>

                <!-- Filters -->
                <div class="space-y-4">
                    <div class="border-2 border-[#2B2B5F] bg-white p-2 rounded-[10px] shadow-custom">
                        <h3 class="font-semibold text-[13px] text-[#2B2B5F]">Policy Term</h3>
                        <select class="w-full mt-1 text-[#000000] text-[17px] font-semibold">
                            <option>1 Year</option>
                            <option>2 Years</option>
                            <option>3 Years</option>
                        </select>
                    </div>
                    
                    <div class="border-2 border-[#2B2B5F] bg-white p-2 rounded-[10px] shadow-custom">
                        <select class="w-full text-[#000000] text-[17px] font-semibold">
                            <option>Sort By</option>
                            <option>Premium (Low to High)</option>
                            <option>Premium (High to Low)</option>
                        </select>
                    </div>

                    <div>
                        <h3 class="font-semibold text-3xl text-[#2B2B5F]">Features</h3>
                        <ul class="space-y-2 text-[#000000] font-medium text-xs mt-1">
                            <li>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-1" />
                                    Diabetic Cover
                                </label>
                            </li>
                            <li>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-1" />
                                    OPD Cover
                                </label>
                            </li>
                            <li>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-1" />
                                    Maternity Cover
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-semibold text-3xl text-[#2B2B5F]">Insurers</h3>
                        <ul class="space-y-2 text-[#000000] font-medium text-xs mt-1">
                            <li v-for="(insurer, index) in insurers" :key="index">
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    {{ insurer }}
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="border-2 border-[#2B2B5F] bg-white p-2 rounded-[10px] shadow-custom">
                        <select class="w-full text-[#000000] text-xs font-semibold">
                            <option>Existing Disease Waiting Period</option>
                            <option>1 Years</option>
                            <option>2 Years</option>
                            <option>3 Years</option>
                        </select>
                    </div>

                    <div class="border-2 border-[#2B2B5F] bg-white p-2 rounded-[10px] shadow-custom">
                        <select class="w-full text-[#000000] text-xs font-semibold">
                            <option>Maternity Cover Waiting Period</option>
                            <option>1 Year</option>
                            <option>2 Years</option>
                            <option>3 Years</option>
                        </select>
                    </div>
                </div>
            </aside>

            <!-- Health Plans -->
            <section class="flex-1 px-2 lg:px-0 lg:pr-3 pb-3">
                <h2 class="text-3xl font-semibold text-[#2B2B5F] mt-2 mb-4">We found {{ healthPlans.length }} plans for you</h2>

                <!-- Cards -->
                <div class="space-y-4">
                    <InsuranceHealthPlansCard v-for="(plan, index) in healthPlans" :key="index" :plan="plan" />
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
const insurers = ["SBI Life", "HDFC Ergo", "Max Life", "Kotak Life Insurance", "ICICI Lombard"];

const healthPlans = [
    {
        logo: "Health_SBI.png",
        insurer: "SBI Life",
        sumInsured: "5 Lakh",
        hospitals: "237",
        features: [
            "Room rent",
            "Second medical opinion",
            "OPD benefits",
            "Pre & Post hospitalization expenses",
        ],
        premium: "9999",
        monthlyPremium: "999",
    },
    {
        logo: "Health_Hdfc.png",
        insurer: "HDFC Ergo",
        sumInsured: "5 Lakh",
        hospitals: "237",
        features: [
            "Room rent",
            "Second medical opinion",
            "OPD benefits",
            "Pre & Post hospitalization expenses",
        ],
        premium: "9999",
        monthlyPremium: "999",
    },
    {
        logo: "Health_Max_Life.png",
        insurer: "Max Life",
        sumInsured: "5 Lakh",
        hospitals: "237",
        features: [
            "Room rent",
            "Second medical opinion",
            "OPD benefits",
            "Pre & Post hospitalization expenses",
        ],
        premium: "9999",
        monthlyPremium: "999",
    },
    {
        logo: "Health_Kotak.png",
        insurer: "Kotak",
        sumInsured: "5 Lakh",
        hospitals: "237",
        features: [
            "Room rent",
            "Second medical opinion",
            "OPD benefits",
            "Pre & Post hospitalization expenses",
        ],
        premium: "9999",
        monthlyPremium: "999",
    },
    {
        logo: "Health_Icici.png",
        insurer: "ICICI Lombard",
        sumInsured: "5 Lakh",
        hospitals: "237",
        features: [
            "Room rent",
            "Second medical opinion",
            "OPD benefits",
            "Pre & Post hospitalization expenses",
        ],
        premium: "9999",
        monthlyPremium: "999",
    },
];
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>
