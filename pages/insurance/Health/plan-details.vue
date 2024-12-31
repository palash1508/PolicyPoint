<template>
    <main class=" mx-auto flex flex-col lg:flex-row gap-16 mt-2 items-start p-3 md:p-14">
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
                            <div class="flex items-center gap-2">
                                <p class="text-[#999999] text-xs font-semibold">Network Hospital</p>
                                <img src="/assets/images/insurance/Hospital_Card_Img.png" alt="">
                                <p class="text-lg font-bold text-[#2B2B5F]">237</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p class="text-[#999999] text-xs font-semibold">Sum Insured</p>
                                <p class="text-lg font-bold text-[#2B2B5F]">5 Lakh</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p class="text-[#999999] text-xs font-semibold">Policy Tenure</p>
                                <p class="text-lg font-bold text-[#2B2B5F]">1 Year</p>
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
                    <div class="flex-1 flex-col items-center justify-center gap-3">
                        <div class="w-full md:w-1/3 flex items-center justify-between">
                            <span class="text-xl  font-semibold text-[#2B2B5F]">Selected Members</span>
                            <span class="text-xs  font-semibold text-[#000000]">Age</span>
                        </div>
                        <div class="w-full md:w-1/3 flex items-center justify-between  mt-2">
                            <span class="text-xs  font-semibold text-[#000000]">Rahul Sharma</span>
                            <span class="text-xs  font-semibold text-[#999999]">25 yrs</span>
                        </div>
                        <div class="w-full md:w-1/3 flex items-center justify-between">
                            <span class="text-xs  font-semibold text-[#000000]">Parul Sharma</span>
                            <span class="text-xs  font-semibold text-[#999999]">24 yrs</span>
                        </div>
                        
                    </div>

                    <div class="flex justify-items-start">
                        <button class="text-[#01B9D1] font-semibold text-xs">Edit Members</button>
                    </div>
                </div>
            </div>




        </section>

        <!-- Sidebar Buy -->
        <aside class="w-full lg:w-1/4 ">
            <div class="flex flex-col  bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
                <div class="border-b-2">
                    <div class="p-3 text-xl font-semibold text-[#2B2B5F]">
                        Summary
                    </div>
                </div>
                <div class="flex items-center justify-between mt-1">
                    <div class="px-3 text-[#999999] font-medium text-sm">Base Premium - <span class="text-[#2B2B5F] font-semibold">1 Years</span></div>
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
                        <div class="text-[#FFFFFF] text-sm font-semibold">
                            Proceed To The Proposal
                        </div>
                    </div>
                </div>

            </div>

        </aside>


    </main>



</template>

<script setup>

</script>
<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>