<template>
    <div class="relative py-28">
        <div class="absolute top-0 left-0">
            <img src="/assets/favicon/Top_Left_Design_Icon.png" alt="">
        </div>
        <div class="absolute bottom-0 right-0">
            <img src="/assets/favicon/Bottom_Right_Design_Icon.png" alt="">
        </div>
        <div class="">
            <div class="px-4 lg:w-[880px] justify-items-center mx-auto h-auto">
                <div class="flex flex-col justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-52 flex items-center justify-center text-[#2B2B5F]">
                            <Divider align="center" type="solid">
                                <b class="bg-white px-2">WE ALWAYS HELP</b>
                            </Divider>

                        </div>
                        <div class="w-fit text-center">
                            <span class="text-4xl font-semibold text-[#2B2B5F]">Frequently Asked <br> Questions</span>
                        </div>
                    </div>

                    <!-- FAQ Section -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
                        <!-- FAQ Card -->
                        <Accordion v-for="(faq, index) in faqs" :key="index" :unstyled="true"
                            class="border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
                            <AccordionPanel :unstyled="true" :value="index">
                                <AccordionHeader :unstyled="true"
                                    class="flex items-center justify-between w-full px-3 py-2" :toggleicon="false">
                                    <span class="flex items-center ">
                                        <div class="flex items-center  gap-2">
                                            <button class="p-2 bg-[#2B2B5F] rounded-full">
                                                <img src="/assets/favicon/Question_Mark_Icon.png" alt="">
                                            </button>
                                            <h3 class="font-semibold text-sm text-[#2B2B5F]">{{ faq.question }}</h3>
                                        </div>
                                    </span>
                                </AccordionHeader>
                                <AccordionContent :unstyled="true">
                                    <Divider class="text-[#99999980]" />
                                    <div class="p-3">
                                        <p v-if="faq.answer" class="text-sm text-gray-600 mt-2">{{ faq.answer }}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionPanel>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

// FAQ Data
const faqs = [
    { question: "Do you currently have any insurance policies", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "How much coverage do you need", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "Have you had any claims in the past year", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "What is your budget for insurance", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "When would you like your coverage to start", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "Who would you like to include in your policy", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }
];


</script>