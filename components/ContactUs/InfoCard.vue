<template>
    <div v-for="(info, index) in contactInfoList" :key="index" class="h-[60px] flex gap-5 items-center mt-2">
        <div :class="info.iconBgClass + ' h-full w-[60px] flex items-center justify-center'">
            <button>
                <img :src="`/assets/favicon/${info.iconSrc}`" :alt="info.title" loading="lazy"/>
            </button>
        </div>
        <div :class="' h-[46px]  flex flex-col'">
            <span class="text-sm font-semibold text-[#999999]">{{ info.title }}</span>
            <span class="text-sm font-semibold text-[#2B2B5F]">{{ info.value }}</span>
        </div>
    </div>
</template>

<script setup>
const contactInfoList = [
    {
        title: 'Phone No.',
        value: '+91 8655691415',
        iconSrc: 'Phone_Icon.png',
        iconBgClass: 'bg-[#2B2B5F]',
    },
    {
        title: 'Address office',
        value: '999 main st, Delhi - 110001',
        iconSrc: 'Message_Icon.png',
        iconBgClass: 'bg-[#2B2B5F]',
    },
    {
        title: 'Email',
        value: 'policypoint@support.mail.com',
        iconSrc: 'Location_Pin_Icon.png',
        iconBgClass: 'bg-[#2B2B5F]',
    },
]
</script>
