<template>
    <div>
        <!-- Header Section -->
        <header class="">
            <div class="h-16 md:h-9 flex flex-wrap items-center justify-between bg-[#01C4DE] text-white ">
                <div class="flex items-center justify-center pl-2 md:pl-5 ">
                    <a href="#" class="text-xs"><i class="fas fa-envelope"></i> xyz@policypoint.com</a>
                </div>
                <div class="flex items-center justify-between md:justify-center">
                    <div class="px-4 flex items-center justify-center space-x-4 text-xs">
                        <NuxtLink v-for="link in topNavigationLinks" :to="link.route" class="focus:outline-none">{{ link.name }}</NuxtLink>
                        <button>
                            <img src="/assets/favicon/profile_icon.png" alt="Policy Point" class="h-8 w-auto" />
                        </button>
                    </div>
                    <div class="md:h-9 w-52 flex items-center justify-center space-x-6 md:space-x-4 md:bg-[#0000001A]">
                        <a href="#" class="hover:opacity-75"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="hover:opacity-75"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="hover:opacity-75"><i class="fab fa-whatsapp"></i></a>
                        <a href="#" class="hover:opacity-75"><i class="fa-solid fa-phone"></i></a>
                    </div>
                </div>
            </div>
            <div class="h-20 flex flex-wrap items-center md:justify-between ">
                <button @click="toggleDrawer" class="lg:hidden focus:outline-none text-black border-2 p-3 rounded-md ml-1">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="h-20 hidden lg:flex items-center justify-center pl-2 md:pl-5 overflow-hidden">
                    <img src="/assets/favicon/header_logo1.png" alt="Policy Point" class="h-24 w-24" />
                    <div class="px-4 flex items-center justify-center space-x-4 text-xs">
                        <NuxtLink
                            v-for="link in navigationLinks"
                            :key="link.name"
                            :to="link.route"
                            :class="[
                                'focus:outline-none flex items-center text-base font-medium',
                                isActiveRoute(link.route) ? 'text-[#2B2B5F]' : 'text-[#808080CC]'
                            ]"
                            >
                            {{ link.name }}
                            <svg
                                class="mt-1 ml-0.5"
                                width="7"
                                height="6"
                                viewBox="0 0 7 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M3.49953 5.38749L0.847656 1.94087L1.73203 0.791992L3.49953 3.08974L5.26703 0.791992L6.15141 1.94087L3.49953 5.38749Z"
                                :fill="isActiveRoute(link.route) ? '#2B2B5F' : '#808080CC'"
                                />
                            </svg>
                        </NuxtLink>
                        
                    </div>
                </div>
                <div class="flex items-center justify-between md:justify-center">
                    <div class="px-2 md:px-4 flex items-center justify-center space-x-2 md:space-x-4 ">
                        <button class="focus:outline-none text-[#2B2B5F]"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <button class="w-[100px] h-[40px] bg-[#2B2B5F] text-[#FFFFFF] text-xs rounded-lg">Get A Quote</button>
                        <button class="w-[100px] h-[40px] flex items-center justify-center bg-[#01C4DE] text-[#FFFFFF] text-xs rounded-lg">Login<svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3327 7.50033C13.3327 8.38438 12.9815 9.23223 12.3564 9.85735C11.7313 10.4825 10.8834 10.8337 9.99935 10.8337C9.11529 10.8337 8.26745 10.4825 7.64233 9.85735C7.0172 9.23223 6.66602 8.38438 6.66602 7.50033C6.66602 6.61627 7.0172 5.76842 7.64233 5.1433C8.26745 4.51818 9.11529 4.16699 9.99935 4.16699C10.8834 4.16699 11.7313 4.51818 12.3564 5.1433C12.9815 5.76842 13.3327 6.61627 13.3327 7.50033ZM11.666 7.50033C11.666 7.94235 11.4904 8.36628 11.1779 8.67884C10.8653 8.9914 10.4414 9.16699 9.99935 9.16699C9.55732 9.16699 9.1334 8.9914 8.82084 8.67884C8.50828 8.36628 8.33268 7.94235 8.33268 7.50033C8.33268 7.0583 8.50828 6.63437 8.82084 6.32181C9.1334 6.00925 9.55732 5.83366 9.99935 5.83366C10.4414 5.83366 10.8653 6.00925 11.1779 6.32181C11.4904 6.63437 11.666 7.0583 11.666 7.50033Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99967 0.833496C4.93717 0.833496 0.833008 4.93766 0.833008 10.0002C0.833008 15.0627 4.93717 19.1668 9.99967 19.1668C15.0622 19.1668 19.1663 15.0627 19.1663 10.0002C19.1663 4.93766 15.0622 0.833496 9.99967 0.833496ZM2.49967 10.0002C2.49967 11.7418 3.09384 13.3452 4.08967 14.6185C4.78903 13.7001 5.69126 12.9558 6.72587 12.4438C7.76048 11.9317 8.89946 11.6658 10.0538 11.6668C11.1933 11.6657 12.3179 11.9248 13.3421 12.4241C14.3663 12.9235 15.263 13.6501 15.9638 14.5485C16.6859 13.6015 17.172 12.4962 17.3821 11.324C17.5921 10.1518 17.52 8.94644 17.1718 7.80765C16.8235 6.66886 16.209 5.62937 15.3792 4.77519C14.5495 3.92102 13.5282 3.27671 12.4 2.89559C11.2718 2.51446 10.069 2.40747 8.89122 2.58347C7.71344 2.75947 6.5945 3.21341 5.62698 3.90771C4.65946 4.60201 3.87118 5.51672 3.32737 6.57616C2.78355 7.6356 2.49983 8.8093 2.49967 10.0002ZM9.99967 17.5002C8.27797 17.5027 6.60823 16.9105 5.27301 15.8235C5.81045 15.0541 6.52579 14.4259 7.35817 13.9924C8.19055 13.5589 9.11533 13.3328 10.0538 13.3335C10.9806 13.3328 11.8942 13.5531 12.7188 13.9763C13.5433 14.3996 14.255 15.0134 14.7947 15.7668C13.4491 16.8891 11.7518 17.5026 9.99967 17.5002Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div class="hidden h-20 md:w-52 md:flex items-center justify-center space-x-2 md:space-x-3 md:bg-[#EEEEEECC] text-[#000000]">
                        <a href="#" class="hover:opacity-75"><i class="fa-solid fa-phone-volume text-lg "></i></a>
                        <div class="flex flex-col">
                            <span class="text-[#4A4A4A] text-xs md:text-sm font-medium">Call Expert</span>
                            <span class="text-xs md:text-sm font-semibold">+91 8655691415</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
        <!-- Mobile Navigation Drawer -->
        <transition name="slide">
            <div
                v-if="isDrawerOpen"
                class="fixed inset-0 z-50 bg-black bg-opacity-50"
                @click.self="toggleDrawer"
            >
                <div
                    class="bg-white w-64 h-full shadow-md"
                    @click.stop
                >
                    <div class="border-b">
                        <img src="/assets/favicon/header_logo1.png" alt="Policy Point" class="h-24 w-24" />
                    </div>
                    <nav class="p-4 space-y-4">
                        <NuxtLink
                            v-for="link in navigationLinks"
                            :key="link.name"
                            :to="link.route"
                            @click="toggleDrawer"
                            class="block text-base font-medium text-[#808080CC] hover:text-[#01C4DE] transition"
                        >
                            {{ link.name }}
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
const route = useRoute();

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};

const topNavigationLinks = [
  { name: 'Make A Claim', route: '/makeclaim' },
  { name: 'FAQ', route: '/faq' },
  { name: 'About', route: '/about' },
];

const navigationLinks = [
  { name: 'Home', route: '/' },
  { name: 'Insurance', route: '/insurance' },
  { name: 'Blogs', route: '/blogs' },
  { name: 'Team', route: '/team' },
  { name: 'Contact Us', route: '/contact' },
];

const isActiveRoute = (routePath) => {
  return route.path === routePath;
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter {
    transform: translateX(-100%);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>