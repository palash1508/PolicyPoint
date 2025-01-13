<template>
    <div
        class="flex flex-col md:flex-row items-center justify-between md:items-center gap-4 p-6 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
        <div class="flex flex-col items-center">
            <!-- Logo -->
            <div>
                <img :src="`/assets/images/Insurance/${plan.logo}`" alt="Plan Logo" class="" loading="lazy"/>
            </div>

            <!-- Add to Compare -->
            <label class="flex items-center mt-4 space-x-2">
                <input type="checkbox" class="form-checkbox w-4 h-4 text-[#2B2B5F] border-[#000000] " />
                <span class="text-[#000000] text-xs font-semibold">Add to compare</span>
            </label>
        </div>

        <!-- Middle Section -->
        <div class="flex flex-col items-center justify-center">
            <p class="text-lg font-bold text-[#2B2B5F]">{{ plan.sumInsured }}</p>
            <p class="text-[#999999] text-xs font-semibold">Sum Insured</p>
            <div class="flex items-end justify-center">
                <div class="text-center">
                    <p class="text-lg font-bold text-[#2B2B5F]">{{ plan.hospitals }} ▼</p>
                    <p class="text-[#999999] text-xs font-semibold">Cashless Hospital</p>
                </div>
                <div>
                    <img src="/assets/images/Insurance/Hospital_Card_Img.png" alt="">
                </div>
            </div>
        </div>

        <!-- Features -->
        <div class="flex flex-col items-center">
            <ul class="text-sm text-gray-600 space-y-1 mt-3">
                <li v-for="(feature, index) in plan.features" :key="index" class="flex items-center gap-2">
                    <i class="fas fa-arrow-right text-[10px] font-semibold text-[#2B2B5F]"></i>
                    <p class="text-[#999999] text-[10px] font-semibold leading-[16px]">{{ feature }}</p>
                </li>
            </ul>
        </div>

        <div class="flex flex-col items-center">
            <p class="text-[#999999] font-semibold text-xs">Premium</p>
            <p class="text-[#2B2B5F] font-bold text-xl">
                ₹ {{ plan.premium }}
                <span class="text-sm text-[#2B2B5FB2] font-semibold">/annually</span>
            </p>
            <p class="text-[#999999] font-semibold text-[11px] leading-[17px]">or</p>
            <p class="text-[#2B2B5FB2] font-semibold text-sm">₹ {{ plan.monthlyPremium }}/month</p>
        </div>

        <!-- Right Section -->
        <div class="flex flex-col items-center text-right space-y-2">
            <NuxtLink to="/insurance/health/plan-details" class="bg-[#2B2B5F] text-white py-2 px-6 rounded hover:bg-blue-800">
                Buy Now
            </NuxtLink>
            <button class="text-[#2B2B5F] text-[10px] font-semibold">Plan details</button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    plan: Object,
});
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>