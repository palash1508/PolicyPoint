<template>
    <div class="flex flex-col items-center justify-between h-full md:mb-12 mb-6">
        <div
            class="mx-auto text-sm font-medium md:text-xl md:font-semibold lg:text-3xl lg:font-semibold xl:text-4xl xl:font-bold md:mb-12 mb-6">
            <span class="text-[#2B2B5F]">Discover Excellence: Your Ultimate Insurance Destination</span>
        </div>

        <div class="md:mb-12 mb-6 ">
            <SharedInsuranceCard :cards="cards" />
        </div>

        <div class="w-full">
            <HomePageSatisfiedCustomerInfo />
        </div>


        <!-- Discover Image -->
        <div class="relative w-full flex ">
            <img src="/assets/images/landingPage/Discover_Cover_Image.png" alt="" class="w-full h-full object-cover">
            <div class="absolute  w-full">
                <div class="flex mx-6 lg:mx-10 xl:mx-20 xl:my-14 justify-between">
                    <div class="w-full flex flex-col text-[#FFFFFF] py-2 lg:py-3 xl:py-8 lg:w-[780px]">
                        <div class="xl:py-20 lg:py-10">
                            <div>
                                <span class=" md:text-3xl lg:text-[55px] font-bold">Discover Your Ideal Coverage:</span>
                            </div>
                            <div class="md:mt-2 lg:mt-5">
                                <span class="leading-relaxed text-sm md:text-lg lg:text-[40px] font-bold">Tailored Insurance Plans for Every <br class="hidden xl:block"> Individual</span>
                            </div>
                            <div class="mt-2 lg:mt-5">
                                <p class="text-xs md:text-base lg:text-[22px]">"Navigate Your Way to Peace of Mind: Explore our comprehensive range of <br>  insurance plans meticulously tailored to suit every individual's unique needs. <br> Our user-friendly platform empowers you to compare and contrast various <br> insurance options, ensuring you find the perfect coverage that aligns perfectly <br> with your lifestyle, budget, and future aspirations.</p>
                            </div>
                        </div>
                        <div class="text-end ">
                            <span class="text-sm md:text-2xl font-normal">-Policy Point</span>
                        </div>
                        
                    </div>
                    <div class="hidden lg:flex place-items-start ">
                        <img src="/assets/images/landingPage/Discover_Avatars_Image.png" alt="" class="">
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 md:-mt-40 lg:-mt-20 xl:-mt-60 md:z-20">
            <HomePageGetQuoteComponent />
        </div>






    </div>
</template>

<script setup>
const cards = [
    {
        name: 'LifeInsurance',
        text: 'Life Insurance',
        imgLink: 'HomePageLifeInsurance.png',
        iconLink: 'HomePageLifeInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'HealthInsurance',
        text: 'Health Insurance',
        imgLink: 'HomePageHealthInsurance.png',
        iconLink: 'HomePageHealthInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'CarInsurance',
        text: 'Car Insurance',
        imgLink: 'HomePageCarInsurance.png',
        iconLink: 'HomePageCarInsuranceIcon.png',
        to: '/insurance/Car'
    },
    {
        name: 'BikeInsurance',
        text: 'Bike Insurance',
        imgLink: 'HomePageBikeInsurance.png',
        iconLink: 'HomePageBikeInsuranceIcon.png',
        to: '/insurance/Bike'
    },
];

</script>

<style scoped></style>