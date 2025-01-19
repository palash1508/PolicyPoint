<template>
    <div class="w-full bg-[#EEEEEE33] pb-20">
        <div class="max-w-4xl mx-auto py-8 space-y-6">
            <!-- Header -->
            <h1 class="text-4xl font-semibold text-center text-[#2B2B5F]">
                Explore the world Worry free!
            </h1>
            <div class=" p-6 max-w-lg mx-auto">
                <div class="mb-4">
                    <FinalFormField type="text" label="Where are you travelling?" placeholder="Search country" />
                    <!-- <div class="mt-2 flex flex-wrap gap-2">
                        <span v-for="country in popularCountries" :key="country"
                            class="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300"
                            @click="selectCountry(country)">
                            {{ country }}
                        </span>
                    </div> -->
                </div>

                <div class="flex gap-4 items-center justify-between">
                    <div class="w-1/2 ">
                        <FinalFormField type="date" label="Start Date" placeholder="" />
                    </div>
                    <div class="w-1/2 ">
                        <FinalFormField type="date" label="End Date" placeholder="" />
                    </div>


                </div>

                <div class="flex justify-between items-center mt-4 p-4 border rounded-lg">
                    <span class="text-lg font-semibold">{{ totalTravellers }} Traveller(s)</span>
                    <button @click="openTravellerModal" class=" text-[#2B2B5F] text-lg font-semibold">
                        + Add travellers
                    </button>
                </div>

                <div class="flex">
                    <NuxtLink to="/insurance/Travel/plans" class="w-full py-3 bg-[#2B2B5F] text-white font-medium mt-10 rounded-lg text-center">
                        View plans
                    </NuxtLink>
                </div>

                <!-- Traveller Modal -->
                <Dialog v-model:visible="showTravellerModal" modal :closable="false" :close-icon="false"
                    pt:root:class="!border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
                    <div class="bg-[#FFFFFF] border border-[#2B2B5F] rounded-lg">
                        <InsuranceTravelAddModal :travellers="travellers"
                        :maxTravellers="maxTravellers" @close="showTravellerModal = false"
                        @updateTravellers="updateTravellers" />
                    </div>

                </Dialog>
                
            </div>

        </div>


    </div>

    <InsuranceTravelFormEnd />
</template>

<script setup>
import Dialog from 'primevue/dialog';

const searchCountry = ref('');
const startDate = ref('');
const endDate = ref('');
const totalTravellers = ref(0);
const showTravellerModal = ref(false);
const travellers = ref([]);
const maxTravellers = ref(6);

const popularCountries = [
    'Schengen',
    'USA',
    'Germany',
    'United Arab Emirates',
    'Thailand',
    'France',
];

function selectCountry(country) {
    console.log(`Selected country: ${country}`);
}

function openTravellerModal() {
    showTravellerModal.value = true;
}

function updateTravellers(updatedTravellers) {
    travellers.value = updatedTravellers;
    totalTravellers.value = updatedTravellers.length;
}

function viewPlans() {
    console.log('Viewing plans with:', {
        searchCountry: searchCountry.value,
        startDate: startDate.value,
        endDate: endDate.value,
        travellers: travellers.value,
    });
}

</script>
