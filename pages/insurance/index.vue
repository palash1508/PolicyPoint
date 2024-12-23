<template>
    <div>
        <div class="md:mb-12 mb-6">
            <SharedHeroSection :title="pageTitle" :bgImage="bgImage" :breadcrumb="breadcrumb"
                :featuredImage="featuredImage" />
        </div>

        <div class="flex flex-col items-center justify-between h-full ">
            <div
                class="mx-auto text-sm font-medium md:text-xl md:font-semibold lg:text-3xl lg:font-semibold xl:text-4xl xl:font-bold md:mb-12 mb-6">
                <span class="text-[#2B2B5F]">Discover Excellence: Your Ultimate Insurance Destination</span>
            </div>

            <div class="md:mb-12 mb-6 ">
                <InsuranceSelectionView />
            </div>

            <div class="w-full">
                <InsuranceWhyChooseUs />
            </div>


        </div>


    </div>
</template>

<script setup>
const bgImage = '/assets/images/HeroSection/Insurance_BG_Image.jpg'
const pageTitle = 'Insurance'
const breadcrumb = 'Insurance'
const featuredImage = '/assets/images/HeroSection/Insurance_F_Image.png'

</script>