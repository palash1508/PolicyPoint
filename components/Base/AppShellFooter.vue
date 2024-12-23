<template>
    <div>
        <BaseAppShellReportTrackClaim />
        <BaseAppShellSubscribe />
        <!-- Footer Section -->
        <footer class="bg-[#0A184D] text-white py-8 border-2 border-[#000000]">
            <div class=" mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:px-16 xl:px-28 md:pt-14">
                <!-- Logo and Social Links -->
                <div class="">
                    <div class="flex items-center justify-center">
                        <img src="/assets/favicon/header_logo1.png" alt="Policy Point Logo"
                            class="md:h-[175px] md:w-[190px] w-24 h-24" />
                    </div>
                    <div class="flex items-center justify-center space-x-5 text-xl">
                        <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="hover:text-gray-400"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="hover:text-gray-400"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="hover:text-gray-400"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="">
                    <div class="w-fit border-b-2 mb-2">
                        <span class="text-lg font-semibold ">Quick Link</span>
                    </div>
                    <ul>
                        <li v-for="link in quickLinks" :key="link.name">
                            <a :href="link.to" class="hover:text-gray-400 text-xs font-normal">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="">
                    <div class="w-fit border-b-2 mb-2">
                        <span class="text-lg font-semibold mb-2">Services</span>
                    </div>
                    <ul>
                        <li v-for="service in services" :key="service.name">
                            <a :href="service.to" class="hover:text-gray-400 text-xs font-normal">{{ service.name }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Us -->
                <div class="">
                    <div class="w-fit border-b-2 mb-2">
                        <span class="text-lg font-semibold mb-2">Contact Us</span>
                    </div>
                    <ul class="space-y-2 text-xs font-normal">
                        <li>
                            <button> <i class="fas fa-envelope mr-2"></i> xyz.policypoint.com </button>
                        </li>
                        <li>
                            <button><i class="fas fa-phone mr-2"></i>9999999999</button>

                        </li>
                        <li>
                            <button><i class="fas fa-map-marker-alt mr-2"></i>Mumbai</button>

                        </li>
                    </ul>
                </div>
                <div class="hidden lg:block">
                    <div class="flex items-center justify-center">
                        <img src="/assets/favicon/loan_logo.png" alt="Policy Point Logo" class="md:h-[200px] md:w-[200px] w-28 h-28 mt-5" />
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center mt-8">
                <div class="w-fit md:px-36 pt-4 text-xs lg:text-sm border-t-2 border-[#FFFFFF80]">
                    <span class="md:font-semibold font-normal">
                        &copy; All Copyright 2024 Policypoint Insurance Broking Private Limited. Design And Maintained
                        by
                        Policypoint Technology Pvt Ltd
                    </span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const quickLinks = [
    { name: 'Home', to: '#' },
    { name: 'About Us', to: '#' },
    { name: 'Terms Of Use', to: '#' },
    { name: 'Privacy Policy', to: '#' },
    { name: 'Blog', to: '#' },
    { name: 'Help', to: '#' },
];

const services = [
    { name: 'Life Insurance', to: '#' },
    { name: 'Health Insurance', to: '#' },
    { name: 'Car Insurance', to: '#' },
    { name: 'Two Wheeler Insurance', to: '#' },
];
</script>