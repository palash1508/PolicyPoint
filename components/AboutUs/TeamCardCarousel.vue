<template>
    <div class="">
        <div class="relative  w-full p-4 lg:px-7 xl:px-0 flex flex-col-reverse xl:flex-row xl:items-center py-10  xl:bg-transparent justify-end xl:-mr-10">
            <!-- Navigation Buttons -->
            <div class="flex justify-center space-x-2 mt-4 py-5 xl:py-10 px-12">
                <button
                    class="w-10 h-10 bg-[#01C4DE] text-[#FFFFFF] flex items-center justify-center hover:bg-blue-600"
                    @click="prevCard">
                    <span>&lt;</span>
                </button>
                <button
                    class="w-10 h-10 bg-[#01C4DE] text-[#FFFFFF] flex items-center justify-center hover:bg-teal-400"
                    @click="nextCard">
                    <span>&gt;</span>
                </button>
            </div>
    
            <!-- Card Container -->
            <div class="flex overflow-hidden space-x-2 w-full xl:w-[70%] py-5 xl:py-10 justify-between pr-3">
                <!-- Cards -->
                <div v-for="(card, index) in visibleCards" :key="index" style="border-top-left-radius: 30px;"
                    class="  bg-[#FFFFFF] shadow-custom flex flex-col">
                    <div class=" w-[240px] h-[237px]">
                        <div style="border-top-left-radius: 15px;" class="w-auto h-auto">
                            <img :src="card.imageUrl" alt="icon" class="" style="border-top-left-radius: 30px;"/>
                        </div>
                        <div class="bg-[#2B2B5F] flex items-center justify-between">
                            <div class="px-4 h-full">
                                <h3 class="text-xs font-bold text-[#FFFFFF]  pr-3">{{ card.name }}</h3>
                                <p class="text-[8px] font-bold text-[#FFFFFF] ">{{ card.position }}</p>
                            </div>
                            <div class="w-10 h-10 bg-[#01C4DE] flex items-center justify-center" style="border-top-left-radius: 10px;">
                                <img src="/assets/favicon/Share_Icon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            
        </div>

    </div>
</template>

<script setup>

// Cards Array
const cards = ref([
    {
        imageUrl: '/assets/images/Team_1.png',
        name: 'Ananya Sharma',
        position: 'CEO & Founder',
    },
    {
        imageUrl: '/assets/images/Team_2.png',
        name: 'Ananya Sharma',
        position: 'CEO & Founder',
    },
    {
        imageUrl: '/assets/images/Team_3.png',
        name: 'Ananya Sharma',
        position: 'CEO & Founder',
    },
    {
        imageUrl: '/assets/images/Team_1.png',
        name: 'Ananya Sharma',
        position: 'CEO & Founder',
    },
    {
        imageUrl: '/assets/images/Team_2.png',
        name: 'Ananya Sharma',
        position: 'CEO & Founder',
    },
    {
        imageUrl: '/assets/images/Team_3.png',
        name: 'Ananya Sharma',
        position: 'CEO & Founder',
    },
    {
        imageUrl: '/assets/images/Team_1.png',
        name: 'Ananya Sharma',
        position: 'CEO & Founder',
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