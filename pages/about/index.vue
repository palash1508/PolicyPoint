<template>
    <div>
        <SharedHeroSection
            :title="pageTitle"
            :bgImage="bgImage"
            :breadcrumb="breadcrumb"
            :featuredImage="featuredImage"
        />
        <AboutUsFirstSection />
        <AboutUsSecondSection />
        
    </div>
</template>

<script setup>
const bgImage = '/assets/images/HeroSection/AboutUsBG_Image.jpg'
const pageTitle = 'About Us'
const breadcrumb = 'About Us'
const featuredImage = '/assets/images/HeroSection/AboutUs_F_Image.png'

</script>