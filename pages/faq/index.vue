<template>
    <div>
        <SharedHeroSection :title="pageTitle" :bgImage="bgImage" :breadcrumb="breadcrumb"
            :featuredImage="featuredImage" />
        <div class="relative py-28">


            <div class="absolute top-0 left-0">
                <img src="/assets/favicon/Top_Left_Design_Icon.png" alt="">
            </div>
            <div class="absolute bottom-0 right-0">
                <img src="/assets/favicon/Bottom_Right_Design_Icon.png" alt="">
            </div>
            <div class="">
                <FaqFrequentlyAskQuestions />
            </div>

        </div>

        <div>
            <FaqAssociateQuestions />
        </div>

        <div class="md:mb-12 mb-6 ">
            <FaqSendMessage />

        </div>

    </div>
</template>

<script setup>
const bgImage = '/assets/images/HeroSection/FAQ_BG_Image.jpg'
const pageTitle = 'FAQS'
const breadcrumb = 'FAQS'
const featuredImage = '/assets/images/HeroSection/FAQ_F_Image.png'

</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>