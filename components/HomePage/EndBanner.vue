<template>
    <div class="relative py-10 md:py-20 xl:py-32 w-full ">
        <div class="absolute top-0 left-0 hidden md:block">
            <img src="/assets/favicon/Top_Left_Style2.png" alt="">
        </div>
        <div class="absolute bottom-0 right-0 hidden md:block">
            <img src="/assets/favicon/Bottom_Right_Style2.png" alt="">
        </div>
        <div class="flex flex-col items-center justify-center px-10 xl:px-32">
            <div class="">
                <div class="text-center">
                    <span class="text-base md:text-2xl lg:text-4xl font-bold lg:leading-[56px] text-[#2B2B5F]">Explore
                        our range of insurance options and choose the perfect coverage for you.</span>
                </div>
            </div>
            <div
                class=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 justify-items-center mt-8">
                <div v-for="(card, index) in insuranceCards" :key="index"
                    class="w-52 h-52 flex flex-col items-center justify-between">
                    <div class="h-full flex items-center justify-center">
                        <img :src="card.icon" :alt="card.alt">
                    </div>
                    <button
                        class="w-full flex items-center justify-center h-10 bg-[#2B2B5F] text-[#FFFFFF] rounded-b-xl text-base font-semibold">
                        {{ card.title }}
                    </button>

                </div>
            </div>
            <div class="mt-12 ">
                <button
                    class="w-52 flex items-center text-center justify-center h-10 border-2 border-[#2B2B5F] text-[#2B2B5F] rounded-[20px] text-xl font-semibold">
                    View All Product
                </button>
            </div>
        </div>
    </div>

    <div class="flex  w-full">
        <div class="hidden md:block w-1/2">
            <img src="/assets/images/landingPage/BG_Cover.png" alt="">

        </div>
        <div class="w-full md:w-1/2 px-14 mt-4">
            <div class="xl:w-[536px]">
                <span class="text-[#2B2B5F] lg:text-3xl xl:text-[40px] xl:leading-[55px] font-bold">We're transfofrming insurance to be
                    surprisingly simple and hassle-free.
                </span>

                <div class="flex mt-6 xl:mt-12">
                    <div class="flex flex-col gap-2 lg:gap-6">
                        <div v-for="impact in impacts" class="flex flex-col">
                            <div class="flex items-center gap-2 lg:gap-5">
                                <img :src="impact.icon" alt="">
                                <span class="text-[#2B2B5F] lg:text-2xl font-bold">{{ impact.title }}</span>
                            </div>
                            <div class="lg:pl-12 lg:mt-1">
                                <span class="text-xs lg:text-base font-medium lg:leading-7 text-[#999999]">Lorem ipsum dolor sit amet
                                    consectetur. Nibh ucibus pharetra facilisi suspendisse eu in sed ipsum. Quis aliquam
                                    adipiscing donec euismod.</span>
    
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <div class="w-full bg-[#ECEBF0] mt-3 md:mt-0">
        <div class="flex items-center justify-center h-full md:gap-6 lg:gap-10 px-8 lg:px-16">
            <div v-for="provider in insuranceProvidersIcons" class="flex">
                <img :src="`/assets/favicon/${provider}.png`" alt="">
            </div>

        </div>

    </div>

    <div class="relative py-5 md:py-20 xl:py-32 w-full ">
        <div class="absolute top-0 left-0 hidden md:block">
            <img src="/assets/favicon/Top_Left_Style3.png" alt="">
        </div>
        <div class="absolute bottom-0 right-0 hidden md:block">
            <img src="/assets/favicon/Bottom_Right_Style3.png" alt="">
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center px-10 xl:px-32">
            <div class="">
                <div class="flex flex-col">

                    <span class="text-[#999999] font-bold text-base">About Company -</span>
                    <span class="text-[#2B2B5F] text-xl lg:text-3xl font-bold">What they’re talking <br> about us ?</span>
                    <span class="w-72 text-xs font-bold text-[#999999] mt-1">Lorem ipsum dolor sit amet consectetur. Scelerisque faucibus nunc condimentum euismod. Cursus in risus pellentesque scelerisque sed sed nec pulvinar suspendisse. Elementum mattis mi lectus et tristique. Porta vitae fames in sed enim.</span>
                </div>
            </div>
            <div>
                <img src="/assets/images/landingPage/Feedback_PNG.png" alt="">
            </div>
        </div>
    </div>

</template>

<script setup>
const insuranceProvidersIcons = ['Sbi_Life', 'Hdfc_Ergo', 'Max_Life', 'Kotak_Life', 'Icici_Lombard']
const insuranceCards = [
    {
        icon: '/assets/favicon/Health_PNG.png',
        alt: 'Health icon',
        title: 'Health',
    },
    {
        icon: '/assets/favicon/Family_PNG.png',
        alt: 'Family icon',
        title: 'Family Health Insurance',
    },
    {
        icon: '/assets/favicon/Life_PNG.png',
        alt: 'Life icon',
        title: 'Life Insurance',
    },
    {
        icon: '/assets/favicon/Travel_PNG.png',
        alt: 'Travel icon',
        title: 'Travel Insurance',
    },
    {
        icon: '/assets/favicon/Car_PNG.png',
        alt: 'Car icon',
        title: 'Car Insurance',
    },
    {
        icon: '/assets/favicon/Bike_PNG.png',
        alt: 'Bike icon',
        title: 'Two Wheeler Insurance',
    },
    {
        icon: '/assets/favicon/Airline_PNG.png',
        alt: 'Airline icon',
        title: 'Travel Insurance',
    },
    {
        icon: '/assets/favicon/Home_PNG.png',
        alt: 'Home icon',
        title: 'Home Insurance',
    },
];

const impacts = [
    {
        icon: '/assets/favicon/Protection_PNG.png',
        alt: 'Protection icon',
        title: 'Full protection insurance',
    },
    {
        icon: '/assets/favicon/Award_PNG.png',
        alt: 'Award icon',
        title: '10+ years experience',
    },
    {
        icon: '/assets/favicon/Support_PNG.png',
        alt: 'Support icon',
        title: '24/7 customer support',
    },
]
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>