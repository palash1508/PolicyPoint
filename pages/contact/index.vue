<template>
    <div>
        <SharedHeroSection :title="pageTitle" :bgImage="bgImage" :breadcrumb="breadcrumb"
            :featuredImage="featuredImage" />

        <div>
            <div class="container lg:h-[636px] w-full flex items-center justify-center">
                <div class="flex flex-col lg:flex-row items-center lg:h-[406px] lg:w-[930px]">
                    <ContactUsInfo />
                    <ContactUsSendMessage />

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
const bgImage = '/assets/images/HeroSection/ContactUs_BG_Image.jpg'
const pageTitle = 'Contact Us'
const breadcrumb = 'Contact Us'
const featuredImage = '/assets/images/HeroSection/ContactUs_F_Image.png'

</script>