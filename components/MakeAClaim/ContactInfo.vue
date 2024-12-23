<template>
    <div class="w-full lg:w-1/2 pr-0 lg:pr-14 space-y-6">
        <h2 class="text-2xl xl:text-3xl font-bold text-[#2B2B5F]">{{title}}</h2>
        <div v-for="(info, index) in contactDetails" :key="index" 
            :class="{'border-b border-[#EEEEEE]': index !== contactDetails.length - 1}"
            class="flex items-center py-2"
        >
            <div class="h-8 flex items-center  space-x-2">
                <img :src="info.icon" :alt="info.title" class="" />
                <div>
                    <h3 class="text-[10px] font-semibold text-[#999999]">{{ info.title }}</h3>
                    <p class="text-xs text-[#2B2B5F] font-semibold">{{ info.detail }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps({
    title: {
        type: String,
        required: true,
    },
});
const contactDetails = [
    {
        icon: '/assets/favicon/MakeClaim/Location_Icon.png',
        title: 'Address office',
        detail: '999 main st, Delhi - 110001',
    },
    {
        icon: '/assets/favicon/MakeClaim/Call_Icon.png',
        title: 'Phone No.',
        detail: '+91 8655691415',
    },
    {
        icon: '/assets/favicon/MakeClaim/Mail_Icon.png',
        title: 'Email',
        detail: 'policypoint@support.mail.com',
    },
];
</script>

<style scoped></style>