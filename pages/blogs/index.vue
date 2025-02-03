<template>
    <div>
        <SharedHeroSection :title="pageTitle" :bgImage="bgImage" :breadcrumb="breadcrumb" />


        <main class=" mx-auto flex flex-col lg:flex-row gap-8 mt-2 px-6">
            <!-- Sidebar Filters -->
            <aside class="w-full lg:w-[70%] px-6 border-r-2">
                <div class="lg:px-20 xl:px-28 mt-10 md:mt-36 lg:mt-14">
                    <div class="relative">
                        <img src="/assets/images/Blog_Heading.png" alt="" class="bg-cover w-full h-auto" />
                    </div>

                    <div class=" mx-auto md:flex justify-center -mt-6 md:-mt-14 relative z-10 px-6  md:px-10">
                        <div class="flex bg-white flex-col p-4 gap-3 md:p-8 md:gap-6 shadow-xl">
                            <div>
                                <h1 class="text-xl font-medium text-[#2B2B5F]">How to Lower Your Insurance Premiums Without Sacrificing Coverage</h1>
                            </div>
                            
                            <div>
                                <h1 class="text-[10px] font-bold text-[#999999] md:leading-4">Lorem ipsum dolor sit amet consectetur. Scelerisque faucibus nunc condimentum euismod. Cursus in risus pellentesque scelerisque sed sed nec pulvinar suspendisse. Elementum mattis mi lectus et tristique. Porta vitae fames in sed enim.</h1>
                            </div>
                            <button class="text-xs font-bold text-[#2B2B5F] text-left">Read more</button>
                        </div>


                    </div>
                </div>
                
                <div class="lg:px-20 xl:px-28 mt-10  lg:mt-14">
                    <div class="flex flex-col md:flex-row md:gap-4 py-8 border-b-2" v-for="n in 5">
                        <div class="md:w-1/2">
                            <img src="/assets/images/Blog_1.png" alt="" class="bg-cover w-full h-auto" />
                        </div>
                        <div class="md:w-1/2 flex flex-col md:gap-3 gap-1">
                            <div class="bg-[#2B2B5F] md:w-16 md:h-16 flex flex-col items-center justify-center text-white md:rounded-tl-3xl">
                                <div class="flex flex-row-reverse py-1 md:py-0 gap-1 md:gap-0 md:flex-col">
                                    <span>Nov</span>
                                    <span>02</span>
                                </div>
                            </div>
                            <div>
                                <span class="text-xl font-bold text-[#2B2B5F]">Understanding the Basics of Insurance: A Beginner's Guide</span>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-[#999999]">In an uncertain world, the value of life insurance cannot be overstated. Beyond being a financial tool, it serves as a safeguard for your loved ones' futur</span>
                            </div>
                            <button class="text-xs font-bold text-[#2B2B5F] text-left">Read more</button>
                        </div>
                    </div>

                    <div class="flex gap-4 mt-10 font-bold text-[#2B2B5F80] text-base">
                        <span class="text-[#2B2B5F]">1</span>
                        <span>2</span>
                        <span>Next</span>
                        <span>Last</span>
                    </div>
                </div>

            </aside>

            <!-- Health Plans -->
            <section class="flex-1 px-2 lg:px-0 lg:pr-3 pb-3 mt-10 md:mt-36 lg:mt-14">
                <div class="px-3">
                    <div><span class="text-[#2B2B5F] font-semibold text-lg">Search</span></div>
                    <div class="border border-[#999999] rounded-lg">
                        <div class="p-3 text-[#999999] font-medium text-[13px]">Search article</div>
                    </div>
                </div>

            </section>
        </main>

    </div>
</template>

<script setup>
const bgImage = 'Blogs_BG_Image.jpg'
const pageTitle = 'Blogs'
const breadcrumb = 'Blogs'

</script>