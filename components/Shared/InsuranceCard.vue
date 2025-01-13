<template>
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 lg:gap-8 xl:gap-24 items-center">
        <div v-for="card in cards" class="w-[180px] h-[240px] md:w-[200px] md:h-[275px] bg-[#01C4DE1A] rounded-lg">
            <NuxtLink :to="card.to">
                <img :src="`/assets/images/landingPage/${card.imgLink}`" loading="lazy" class="rounded-t-lg" :alt="card.name">
                <div class="flex flex-col items-center justify-center">
                    <button class="bg-[#2B2B5F] rounded-full -mt-7"><img :src="`/assets/images/landingPage/${card.iconLink}`" :alt="card.name"></button>
                    <span class="text-[#2B2B5F] text-xl font-semibold mt-2 md:mt-4">{{ card.text }}</span>
                    <span class="text-[#000000] text-[10px] font-medium mt-1 text-center">"Secure Your Future with Trusted
                        Life Insurance"</span>
    
                </div>
            </NuxtLink>
        </div>
    </div>

</template>

<script setup>
// The cards prop will be passed to the component
defineProps({
    cards: {
        type: Array,
        required: true,
    },
});
</script>