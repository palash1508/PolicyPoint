<template>
    <div class="w-full bg-[#EEEEEE33] pb-20">
        <div class="max-w-4xl mx-auto py-8 space-y-6">
            <!-- Header -->
            <h1 class="text-4xl font-semibold text-center text-[#2B2B5F]">
                For tailored Bike insurance plans, share your details today!
            </h1>
            <h2 class="text-xl font-semibold text-center text-[#000000]">
                Renew Your Bike Insurance in Just 2 Minutes!
            </h2>

            <!-- Form -->
            <div class=" p-6 max-w-lg mx-auto">
                <form >
                    <div class="mb-4">
                        <label for="bikeNumber" class="block text-lg font-medium text-[#000000CC]">Bike Number</label>
                        <input id="bikeNumber" v-model="form.bikeNumber" type="text"
                            placeholder="Bike Number (DL-01-AB-1234)"
                            class="w-full mt-1 px-3 py-2 border border-[#0000004D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B5F]"
                            required />
                    </div>
                    <div class="mb-4">
                        <label for="fullName" class="block text-lg font-medium text-[#000000CC]">Full Name</label>
                        <input id="fullName" v-model="form.fullName" type="text" placeholder="Full Name"
                            class="w-full mt-1 px-3 py-2 border border-[#0000004D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B5F]"
                            required />
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="block text-lg font-medium text-[#000000CC]">Phone Number</label>
                        <input id="phone" v-model="form.phone" type="tel" placeholder="9999999999"
                            class="w-full mt-1 px-3 py-2 border border-[#0000004D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B5F]"
                            required />
                    </div>
                    
                    <button 
                        class="w-full bg-[#2B2B5F] text-white py-2 rounded-lg hover:bg-[#202054] transition">
                        <NuxtLink to="/insurance/Bike/plans"
                            class="w-full bg-[#2B2B5F] text-white py-2 rounded-lg hover:bg-[#202054] transition">
                            View Prices
                        </NuxtLink>
                    </button>
                </form>
                <div class="text-center">
                    <button class="text-center mt-2" @click="newBikeFormDialog = true"> 
                        <span class="text-[#000000] font-medium text-[15px]">Brand New Bike ? <button
                                class="text-[#3C8AFF]">Click Here</button> </span>
                    </button>

                </div>
            </div>
        </div>

        <Dialog v-model:visible="newBikeFormDialog" modal :closable="false" :close-icon="false"
            pt:root:class="!border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
            <div class="bg-[#FFFFFF] border border-[#2B2B5F] rounded-lg">
                <InsuranceBikeNewBikeEntry @closeDialog="newBikeFormDialog = false"/>
            </div>
        </Dialog>

        
    </div>

    <InsuranceCarFormEnd />
</template>

<script setup>
import Dialog from 'primevue/dialog';

// Form data
const form = ref({
    bikeNumber: '',
    fullName: '',
    phone: '',
});

// Dialog state
const newBikeFormDialog = ref(false);


</script>

