<template>
    <div class="relative w-full p-4 xl:px-7 flex flex-col xl:flex-row xl:items-end py-10 bg-[#EEEEEE4D]">
        <!-- Card Container -->
        <div class="flex overflow-hidden space-x-4 w-full xl:w-[80%] py-5 xl:py-10 justify-between pr-3">
            <!-- Cards -->
            <div v-for="(card, index) in visibleCards" :key="index" style="border-top-left-radius: 30px;"
                class=" w-full bg-[#FFFFFF] shadow-custom p-6 flex flex-col justify-between">
                <div class=" w-[200px] h-[230px]">
                    <div style="border-top-left-radius: 15px;" class="w-[60px] h-[60px] flex items-center justify-center bg-[#01C4DE]">
                        <img :src="`/assets/favicon/${card.icon}`" alt="icon" class="" loading="lazy"/>
                    </div>
                    <h3 class="text-2xl font-semibold text-[#2B2B5F] mt-1 pr-3">{{ card.title }}</h3>
                    <p class="text-xs font-semibold text-[#999999] mt-2">{{ card.description }}</p>
                </div>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-center space-x-2 mt-4 py-5 xl:py-10 px-12">
            <button
                class="w-10 h-10 bg-[#2B2B5F] text-[#FFFFFF] flex items-center justify-center hover:bg-blue-600"
                @click="prevCard">
                <span>&lt;</span>
            </button>
            <button
                class="w-10 h-10 bg-[#01C4DE] text-[#FFFFFF] flex items-center justify-center hover:bg-teal-400"
                @click="nextCard">
                <span>&gt;</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Cards Array
const cards = ref([
    {
        icon: 'Aim_Carousel_1.png',
        title: 'Comprehensive advice',
        description: 'In cases which reuire a multidisciplinary approach, we work with trusted partners and associates',
    },
    {
        icon: 'Aim_Carousel_2.png',
        title: 'Sustainable solutions',
        description: 'In cases which reuire a multidisciplinary approach, we work with trusted partners and associates',
    },
    {
        icon: 'Aim_Carousel_3.png',
        title: 'Communication confidentiality',
        description: 'In cases which reuire a multidisciplinary approach, we work with trusted partners and associates',
    },
    {
        icon: 'Aim_Carousel_4.png',
        title: 'No obligation quote',
        description: 'In cases which reuire a multidisciplinary approach, we work with trusted partners and associates',
    },
    {
        icon: 'Aim_Carousel_1.png',
        title: 'Comprehensive advice',
        description: 'In cases which reuire a multidisciplinary approach, we work with trusted partners and associates',
    },
    {
        icon: 'Aim_Carousel_2.png',
        title: 'Communication confidentiality',
        description: 'In cases which reuire a multidisciplinary approach, we work with trusted partners and associates',
    },
    {
        icon: 'Aim_Carousel_3.png',
        title: 'Sustainable solutions',
        description: 'In cases which reuire a multidisciplinary approach, we work with trusted partners and associates',
    },
]);

const visibleStart = ref(0);
const visibleCardsCount = 4;

// Computed property to get visible cards
const visibleCards = computed(() => {
    return cards.value.slice(visibleStart.value, visibleStart.value + visibleCardsCount);
});

// Move to next card
const nextCard = () => {
    if (visibleStart.value + visibleCardsCount < cards.value.length) {
        visibleStart.value += 1;
    } else {
        visibleStart.value = 0;
    }
};

// Move to previous card
const prevCard = () => {
    if (visibleStart.value > 0) {
        visibleStart.value -= 1;
    } else {
        visibleStart.value = cards.value.length - visibleCardsCount;
    }
};
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>