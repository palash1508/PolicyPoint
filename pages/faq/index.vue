<template>
    <div>
        <SharedHeroSection :title="pageTitle" :bgImage="bgImage" :breadcrumb="breadcrumb"
            :featuredImage="featuredImage" />
        
        <div class="w-full">
            <FaqFrequentlyAskQuestions />
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