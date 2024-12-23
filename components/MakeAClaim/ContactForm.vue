<template>
    <div>
        <form class="p-6 lg:p-0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div v-for="(field, index) in inputFields" :key="index" :class="field.colSpan">
                    <label :for="field.id" class="text-xs font-semibold text-[#999999]">{{ field.label }}</label>
                    <input :id="field.id" :type="field.type" :placeholder="field.placeholder"
                        class="w-full p-3 mt-1 text-xs font-semibold placeholder-[#999999] bg-[#EEEEEE] border  border-[#EEEEEE] rounded-md lg:rounded-none focus:ring-2 focus:ring-[#2B2B5F] focus:outline-none" />
                </div>
            </div>
    
            <div class="mt-3">
                <label for="message" class="text-xs font-semibold text-[#999999]">Message</label>
                <textarea id="message" placeholder="Your message" rows="5"
                    class="w-full mt-1 p-3 bg-[#EEEEEE] text-xs font-semibold placeholder-[#999999] border border-[#EEEEEE] rounded-md lg:rounded-none focus:ring-2 focus:ring-[#2B2B5F] focus:outline-none"></textarea>
            </div>
    
            <button type="submit"
                class="flex items-center justify-center mt-4 w-full md:h-10 md:w-auto px-3 py-4 bg-[#2B2B5F] text-white rounded-lg hover:bg-[#1F1F4A] transition">
                Send Message
            </button>
    
        </form>
    </div>
</template>

<script setup>
const inputFields = [
    { id: 'full-name', label: 'Full name', type: 'text', placeholder: 'Your name', colSpan: 'col-span-1 md:col-span-2' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Your mail', colSpan: 'col-span-1' },
    { id: 'phone', label: 'Phone', type: 'text', placeholder: 'Your number', colSpan: 'col-span-1' },
];
</script>

<style scoped></style>