<template>
    <div class="">
        <div class="">
            <header class="p-4 flex items-center justify-between">
                <h2 class="text-[#000000] text-lg md:text-2xl font-semibold">How many people are travelling?</h2>
                <button class="close-btn text-2xl" @click="$emit('close')">&times;</button>
            </header>

            <div class="flex gap-3 px-4 mt-2">
                <div class="flex items-center justify-center px-5 py-3 border rounded-xl cursor-pointer text-lg"
                    v-for="n in maxTravellers" :key="n" @click="updateTravellerCount(n)"
                    :class="selectedTravellerCount === n ? 'border-[#2B2B5F] border-2 font-semibold shadow-lg text-[#2B2B5F]' : 'border-gray-400'">
                    {{ n }}
                </div>
                <!-- <div class="flex items-center justify-center px-5 py-3 border border-gray-400 rounded-xl"
                    @click="toggleCustomTravellerCount" :class="{ active: showCustomCount }">
                    6+
                </div> -->
            </div>

            <!-- <div v-if="showCustomCount" class="custom-traveller-count">
                <button @click="customTravellerCount--" :disabled="customTravellerCount <= 6">-</button>
                <span>{{ customTravellerCount }}</span>
                <button @click="customTravellerCount++">+</button>
            </div> -->

            <div class="px-4 mt-4 grid md:grid-cols-2 gap-x-6 gap-y-4"
                v-if="selectedTravellerCount || customTravellerCount > 0">
                <FinalFormField v-for="(field, index) in actualTravellerCount" :key="index" type="select"
                    :label="`Select age of Traveller ${index + 1}`" :options="ageRange" />
            </div>

            <div class="px-4 mt-4">
                <p class="font-semibold text-lg">Does any of the traveller(s) have any pre-existing medical condition
                    like BP, diabetes, etc.?</p>
                <div class="w-1/3 flex items-center justify-between px-2">
                    <div class="flex items-center justify-center gap-2 py-1">
                        <input type="radio" value="yes" v-model="hasMedicalCondition"
                            @change="toggleMedicalChecklist" />
                        <label for="yes">
                            Yes
                        </label>
                    </div>
                    <div class="flex items-center justify-center gap-2 py-1">
                        <input type="radio" value="no" v-model="hasMedicalCondition" @change="toggleMedicalChecklist" />
                        <label for="no">No</label>
                    </div>
                </div>
            </div>

            <div v-if="showMedicalChecklist" class="px-4 mt-4">
                <p class="font-semibold md:text-lg">Please select the travellers who have a pre-existing medical
                    condition</p>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-2">
                    <div v-for="(traveller, index) in travellers" :key="index"
                        class="border px-4 py-4 rounded-lg cursor-pointer text-lg"
                        :class="selectedMedicalConditionTravellers.includes(traveller.id) ? 'border-[#2B2B5F] text-[#2B2B5F] font-semibold' : 'border-gray-400'"
                        @click="toggleTravellerSelection(traveller.id)">
                        <label class="flex items-center">

                            Traveller {{ index + 1 }}
                        </label>
                    </div>
                </div>
            </div>

            <footer class="">
                <div class="justify-items-center py-6">
                    <button class="flex items-center justify-between rounded-lg py-2 px-9 bg-[#2B2B5F] text-white"
                        @click="submitTravellers">Done</button>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
    travellers: Array,
    maxTravellers: Number,
});

const emit = defineEmits(['close', 'updateTravellers']);

const ageRange = Array.from({ length: 100 }, (_, i) => i + 1);

const selectedTravellerCount = ref(0);
const customTravellerCount = ref(6);
const showCustomCount = ref(false);
const hasMedicalCondition = ref('no');
const showMedicalChecklist = ref(false);
const selectedMedicalConditionTravellers = ref([]);

const travellers = ref(
    Array.from({ length: props.maxTravellers }, (_, i) => ({
        id: i + 1,
        age: '',
        hasCondition: false,
    }))
);

const actualTravellerCount = computed(() => {
    return showCustomCount.value ? customTravellerCount.value : selectedTravellerCount.value;
});

function updateTravellerCount(count) {
    showCustomCount.value = false;
    selectedTravellerCount.value = count;
    travellers.value = Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        age: '',
        hasCondition: false,
    }));
}

function toggleCustomTravellerCount() {
    showCustomCount.value = !showCustomCount.value;
    selectedTravellerCount.value = 0;
}

function toggleTravellerSelection(travellerId) {
    const index = selectedMedicalConditionTravellers.value.indexOf(travellerId);
    if (index === -1) {
        selectedMedicalConditionTravellers.value.push(travellerId);
    } else {
        selectedMedicalConditionTravellers.value.splice(index, 1);
    }
}


function toggleMedicalChecklist() {
    showMedicalChecklist.value = hasMedicalCondition.value === 'yes';
}

function submitTravellers() {
    travellers.value.forEach((traveller) => {
        traveller.hasCondition = selectedMedicalConditionTravellers.value.includes(traveller.id);
    });
    emit('updateTravellers', travellers.value.slice(0, actualTravellerCount.value));
    emit('close');
}
</script>
