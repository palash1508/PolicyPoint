<template>

    <div style="border-top-left-radius: 100px;" class="h-auto bg-[#EEEEEE80]">
        <div class="flex flex-col justify-center">
            <div class="text-center mt-10 xl:mt-20 ">
                <span class="text-2xl lg:text-[40px] font-bold text-[#2B2B5F]">Answer Questions about Special <br>
                    Insurance Packages</span>
            </div>
            <div class="text-center mt-3">
                <span class="text-[#999999] text-sm font-bold">MEET OUR EXPERTS</span>
            </div>

            <div
                class="  h-auto p-4 md:px-36 lg:px-10 xl:px-52 justify-between lg:flex items-end xl:items-stretch lg:gap-6">
                <div>
                    <div class="w-full lg:w-96 xl:w-[512px] grid gap-4 mt-5 ">
                        <!-- FAQ Card -->
                        <Accordion v-for="(faq, index) in faqs" :key="index" :unstyled="true"
                            class="bg-[#FFFFFF] shadow-custom">
                            <AccordionPanel :unstyled="true" :value="index">
                                <AccordionHeader :unstyled="true"
                                    class="flex items-center justify-between w-full px-3 py-2" :toggleicon="false">
                                    <span class="flex items-center p-2 h-12">
                                        <div class="flex gap-2 items-center text-start w-80 md:w-[450px]">
                                            <span class=" text-[#999999] font-semibold text-xs flex items-center">
                                                FAQ:
                                            </span>
                                            <div class="font-bold text-xs text-[#000000B2] ">{{ faq.question }}</div>
                                        </div>
                                    </span>
                                </AccordionHeader>
                                <AccordionContent :unstyled="true">
                                    <Divider class="text-[#99999980]" />
                                    <div class="px-5 py-3">
                                        <p v-if="faq.answer" class="text-sm text-gray-600 mt-2">{{ faq.answer }}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionPanel>
                        </Accordion>
                    </div>

                </div>
                <div class="hidden lg:block">
                    <img src="/assets/favicon/Faq_Assosiate_Image.png" alt="Associate Image">
                </div>

            </div>
        </div>

    </div>

</template>

<script setup>
const faqs = [
    { question: "What types of insurance policies do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "How do I determine which insurance policy is best suited for my needs? Choosing the right insurance policy can be a complex process", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "What types of insurance policies do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "How do I determine which insurance policy is best suited for my needs? Choosing the right insurance policy can be a complex process", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "What types of insurance policies do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "How do I determine which insurance policy is best suited for my needs? Choosing the right insurance policy can be a complex process", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { question: "What types of insurance policies do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }
];
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>