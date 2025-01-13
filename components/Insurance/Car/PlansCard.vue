<template>
    <div
        class="flex flex-col md:flex-row items-center justify-between md:items-center gap-4 p-6 bg-white rounded-lg border border-[#2B2B5F80] shadow-md hover:shadow-lg transition-shadow shadow-custom">
        <div class="flex flex-col items-center">
            <!-- Logo -->
            <div>
                <img :src="`/assets/images/Insurance/${plan.logo}`" alt="Plan Logo" class="" loading="lazy" />
            </div>

            <!-- Add to Compare -->
            <label class="flex items-center mt-4 space-x-2">
                <input type="checkbox" class="form-checkbox w-4 h-4 text-[#2B2B5F] border-[#000000] " />
                <span class="text-[#000000] text-xs font-semibold">Add to compare</span>
            </label>
        </div>

        <!-- Middle Section -->
        <div class="flex flex-col items-center justify-center">
            <p class="text-lg font-bold text-[#2B2B5F]">{{ plan.idvCover }}</p>
            <p class="text-[#999999] text-xs font-semibold">IdV Cover</p>
            <div class="flex items-end justify-center">
                <div class="text-center">
                    <p class="text-lg font-bold text-[#2B2B5F]">{{ plan.garages }} ▼</p>
                    <p class="text-[#999999] text-xs font-semibold">Cashless Garages</p>
                </div>
                <div>
                    <img src="/assets/images/Insurance/Cashless_Garrage.png" alt="" class="ml-2">
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
            <p class="text-[#999999] font-semibold text-xs">Claims Settled</p>
            <p class="text-[#2B2B5F] font-bold text-xl flex items-center">
                <span>{{ plan.settlement }} </span>
                <img src="/assets/images/Insurance/Settlement_Trophy.png" alt="" class="w-5 h-5 ml-2">
            </p>
            <p class="text-[#999999] font-semibold text-xs mt-1">Premium</p>
            <p class="text-[#2B2B5F] font-bold text-xl">
                ₹ {{ plan.premium }}
                <span class="text-sm text-[#2B2B5FB2] font-semibold">/annually</span>
            </p>
        </div>

        <!-- Right Section -->
        <div class="flex flex-col items-center text-right space-y-2">
            <NuxtLink to="/insurance/car/plan-details" class="bg-[#2B2B5F] text-white py-2 px-6 rounded hover:bg-blue-800">
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