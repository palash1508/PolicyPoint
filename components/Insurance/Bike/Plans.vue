<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Header -->
        <header class="px-9 py-6 bg-[#EEEEEE33] shadow flex justify-between items-center">
            <div>
                <h1 class="text-2xl md:text-[40px]  font-semibold text-[#2B2B5F]">Bike Insurance</h1>
                <p class="text-[#000000] text-[25px] leading-[40px] font-medium">Discover the Best Bike Insurance Plans Customized for Your Vehicle!</p>
            </div>
            <div class="flex flex-col justify-between bg-white border-2 border-[#2B2B5F] rounded-lg shadow-md w-48 px-3 py-1">
                <!-- Label -->
                <p class="text-[10px] text-[#999999] font-semibold">IDV Cover</p>

                <!-- Value with Dropdown -->
                <div class="flex items-center justify-between">
                    <p class="text-sm  font-semibold text-[#2B2B5F]">10 Lakh</p>
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
                <div class="mb-6">
                    <div class="bg-[#2B2B5F] text-white w-full py-4 px-6 hover:bg-blue-800 flex rounded-lg items-center justify-between z-20">
                        <img src="/assets/images/Insurance/Edit_Info.png" alt="">
                        <span>Edit Bike</span> 
                    </div>
                    
                    <div class="border bg-[#FFFFFF] border-[#2B2B5F] w-full py-4 px-6 flex flex-col gap-1 rounded-lg -mt-3 z-0">
                        <div class="text-[#000000] font-semibold text-[15px]">CB Shine </div>
                        <div class="flex items-center gap-2 text-[#000000] font-semibold text-[10px]">
                            <span>Dl-14-AB-1234 |</span>
                            <span>2020 |</span>
                        </div>
                        <div class="flex items-center gap-4 text-[#999999] font-medium text-[10px]">
                            <span>Od Expiry Date</span>
                            <span>10-Oct-2023</span>
                        </div>
                    </div>

                </div>

                <!-- Filters -->
                <div class="space-y-4">
                    <div class="border-2 border-[#2B2B5F] bg-white p-2 rounded-[10px] shadow-custom">
                        <h3 class="font-semibold text-[13px] text-[#2B2B5F]">No Claim Bonus (NCB)</h3>
                        <select class="w-full mt-1 text-[#000000] text-[17px] font-semibold">
                            <option>25% </option>
                            <option>35% </option>
                            <option>45% </option>
                        </select>
                    </div>
                    
                    <div class="border-2 border-[#2B2B5F] bg-white p-2 rounded-[10px] shadow-custom">
                        <h3 class="font-semibold text-[13px] text-[#2B2B5F]">Policy Term</h3>
                        <select class="w-full mt-1 text-[#000000] text-[17px] font-semibold">
                            <option>1 Year</option>
                            <option>2 Year</option>
                            <option>3 Year</option>
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
                                    Zero Depreciation
                                </label>
                            </li>
                            <li>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-1" />
                                    24/7 Road Side Assistance
                                </label>
                            </li>
                            <li>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-1" />
                                    Engine Protection Cover
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
                </div>
            </aside>

            <!-- Health Plans -->
            <section class="flex-1 px-2 lg:px-0 lg:pr-3 pb-3">
                <h2 class="text-3xl font-semibold text-[#2B2B5F] mt-2 mb-4">{{ bikeZeroDepPlans.length }} Zero Dep plans Found</h2>

                <!-- Cards -->
                <div class="space-y-4">
                    <InsuranceBikePlansCard v-for="(plan, index) in bikeZeroDepPlans" :key="index" :plan="plan" />
                </div>
                
                <h2 class="text-3xl font-semibold text-[#2B2B5F] mt-4 mb-4">We found {{ bikePlans.length }} plans for you</h2>

                <!-- Cards -->
                <div class="space-y-4">
                    <InsuranceBikePlansCard v-for="(plan, index) in bikePlans" :key="index" :plan="plan" />
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
const insurers = ["SBI Life", "HDFC Ergo", "Max Life", "Kotak Life Insurance", "ICICI Lombard"];

const bikeZeroDepPlans = [
    {
        logo: "SBI_General.png",
        insurer: "SBI Bike Insurance",
        idvCover: "10 Lakh",
        garages: "237",
        features: [
            "Zero Paper Claims",
            "Live Video Claims",
            "Total Loss Amount Guaranted",
            "No Salvage Fee",
            "Repair Guarantee"
        ],
        settlement: "95%",
        premium: "9999",
    }
];

const bikePlans = [
    {
        logo: "SBI_General.png",
        insurer: "SBI Bike Insurance",
        idvCover: "10 Lakh",
        garages: "237",
        features: [
            "Zero Paper Claims",
            "Live Video Claims",
            "Total Loss Amount Guaranted",
            "No Salvage Fee",
            "Repair Guarantee"
        ],
        settlement: "95%",
        premium: "9999",
    },
    {
        logo: "Kotak_General.png",
        insurer: "Kotak",
        idvCover: "10 Lakh",
        garages: "237",
        features: [
            "Zero Paper Claims",
            "Live Video Claims",
            "Total Loss Amount Guaranted",
            "No Salvage Fee",
            "Repair Guarantee"
        ],
        settlement: "95%",
        premium: "9999",
    },
    {
        logo: "Bajaj_Alianz.png",
        insurer: "Bajaj",
        idvCover: "10 Lakh",
        garages: "237",
        features: [
            "Zero Paper Claims",
            "Live Video Claims",
            "Total Loss Amount Guaranted",
            "No Salvage Fee",
            "Repair Guarantee"
        ],
        settlement: "95%",
        premium: "9999",
    },
];
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>
