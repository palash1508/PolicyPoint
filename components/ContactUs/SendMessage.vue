<template>
    <div class="mx-2 md:mx-0 w-full h-auto lg:w-[441px] lg:h-[400px]  border-[#999999] border-2 mt-3 lg:mt-0">
        <!-- Form Container -->
        <form class="py-2 md:py-4 px-1 md:px-2 lg:p-11">
            <!-- Dynamic Input Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <template v-for="(field, index) in inputFields" :key="index">
                    <input :type="field.type" :placeholder="field.placeholder"
                        class="w-full text-xs font-semibold p-3 bg-[#01C4DE33] placeholder-[#2B2B5F] rounded-md lg:rounded-none outline-none focus:ring-2 focus:ring-[#2B2B5F]" />
                </template>
            </div>

            <!-- Message Box -->
            <textarea rows="5" placeholder="Write Message"
                class="mt-4 w-full h-[129px] p-3 bg-[#01C4DE33] text-xs font-semibold placeholder-[#2B2B5F] rounded-md lg:rounded-none outline-none focus:ring-2 focus:ring-[#2B2B5F]"></textarea>

            <!-- Submit Button -->
            <button type="submit"
                class="md:mt-3 lg:mt-5 w-full lg:w-auto px-6 py-3 bg-[#2B2B5F] text-[#FFFFFF] rounded-md md:rounded-lg hover:bg-[#1F1F4A] transition">
                Send A Message
            </button>
        </form>


    </div>
</template>

<script setup>
const inputFields = [
    { type: "text", placeholder: "Your name" },
    { type: "email", placeholder: "Your email" },
    { type: "text", placeholder: "Phone no." },
    { type: "text", placeholder: "Subject" },
];
</script>