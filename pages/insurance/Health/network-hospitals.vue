<template>
    <main class=" mx-auto flex flex-col lg:flex-row gap-16 items-start p-3 md:p-14 bg-[#EEEEEE33]">
        <section class="flex-1 px-2 lg:px-0 lg:pl-3 pb-3">
            <div class="flex flex-col gap-5">
                <div
                    class="flex flex-col md:flex-row items-center justify-between md:items-center gap-8 p-6 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                    <div class="flex flex-col items-center">
                        <div>
                            <img src="/assets/images/insurance/Health_SBI.png" alt="Plan Logo" class="" />
                        </div>
                    </div>

                    <div class="flex-1 flex-col items-center justify-center gap-3">
                        <div>
                            <p class="text-2xl  font-semibold text-[#2B2B5F]">SBI Health Insurance</p>
                        </div>
                        <div class="flex items-center gap-10 mt-2">
                            <div class="flex flex-col xl:flex-row items-center gap-2 text-center">
                                <p class="text-[#999999] text-xs font-semibold">Network Hospital</p>
                                <img src="/assets/images/insurance/Hospital_Card_Img.png" class="hidden xl:block"
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

                <div>
                    <div
                        class=" px-8 py-4 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                        <div class="min-h-screen ">
                            <div class="max-w-4xl mx-auto">
                                <div class="flex flex-col md:flex-row items-center justify-between mb-6 gap-2">
                                    <h2
                                        class="lg:text-xl xl:text-2xl font-semibold text-[#2B2B5F] flex items-center xl:w-1/3">
                                        Cashless Hospital
                                        <img src="/assets/images/insurance/Hospital_Card_Img.png" class="ml-2" alt="">
                                    </h2>
                                    <div class="flex items-center gap-8 xl:w-2/3">
                                        <select v-model="selectedCity"
                                            class="border border-[#01B9D1] rounded-lg px-2 py-1  text-lg text-[#01B9D1] font-semibold">
                                            <option v-for="city in cities" :key="city" :value="city">
                                                {{ city }}
                                            </option>
                                        </select>
                                        <div class="relative flex-grow">
                                            <input type="text" v-model="searchQuery" placeholder="Search..."
                                                class="border border-[#01B9D1] rounded-lg px-4 py-2  text-sm w-full" />
                                            <img src="/assets/images/insurance/Search_Hospital_PNG.png"
                                                class="h-5 w-5 absolute top-1/2 right-3 transform -translate-y-1/2 "
                                                alt="">
                                        </div>
                                    </div>
                                </div>

                                <p class="text-gray-600 text-sm mb-4">
                                    <span class="text-[#2B2B5F] text-2xl font-semibold">{{ filteredHospitals.length }}
                                    </span> <span class="text-[#999999] font-semibold text-lg">Result Found</span>
                                </p>

                                <ul class="space-y-3">
                                    <li v-for="(hospital, index) in filteredHospitals" :key="index"
                                        class="border-b pb-4 border-[#99999980]">
                                        <p class="font-medium text-[#000000CC] text-[20px]">{{ hospital.name }}</p>
                                        <p class="font-medium text-[#999999] text-[20px]">{{ hospital.address }}</p>
                                        <p class="font-medium text-[#999999] text-[20px]">{{ hospital.pincode }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                        <NuxtLink to="/insurance/health/kyc-final-form"
                            class="text-[#FFFFFF] text-sm font-semibold py-1">
                            Proceed To The Proposal
                        </NuxtLink>
                    </div>
                </div>

            </div>

        </aside>


    </main>



</template>

<script setup>
const hospitals = ref([
    {
        name: 'Aakash Healthcare',
        address: 'Hospital Plot Road No.201, Sector-3, Near Rajapuri Petrol Pump, Dwarka Sector-3',
        pincode: 'Delhi-110032',
    },
    {
        name: 'Aakash Hospital',
        address: 'No.90/43, Opposite Green Fields School, Malviya Nagar',
        pincode: 'Delhi-110045',
    },
    {
        name: 'Aarna Eye Care Centre',
        address: '6 Inder Enclave Metro Pillar No 314 Rohtak Road Udyog Nagar Metro Stn',
        pincode: 'Delhi-110034',
    },
    {
        name: 'Boudnine Hospital',
        address: 'Plot 6B Community Centre Mandawali Faizalpur Ip Ext. Near Park Hotel',
        pincode: 'Delhi-110045',
    },
    {
        name: 'Balok Hospital',
        address: 'Plot No 136 14 Main Kanjhawala Road Rohini',
        pincode: 'Delhi-110056',
    },
    {
        name: 'Bajaj Eye Care Centre',
        address: 'No.101, Vikas Surya Plot No.7, Dda Community Centre, Road No 44, Pitampura',
        pincode: 'Delhi-110031',
    },
    {
        name: 'Cakash Healthcare',
        address: 'Hospital Plot Road No.201, Sector-3, Near Rajapuri Petrol Pump, Dwarka Sector-3',
        pincode: 'Delhi-110032',
    },
    {
        name: 'Cakash Hospital',
        address: 'No.90/43, Opposite Green Fields School, Malviya Nagar',
        pincode: 'Delhi-110045',
    },
    {
        name: 'Aarna Eye Care Centre',
        address: '6 Inder Enclave Metro Pillar No 314 Rohtak Road Udyog Nagar Metro Stn',
        pincode: 'Delhi-110034',
    },
    {
        name: 'Doudnine Hospital',
        address: 'Plot 6B Community Centre Mandawali Faizalpur Ip Ext. Near Park Hotel',
        pincode: 'Delhi-110045',
    },
    {
        name: 'Dalok Hospital',
        address: 'Plot No 136 14 Main Kanjhawala Road Rohini',
        pincode: 'Delhi-110056',
    },
    {
        name: 'Eajaj Eye Care Centre',
        address: 'No.101, Vikas Surya Plot No.7, Dda Community Centre, Road No 44, Pitampura',
        pincode: 'Delhi-110031',
    },
]);

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'];
const selectedCity = ref('Delhi');
const searchQuery = ref('');

// Filter hospitals by city and search query
const filteredHospitals = computed(() =>
    hospitals.value.filter((hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);

</script>
<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>