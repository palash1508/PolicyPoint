<template>
    <div class="rounded-b-lg shadow-md bg-white border border-[#99999980]">
        <div class="px-6 mb-8">
            <h2 class="text-3xl font-semibold text-[#2B2B5F] mt-4 mb-2">Medical history</h2>

            <div class="mb-6">
                <p class="text-[#000000] text-xl font-semibold mb-1">Does any of the traveller(s) have pre-existing
                    medical conditions?</p>
                <p class="text-gray-600 text-lg font-medium mb-2">Select YES if any of the traveller(s) have health
                    issues for which
                    they need to take regular medication as part of the long-term treatment.</p>

                <div class="flex gap-4">
                    <div class="flex items-center gap-2 px-16 py-3 border rounded-lg cursor-pointer "
                        :class="{ 'border-[#2B2B5F] bg-blue-50 font-semibold': hasMedicalConditions === true }"
                        @click="hasMedicalConditions = true">
                        <div class="w-4 h-4 rounded-full border-2 border-[#2B2B5F] flex items-center justify-center">
                            <div v-if="hasMedicalConditions === true"
                                :class="{ 'bg-[#2B2B5F]': hasMedicalConditions === true }" class="w-2 h-2 rounded-full">
                            </div>
                        </div>
                        <span>Yes</span>
                    </div>

                    <div class="flex items-center gap-2 px-16 py-3 border rounded-lg cursor-pointer"
                        :class="{ 'border-[#2B2B5F] bg-blue-50 font-semibold': hasMedicalConditions === false }"
                        @click="hasMedicalConditions = false">
                        <div class="w-4 h-4 rounded-full border-2 border-[#2B2B5F] flex items-center justify-center">
                            <div v-if="hasMedicalConditions === false"
                                :class="{ 'bg-[#2B2B5F]': hasMedicalConditions === false }"
                                class="w-2 h-2 rounded-full"></div>
                        </div>
                        <span>No</span>
                    </div>
                </div>
            </div>

            <div v-if="hasMedicalConditions === true" class="space-y-6">
                <div class="mb-6 bg-[#f7f9fd] p-4 rounded-lg">
                    <h3 class="text-lg text-[#1a1b2c] mb-4">Have any of the traveller suffered or suffering from any of
                        the following diseases?</h3>

                    <div class="grid md:grid-cols-2 gap-4 mb-6">
                        <div class="space-y-2">
                            <p class="text-gray-700">• Cancer /Leukemia / MalignantTumor</p>
                            <p class="text-gray-700">• Thalasemia</p>
                            <p class="text-gray-700">• Cardiac ailments</p>
                            <p class="text-gray-700">• Liver Disease</p>
                            <p class="text-gray-700">• Kidney Ailment</p>
                        </div>
                        <div class="space-y-2">
                            <p class="text-gray-700">• Chronic Obstructive Pulmonary Disease (COPD) / progressive lung
                                diseases</p>
                            <p class="text-gray-700">• Insulin Dependent Diabetes</p>
                            <p class="text-gray-700">• HIV / AIDS</p>
                            <p class="text-gray-700">• Neurological Disorder / Stroke / Paralysis</p>
                        </div>
                    </div>

                    <div class="flex gap-4">
                        <button class="px-8 py-2 border rounded-lg"
                            :class="{ 'bg-blue-50 border-[#2B2B5F]  font-semibold': hasSpecificConditions === true }"
                            @click="hasSpecificConditions = true">
                            Yes
                        </button>
                        <button class="px-8 py-2 border rounded-lg"
                            :class="{ 'bg-blue-50 border-[#2B2B5F]  font-semibold': hasSpecificConditions === false }"
                            @click="hasSpecificConditions = false">
                            No
                        </button>
                    </div>
                    <div v-if="hasSpecificConditions === false" class="mt-3">
                        <p class="text-[#1a1b2c] mb-4">Please mention the pre-existing medical condition of the
                            traveller(s)
                            (Note: Any expenses related to pre existing illness / disability / diseases and its related
                            complications/consequences are payable only in case of life threatening condition except for
                            the
                            diseases mentioned above)</p>

                        <div class="space-y-3">
                            <div v-for="traveller in travellers" :key="traveller.name" class="flex items-center gap-2">
                                <input type="checkbox" :id="traveller.name" v-model="selectedTravellers"
                                    :value="traveller.name"
                                    class="w-4 h-4 rounded border-gray-300 text-[#2B2B5F] focus:ring-[#2B2B5F]">
                                <label :for="traveller.name" class="text-gray-700">
                                    {{ traveller.name }} ({{ traveller.age }} years)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="text-center py-6">
            <button @click="handleContinue"
                class="bg-[#2B2B5F] text-white px-12 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Continue
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    travellers: {
        type: Array,
        required: true,
        // Expected format: [{ name: string, age: number }]
    }
})

const emit = defineEmits(['continue', 'next'])

const hasMedicalConditions = ref(null)
const hasSpecificConditions = ref(null)
const selectedTravellers = ref([])

const handleContinue = () => {
    const formData = {
        hasMedicalConditions: hasMedicalConditions.value,
        hasSpecificConditions: hasSpecificConditions.value,
        selectedTravellers: selectedTravellers.value
    }
    emit('continue', formData)
    emit('next')
}

watch(hasMedicalConditions, (newValue) => {
    if (newValue === false) {
        hasSpecificConditions.value = null
        selectedTravellers.value = []
    }
})

watch(hasSpecificConditions, (newValue) => {
    if (newValue === true) {
        selectedTravellers.value = []
    }
})
</script>