<template>
    <div>
        <SharedHeroSection :title="pageTitle" :bgImage="bgImage" :breadcrumb="breadcrumb"
            :featuredImage="featuredImage" 
        />

        <div class="md:px-10 md:py-11 xl:px-64 xl:py-16 md:flex justify-center">
            <div class="relative lg:w-[879px] lg:h-[430px] flex flex-col lg:flex-row bg-[#2B2B5F0D] shadow-custom p-6 lg:p-12 gap-8 lg:gap-0">
                <!-- Left Section -->
                <MakeAClaimContactInfo title="Need to make a claim?"/>
    
                <!-- Right Section -->
                <div class="w-full lg:w-[475px]">
                    <MakeAClaimContactForm />
                </div>
                <img src="/assets/favicon/MakeClaim/Car_Crash_Icon.png" alt="Car Crash" class="absolute bottom-0 right-0 " />
            </div>


        </div>


    </div>
</template>

<script setup>
const bgImage = 'MakeAClaim_BG_Image.jpg'
const pageTitle = 'Make A Claim'
const breadcrumb = 'Make A Claim'
const featuredImage = 'MakeAClaim_F_Image.png'

</script>

<style scoped>
.shadow-custom {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}

</style>