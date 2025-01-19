<template>
    <div>
        <div class="relative flex items-center justify-between lg:h-[351px] xl:h-[451px]">
            <!-- Background Image -->
            <img :src="`/assets/images/HeroSection/${bgImage}`" alt="Background IMG" loading="eager"
                class="h-full w-full object-cover" />
            <div class="bg-[#2B2B5FD9] w-full h-full absolute opacity-85"></div>

            <div class="absolute w-full h-full flex items-center ">
                <div class=" h-full w-full lg:w-1/3 xl:w-1/2 flex items-center">
                    <div class="flex flex-col ml-5 md:ml-14 lg:ml-24 xl:ml-32">
                        <div class="md:py-2">
                            <h2 class="font-bold text-2xl md:text-5xl text-[#FFFFFF]">{{ title }}</h2>
                        </div>
                        <div class="flex gap-2 items-center">
                            <button><i class="fa-solid fa-house text-[#FFFFFF]"></i></button>
                            <div>
                                <button class="text-[#999999] font-bold text-xs md:text-xl">Home</button>
                            </div>
                            <div>
                                <span class="text-[#FFFFFF] font-bold text-xs md:text-xl">/ {{ breadcrumb }}</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div v-if="featuredImage" class="h-full hidden lg:block lg:w-2/3 xl:w-1/2 relative overflow-hidden">
                    <img src="/assets/images/HeroSection/HeroSectionCircle1.png" alt="Circle img"
                        class="absolute hidden lg:block bottom-0 lg:right-52 xl:right-72 lg:h-[350px] xl:h-[500px]" />
                    <img :src="`/assets/images/HeroSection/${featuredImage}`" alt="Featured Image" loading="lazy"
                        :class="[
                            'absolute hidden lg:block bottom-0 right-0',
                            title === 'Contact Us' ? 'lg:h-[280px] xl:h-[390px] right-14' : 'lg:h-[320px] xl:h-[450px]',
                        ]"/>

                </div>

            </div>

            <!-- Top Left Corner Image -->
            <img src="/assets/images/HeroSection/LeftUP.png" alt="Top left img" class="absolute hidden lg:block top-0" />

            <!-- Bottom Left Corner Image -->
            <img src="/assets/images/HeroSection/LeftDown.png" alt="Bottom left img"
                class="absolute hidden lg:block lg:bottom-9 xl:bottom-20 lg:left-9 xl:left-12" />

        </div>
    </div>
</template>

<script setup>
const prop = defineProps({
    title: {
        type: String,
        required: true,
    },
    breadcrumb: {
        type: String,
        required: true,
    },
    bgImage: {
        type: String,
        required: true,
    },
    featuredImage: {
        type: String,
        required: false,
        default: "",
    },
});

</script>