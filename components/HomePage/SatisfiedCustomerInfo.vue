<template>
    <div class="relative py-28 w-full">
        <div class="absolute top-0 left-0">
            <img src="/assets/favicon/Top_Left_Design_Icon.png" alt="">
        </div>
        <div class="absolute bottom-0 right-0">
            <img src="/assets/favicon/Bottom_Right_Design_Icon.png" alt="">
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-between px-10 xl:px-32">
            <div class="">
                <img src="/assets/favicon/SatisfiedCustomer_Image.png" alt="" class="">

            </div>
            <div class="">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div v-for="(info, index) in infoData" :key="index"
                        class="flex flex-col items-center text-center space-y-2 xl:w-64 xl:h-40">
                        <div class="w-20 h-20 flex items-center justify-center
                            ">
                            <img :src="`/assets/favicon/${info.icon}.png`" :alt="info.alt" loading="lazy" class="">
                        </div>
                        <h3 class="text-xl font-semibold text-[#000000]">{{ info.title }}</h3>
                        <p class="text-[#344588] text-xs font-semibold">
                            {{ info.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

const infoData = [
    {
        icon: 'Claim_Assist_Icon',
        alt: 'Claim Assistance Icon',
        title: 'Claim Assistance',
        description:
            'Get 24x7 claim assistance from our best advisors that will help you make your claim process hassle-free',
    },
    {
        icon: 'Instant_Quote_Icon',
        alt: 'Get Instant Quotes Icon',
        title: 'Get Instant Quotes',
        description:
            'Discover the convenience of instant quotes at your fingertips. Experience fast and hassle-free insurance planning',
    },
    {
        icon: 'Expert_Advice_Icon',
        alt: 'Expert Advice Icon',
        title: 'Expert Advice',
        description:
            'Trustworthy expertise for all your insurance needs. Our reliable advisors are here to assist you every step of the way.',
    },
    {
        icon: 'Achievement_Icon',
        alt: 'Fast & Reliable Icon',
        title: 'Fast & Reliable',
        description:
            'Trustworthy expertise for all your insurance needs. Our reliable advisors are here to assist you every step of the way.',
    },
];

</script>

<style scoped></style>