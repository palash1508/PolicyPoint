<template>
    <div>
        <SharedHeroSection
            :title="pageTitle"
            :bgImage="bgImage"
            :breadcrumb="breadcrumb"
        />
        
    </div>
</template>

<script setup>
const bgImage = 'Blogs_BG_Image.jpg'
const pageTitle = 'Blogs'
const breadcrumb = 'Blogs'

</script>