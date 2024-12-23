<template>
    <div>
        <div>
            <div class="flex flex-col text-center">
                <span class="mt-5 lg:mt-20 text-[#2B2B5F] text-[40px] font-bold">Still Have Question ?</span>
                <span class="mt-2 text-[#01C4DE] text-xs font-bold">CONTACT US</span>
                <span class="mt-2 text-[#999999] text-xs font-bold">Can’t find answer you’re looking for ? please
                    chat to our friendly team</span>
            </div>

        </div>

        <div class="lg:px-20 xl:px-48 mt-10 md:mt-36 lg:mt-14">
            <div class="hidden lg:block relative">
                <img src="/assets/favicon/Faq_Meeting_Image.png" alt="" class="bg-cover w-full h-auto" />
                <!-- <div class="absolute  bg-white lg:w-[808px] lg:h-20 bottom-0 right-7 xl:right-[124px]"></div> -->
            </div>

            <div class="lg:w-[879px] lg:h-[430px]  mx-auto md:flex justify-center md:-mt-24 relative z-10 bg-white">
                <div
                    class="lg:w-[879px] lg:h-[430px] flex flex-col lg:flex-row bg-[#2B2B5F0D] shadow-custom p-6 lg:p-12 gap-8 lg:gap-0 relative z-20">
                    <MakeAClaimContactInfo title="Support, answer and help, get in touch" />

                    <div class="w-full lg:w-[475px]">
                        <MakeAClaimContactForm />
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
</script>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>