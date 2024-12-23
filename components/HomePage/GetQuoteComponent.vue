<template>
    <div class="md:px-28 mx-auto">
        <div class="w-full py-10 xl:py-20 bg-white px-4 md:px-10 xl:px-20 shadow-2xl"
            style="border-top-left-radius: 100px;">

            <div class="flex flex-col lg:flex-row gap-3">
                <div class="flex flex-col w-full gap-5">
                    <div class="flex justify-center">
                        <ul class="flex space-x-4">
                            <li v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.name" :class="[
                                'cursor-pointer font-semibold text-lg xl:text-[22px]',
                                activeTab === tab.name ? 'text-[#2B2B5F]' : 'text-[#808080CC]',
                            ]">
                                {{ tab.name }}
                            </li>
                        </ul>
                    </div>

                    <div class="w-full ">
                        <form class="space-y-3">
                            <div v-for="field in formFields" :key="field.id">
                                <label class="" :for="field.id">{{ field.label }}</label>
                                <component :is="field.type === 'select' ? 'select' : 'input'" :id="field.id"
                                    :placeholder="field.placeholder" :class="[
                                        'w-full border border-[#0000004D] mt-1 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2B2B5F]',
                                        field.type === 'select' ? 'bg-white' : '',
                                    ]">
                                    <option v-if="field.options" v-for="option in field.options" :key="option">
                                        {{ option }}
                                    </option>
                                </component>
                            </div>
                        </form>
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full bg-[#2B2B5F] text-white font-semibold py-2 hover:bg-[#1d1d3f]">
                            Get Quote Now
                        </button>
                    </div>
                </div>

                <div class="flex px-6 mt-3 lg:mt-0 relative ">
                    <div class="w-full flex flex-col text-left z-10 relative">
                        <div class="lg:w-[636px]">
                            <h2 class="text-2xl xl:text-[40px] font-bold xl:leading-[55px] text-[#2B2B5F]">
                                Start Protecting Your <br> Future Now:
                            </h2>
                        </div>
                        <p class="text-[#009CB1] font-semibold text-xl mt-2">Get A Quote</p>
                        <p class="text-[#999999] text-sm font-semibold mt-4">
                            Ready to safeguard your future? Simply fill out our quick <br  class="hidden lg:block"> and easy
                            form to kickstart your journey towards <br  class="hidden lg:block"> comprehensive insurance
                            coverage. Your security is our <br  class="hidden lg:block"> priority, and with just a few clicks,
                            you’ll be on your way <br  class="hidden lg:block"> to peace of mind. Don’t wait – take control of
                            your <br  class="hidden lg:block"> tomorrow today!
                        </p>
                        <div class="mt-6">
                            <div class="flex items-center space-x-2 text-[#2B2B5F]">
                                <button><img src="/assets/favicon/Get_Quote_Call_Icon.png" alt=""></button>
                                <p class="font-semibold">Questions? Contact us for personalized <br> insurance solutions.</p>
                            </div>
                            <p class="text-[#2B2B5F] font-bold text-lg mt-2">+91 8655691415</p>
                        </div>
                    </div>
                    <div class="absolute inset-0 hidden lg:flex items-center justify-end z-0 overflow-hidden xl:overflow-visible">
                        <img src="/assets/images/landingPage/Get_Quote_Woman_Image.png" alt="Insurance Lady"
                            class=" h-auto object-cover opacity-80 translate-x-6 "
                            style="mix-blend-mode: multiply;" />
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('Home');

const tabs = [
    { name: 'Home' },
    { name: 'Life' },
    { name: 'Health' },
    { name: 'Vehicle' },
];

const formFields = [
    {
        id: 'full-name',
        label: 'Full Name',
        placeholder: 'Your Name',
        type: 'text',
    },
    {
        id: 'phone',
        label: 'Phone No.',
        placeholder: 'Your Mobile No.',
        type: 'text',
    },
    {
        id: 'email',
        label: 'Email Address',
        placeholder: 'eg@gmail.com',
        type: 'email',
    },
    {
        id: 'insurance-type',
        label: 'Type Of Insurance',
        placeholder: 'Type of Insurance',
        type: 'select',
        options: ['Type of Insurance', 'Health', 'Life', 'Vehicle'],
    },
];
</script>

<style scoped>
</style>