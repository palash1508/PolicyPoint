<template>
    <div class="relative py-10 md:py-20 xl:py-32 w-full ">
        <div class="absolute top-0 right-0">
            <img src="/assets/favicon/Top_Right_Star_Icon.png" alt="">
        </div>
        <div class="absolute bottom-0 left-0">
            <img src="/assets/favicon/Bottom_Left_Star_Icon.png" alt="">
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-center px-10 xl:px-32">
            <div class="">
                <div class="text-center">
                    <span class="text-4xl font-semibold">Confident Financially <br> While You Age</span>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    <div v-for="(info, index) in infoData" :key="index" class="flex flex-col space-y-2 xl:w-64 xl:h-40">
                        <div class="">
                            <img :src="info.icon" :alt="info.alt" class="">
                        </div>
                        <div class="ml-1">
                            <h3 class="text-xl font-semibold text-[#2B2B5F]">{{ info.title }}</h3>
                            <p class="text-[#999999] text-xs font-medium">
                                {{ info.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="Background" class="relative w-full flex ">
        <img src="/assets/images/landingPage/Company_Port_BG_Image.png" alt="" class="w-full h-full object-cover">
        <div class="absolute flex justify-center mt-14 w-full">
            <div class="flex mx-auto ">
                <img src="/assets/favicon/Achievement_Cvr_Icon.png" alt="" class="">

            </div>
        </div>
    </div>

    <div id="Forward" class="w-full md:-mt-32 lg:-mt-56 xl:-mt-80 z-10">
        <div class="w-fit flex mx-auto ">
            <div class="flex items-end z-20">
                <div class="hidden md:flex justify-start">
                    <img src="/assets/images/landingPage/Secured_Life_Fam_Image.png" alt="">
                </div>
                <div
                    class="w-full md:w-[484px] h-[597px] md:-ml-44 bg-white flex flex-col justify-between shadow-custom rounded-lg">
                    <div class="w-full px-6  h-auto rounded-lg">
                        <div class="mt-20">
                            <span class="text-4xl font-semibold text-[#2B2B5F]">For A Secured Lifetime</span>
                        </div>
                        <div class="w-full mt-5">

                            <Accordion v-model="activeIndex" :unstyled="true">
                                <AccordionPanel v-for="(item, index) in securedLifeTimeQues" :key="index"
                                    :unstyled="true" :value="index">
                                    <AccordionHeader :unstyled="true"
                                        class="flex items-center justify-between w-full px-2"
                                        :class="{ 'bg-[#344588] text-[#FFFFFF]': activeIndex === index }"
                                        :toggleicon="false" @click="toggleAccordion(index)">
                                        <span class="flex items-center h-12 text-left">
                                            <div>
                                                <div :class="{ 'text-[#2B2B5F]': activeIndex !== index }"
                                                    class="font-semibold text-xs ">
                                                    {{ item.question }}
                                                </div>
                                            </div>
                                        </span>
                                    </AccordionHeader>
                                    <AccordionContent :unstyled="true">
                                        <div class="px-5 py-3">
                                            <p v-if="item.answer" class="text-[10px] font-medium text-[#999999] mt-2">
                                                {{ item.answer }}
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionPanel>
                            </Accordion>
                        </div>
                    </div>
                    <div class="text-end mr-5 mb-5">
                        <button class="bg-[#2B2B5F] text-[#FFFFFF] text-base font-semibold rounded-lg py-2 px-3">Read
                            More</button>
                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<script setup>
const infoData = [
    {
        icon: '/assets/favicon/Planing_Analysis_Icon.png',
        alt: 'Planing & Analysis Icon',
        title: 'Planing & Analysis',
        description:
            'Lorem ipsum dolor sit amet consectetur. Massa sed donec at velit id eu imperdiet volutpat.',
    },
    {
        icon: '/assets/favicon/Protector_Insurance_Icon.png',
        alt: 'Protector Insurance Icon',
        title: 'Protector Insurance',
        description:
            'Lorem ipsum dolor sit amet consectetur. Massa sed donec at velit id eu imperdiet volutpat.',
    },
    {
        icon: '/assets/favicon/Trust_Insured_Icon.png',
        alt: 'Trust Insured Icon',
        title: 'Trust Insured',
        description:
            'Lorem ipsum dolor sit amet consectetur. Massa sed donec at velit id eu imperdiet volutpat.',
    },
    {
        icon: '/assets/favicon/Secure_Coverage_Icon.png',
        alt: 'Secure Coverage Icon',
        title: 'Secure Coverage',
        description:
            'Lorem ipsum dolor sit amet consectetur. Massa sed donec at velit id eu imperdiet volutpat.',
    },
];

const securedLifeTimeQues = [
    { question: "Navigating the Basics: Understanding Different Types of Insurance", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "Tips for Lowering Your Insurance Premiums Without Sacrificing Coverage", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "Demystifying Insurance Jargon: A Guide for Policyholders", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "Choosing the Right Insurance for You", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
];

const activeIndex = ref(null);

// Toggle accordion function
const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index; // Toggle logic
};
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>