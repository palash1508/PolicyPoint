<template>
    <div class="">
        <!-- Render completed travellers -->
        <div v-for="(data, index) in travellersData" :key="index">
            <div v-if="data.isCompleted && index !== currentTravellerIndex"
                class="bg-blue-50 p-4 rounded-b-lg mb-4 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="text-green-500">✓</div>
                    <span class="font-medium text-lg">{{ data.fullName }} ({{ data.age }} yrs)</span>
                </div>
                <button class="text-[#2B2B5F] hover:text-blue-800" @click="handleEdit(index)">
                    Edit
                </button>
            </div>
        </div>

        <!-- Current traveller form -->
        <div class="mb-6">
            <div class="bg-[#2B2B5F] p-6 ">
                <span class=" text-white font-semibold text-xl">
                    Traveller {{ currentTravellerIndex + 1 }} ({{ travellersAge[currentTravellerIndex] }} yrs)
                </span>
            </div>

            <div class="p-6 py-6 border rounded-b-lg shadow-md bg-white border-[#99999980]">
                <div class="grid xl:grid-cols-2 gap-8 w-full items-center">
                    <FinalFormField v-for="(field, index) in fields" :key="index" :type="field.type"
                        :label="field.label" :placeholder="field.placeholder" :options="field.options"
                        :modelValue="travellersData[currentTravellerIndex][field.key]"
                        @update:modelValue="updateFieldValue(field.key, $event)" />
                </div>
                <div class="mt-5">
                    <span class="text-[#5e6c84] font-semibold text-xl">
                        Nominee Details
                    </span>
                </div>
                <div class="grid xl:grid-cols-2 gap-8 w-full items-center mt-2">
                    <FinalFormField v-for="(field, index) in nomineeFields" :key="index" :type="field.type"
                        :label="field.label" :placeholder="field.placeholder" :options="field.options"
                        :modelValue="travellersData[currentTravellerIndex][field.key]"
                        @update:modelValue="updateFieldValue(field.key, $event)" />
                </div>

                <div class="mt-6 text-center py-6">
                    <button class="bg-[#2B2B5F] font-semibold text-sm px-11 py-2 rounded-lg text-white"
                        @click="handleContinue">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const currentTravellerIndex = ref(0)
const travellersAge = ref([21, 24, 18])

const fields = reactive([
    {
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter Full Name',
        key: 'fullName'
    },
    {
        type: 'select',
        label: 'Gender',
        options: ['Male', 'Female'],
        key: 'gender'
    },
    {
        type: 'date',
        label: 'Enter Date of birth',
        placeholder: '',
        key: 'dateOfBirth'
    },
    {
        type: 'text',
        label: 'Nationality',
        placeholder: 'Indian',
        key: 'nationality'
    },
    {
        type: 'text',
        label: 'Enter passport number',
        placeholder: 'Enter passport number',
        key: 'passportNo'
    },
    {
        type: 'select',
        label: 'Select Visa type',
        options: ['Tourist/Visitor Visa', 'Short term Work Visa', 'Long term Work Visa'],
        key: 'visaType'
    },
    {
        type: 'text',
        label: 'Enter pan number',
        placeholder: 'Enter pan number',
        key: 'panNo'
    },
])

const nomineeFields = reactive([
    {
        type: 'text',
        label: 'Enter nominee full name',
        placeholder: 'Enter nominee full name',
        key: 'nomineeFullName'
    },
    {
        type: 'select',
        label: 'Select nominee relation',
        options: ['Spouse', 'Father', 'Mother', 'Daughter'],
        key: 'nomineeRel'
    },
])

const travellersData = reactive(
    travellersAge.value.map(age => ({
        age,
        isCompleted: false,
        fullName: '',
        gender: '',
        dateOfBirth: '',
        nationality: 'Indian',
        visaType: 'Tourist/Visitor Visa'
    }))
)

const isLastTraveller = computed(() => {
    return currentTravellerIndex.value === travellersAge.value.length - 1
})

const updateFieldValue = (key, value) => {
    travellersData[currentTravellerIndex.value][key] = value
}

const handleContinue = () => {
    travellersData[currentTravellerIndex.value].isCompleted = true

    if (isLastTraveller.value) {
        emit('update:travellers', travellersData)
        emit('next')
    } else {
        currentTravellerIndex.value++
    }
}

const handleEdit = (index) => {
    currentTravellerIndex.value = index
}

const emit = defineEmits(['update:travellers', 'next'])

// watch(() => travellersData, (newValue) => {
//     emit('update:travellers', newValue)
// }, { deep: true })
</script>