<template>
    <div class="relative w-full flex ">
        <img src="/assets/images/Our_Experts_BG.png" alt="" class="w-full h-full object-cover">
        <div class="absolute  w-full">
            <div class="flex md:flex-row flex-col justify-between px-10 xl:px-40 mt-1 md:mt-8 xl:mt-16">
                <div class="w-fit flex flex-col text-[#FFFFFF] ">
                    <div>
                        <span class="text-sm md:text-3xl lg:text-[40px] lg:leading-[55px] font-bold">Meet Our <br
                                class="hidden md:block"> Experts</span>
                    </div>
                    <div class="md:mt-2">
                        <span class="text-xs md:text-xl font-bold">Our Team</span>
                    </div>
                    <div class="">
                    </div>

                </div>
                <div class="flex place-items-start w-fit justify-between gap-4 xl:gap-8 mt-2 md:mt-0">
                    <div class="text-[#FFFFFF] font-bold text-xs md:text-xl  md:leading-5">
                        Join the mission to Protect And <br class="hidden md:block"> bring a better life
                    </div>
                    <button
                        class="bg-[#01C4DE] text-[#FFFFFF] text-xs md:text-base font-bold flex items-center justify-center px-14 md:px-8 py-1 md:py-2 rounded-lg">Join
                        Our Team</button>


                </div>
            </div>
        </div>
    </div>

    <div class="w-full xl:-mt-[227px] bg-[#EEEEEE4D]">
        <AboutUsTeamCardCarousel />

    </div>
    <div class="w-full flex flex-col bg-[#EEEEEE4D] px-8 xl:px-48">
        <span class="text-[#2B2B5F] text-2xl lg:text-[40px] font-bold lg:leading-[50px]">We aim for the best for <br>
            our customer</span>
        <span class="text-[#999999] text-xs font-semibold mt-3 px-1">WHY CHOOSE US</span>
    </div>

    <AboutUsAimCardCarousel />

    <div class="relative py-5 md:py-20 xl:py-32 w-full ">
        <div class="absolute top-0 left-0 hidden md:block">
            <img src="/assets/favicon/Top_Left_Style3.png" alt="">
        </div>
        <div class="absolute bottom-0 right-0 hidden md:block">
            <img src="/assets/favicon/Bottom_Right_Style3.png" alt="">
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center px-10 xl:px-32">
            <div class="">
                <div class="flex flex-col">

                    <span class="text-[#999999] font-bold text-base">About Company -</span>
                    <span class="text-[#2B2B5F] text-xl lg:text-3xl font-bold">What they’re talking <br> about us
                        ?</span>
                    <span class="w-72 text-xs font-bold text-[#999999] mt-1">Lorem ipsum dolor sit amet consectetur.
                        Scelerisque faucibus nunc condimentum euismod. Cursus in risus pellentesque scelerisque sed sed
                        nec pulvinar suspendisse. Elementum mattis mi lectus et tristique. Porta vitae fames in sed
                        enim.</span>
                </div>
            </div>
            <div>
                <img src="/assets/images/landingPage/Feedback_PNG.png" alt="">
            </div>
        </div>
    </div>

    <div class="w-full">
        <FaqFrequentlyAskQuestions />
    </div>

</template>

<script setup>
</script>

<style scoped></style>