<template>
    <div class="w-full bg-[#EEEEEE33] pb-20">
        <div v-if="!memberSelected" class="max-w-4xl mx-auto py-8 space-y-6">
            <!-- Header -->
            <h1 class="text-4xl font-semibold text-center text-[#2B2B5F]">
                Health insurance made simple. Find the plan that's right for you.
            </h1>
            <h1 class="text-xl font-semibold text-center text-[#000000]">
                Select members you want to insure
            </h1>

            <!-- Gender Selection -->
            <div class="flex flex-col md:flex-row md:items-start space-x-12 px-1">
                <div class="flex justify-start mt-2">
                    <button class="px-6 py-2 rounded-l-lg font-semibold text-sm"
                        :class="gender === 'Male' ? 'bg-[#2B2B5F] text-[#FFFFFF]' : 'text-[#000000] border-[#2B2B5F] border'"
                        @click="setGender('Male')">
                        Male
                    </button>
                    <button class="px-6 py-2 rounded-r-lg font-medium"
                        :class="gender === 'Female' ? 'bg-[#2B2B5F] text-[#FFFFFF]' : 'text-[#000000] border-[#2B2B5F] border'"
                        @click="setGender('Female')">
                        Female
                    </button>
                </div>

                <!-- Member Selection -->
                <div>
                    <div class="grid grid-cols-2 gap-6 justify-items-center">
                        <SharedMemberCard v-for="(member, index) in members" :key="index" :label="member.label"
                            :withCounter="member.isCount" :defaultCount="member.count"
                            :totalChildrenCount="totalChildrenCount"
                            @update:count="(newCount) => (member.count = newCount)"
                            @select="(isSelected) => (member.selected = isSelected)"
                            @total-children-change="updateTotalChildrenCount" />
                    </div>

                    <!-- More Members -->
                    <div class="text-center mt-4">
                        <button class="text-[#000000] font-semibold text-xl" @click="toggleMoreMembers">
                            More Members {{ showMoreMembers ? '▲' : '▼' }}
                        </button>
                        <div v-if="showMoreMembers" class="grid grid-cols-2 gap-6 mt-4 justify-items-center">
                            <SharedMemberCard v-for="(member, index) in moreMembers" :key="index" :label="member.label"
                                :withCounter="member.isCount" :defaultCount="member.count"
                                @update:count="(newCount) => (member.count = newCount)"
                                @select="(isSelected) => (member.selected = isSelected)" />
                        </div>
                    </div>

                    <!-- Continue Button -->
                    <div class="text-center mt-10">
                        <button @click="memberSelected = true"
                            class="px-20 py-3 bg-[#2B2B5F] text-[#FFFFFF] rounded-lg hover:bg-blue-700 text-2xl font-bold">
                            Continue
                        </button>
                        <p class="text-sm text-gray-500 mt-3 font-medium">
                            By clicking on "Continue," you agree to our
                            <a href="#" class="text-blue-600 underline">Privacy Policy</a>,
                            <a href="#" class="text-blue-600 underline">Terms of Use</a> &
                            <a href="#" class="text-blue-600 underline">Disclaimer</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Next Form Section -->
        <div v-if="memberSelected && !ageFilled" class="min-h-screen">
            <header class="px-4 py-2 shadow">
                <button @click="goBack" class="flex items-center space-x-2 text-[#2B2B5F]">
                    <i class="fas fa-arrow-left"></i>
                    <span>Back</span>
                </button>
            </header>

            <main class="max-w-lg mx-auto mt-8 p-6">
                <h2 class="text-[40px] leading-[45px] font-semibold text-center text-[#2B2B5F] mb-6">
                    Provide Your Details
                </h2>

                <!-- Input Fields -->
                <div class="space-y-4">
                    <div v-for="(field, index) in personalDetails" :key="index" class="space-y-2">
                        <label :for="field.model" class="text-[#000000] font-medium text-lg">
                            {{ field.label }}
                        </label>
                        <input v-if="field.type === 'text' || field.type === 'tel'" :type="field.type" :id="field.model"
                            :placeholder="field.placeholder" v-model="formData[field.model]"
                            class="w-full px-4 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B2B5F] border-[#0000004D]" />
                    </div>
                </div>

                <!-- Age Selection -->
                <h3 class="text-[40px] leading-[45px] font-semibold text-center text-[#2B2B5F] mt-8 mb-4">
                    Select Your Age
                </h3>
                <div class="space-y-4">
                    <div v-for="(field, index) in ageDetails" :key="index" class="space-y-2">
                        <label :for="field.model" class="text-[#000000] font-medium text-lg">
                            {{ field.label }}
                        </label>
                        <select :id="field.model" v-model="formData[field.model]"
                            class="w-full py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B2B5F] px-6 border-[#0000004D]">
                            <option v-for="option in field.options" :key="option" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="text-center mt-16">
                    <NuxtLink @click="ageFilled = true"
                        class="px-20 py-3 bg-[#2B2B5F] text-[#FFFFFF] rounded-lg hover:bg-blue-700 text-2xl font-bold">
                        Continue
                    </NuxtLink>
                </div>
            </main>
        </div>

        <!-- Medical History -->
        <div v-if="ageFilled" class="min-h-screen">
            <header class="px-4 py-2 shadow">
                <button @click="goBack" class="flex items-center space-x-2 text-[#2B2B5F]">
                    <i class="fas fa-arrow-left"></i>
                    <span>Back</span>
                </button>
            </header>

            <main class="max-w-lg mx-auto mt-8 p-6">
                <h2 class="text-[40px] leading-[45px] font-semibold text-center text-[#2B2B5F] mb-6">
                    Medical history
                </h2>
                <h1 class="text-xl font-semibold text-center text-[#000000]">
                    Do any member(s) have any existing illnesses for which they take regular medication?
                </h1>

                <div class="grid grid-cols-2 gap-4 md:gap-8 mt-10">
                    <div v-for="(disease, index) in diseases" :key="index" @click="toggleDiseaseSelection(disease)" :class="[
                        'p-4 border rounded-lg cursor-pointer text-center',
                        selectedDiseases.includes(disease)
                            ? 'border-[#2B2B5F] bg-blue-100'
                            : 'border-[#01C4DE] bg-white hover:bg-gray-100'
                    ]">
                        {{ disease }}
                    </div>
                </div>

                <div class="text-center mt-16">
                    <NuxtLink to="/insurance/health/plans"
                        class="px-20 py-3 bg-[#2B2B5F] text-[#FFFFFF] rounded-lg hover:bg-blue-700 text-2xl font-bold">
                        View Plans
                    </NuxtLink>
                </div>
            </main>
        </div>
    </div>


    <!-- Third -->
    <div
        class="flex flex-col md:flex-row items-center justify-center xl:justify-between gap-7 lg:gap-16 px-3 xl:px-52 py-7 md:py-16">
        <div>
            <img src="/public/assets/images/Insurance/Health_Cvr_2.png" alt="">
        </div>
        <div class="w-full md:w-[522px]">
            <div class="flex flex-col">
                <span class="text-[#999999] px-1 font-bold text-xs">Welcome To Policy Point</span>
                <span class="text-[#2B2B5F] text-xl lg:text-[30px] lg:leading-[40px] font-bold">Get reliable & quick
                    insurance for your family</span>
                <span
                    class="text-[#2B2B5F] text-xl md:text-2xl lg:text-[23px] lg:leading-[25px] font-bold md:mt-2">Committed
                    To Provide Our Customers With Exceptional Service</span>
                <p class="text-base font-medium px-1 text-[#999999] mt-2 lg:mt-6">Lorem ipsum dolor sit amet
                    consectetur. Nibh ucibus pharetra facilisi suspendisse eu in sed ipsum. Quis aliquam adipiscing
                    donec euismod.suspendisse eu in sed ipsum. Quis aliquam adipiscing donec euismod.</p>

                <div class="flex items-center gap-3 lg:gap-11 mt-7 lg:mt-12">
                    <div class="flex items-center gap-1 lg:gap-3">
                        <div>
                            <img src="/public/assets/images/Insurance/Health_Avatar.png" alt="">
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[11px] font-bold text-[#999999]">Call Expert</span>
                            <span class="text-[17px] text-[#2B2B5F] font-semibold">+91 8655691415</span>

                        </div>

                    </div>
                    <div>
                        <button class="text-white bg-[#2B2B5F] px-7 py-2 text-base font-bold rounded-lg">Lets Get
                            Started</button>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="relative w-full flex items-center ">
        <img src="/assets/images/insurance/Health_New_Form_Cover.png" alt="" class="w-full h-full object-cover">
        <div class="absolute flex flex-row lg:gap-16 px-3  xl:px-52 w-full justify-between items-center">
            <div class="w-full md:w-[572px] flex flex-col text-[#FFFFFF] h-auto">
                <div class="">
                    <span class="text-sm md:text-[50px] lg:leading-[55px] font-bold">We’re protecting your future with
                        the best insurance</span>
                </div>

            </div>
        </div>
    </div>

    <!-- Last Section  -->
    <div>
        <FaqFrequentlyAskQuestions />
    </div>
</template>

<script setup>
const gender = ref("Male");
const totalChildrenCount = ref(0);
const showMoreMembers = ref(false);
const memberSelected = ref(false);
const ageFilled = ref(false);

// Personal Details State
const personalDetails = [
    { label: "Your Name", model: "fullName", type: "text", placeholder: "Your Name" },
    { label: "Phone No.", model: "phoneNumber", type: "tel", placeholder: "Your Mobile No." },
    { label: "Pincode", model: "pincode", type: "text", placeholder: "Pincode" },
];

const members = reactive([
    { label: "Myself", isCount: false, selected: false },
    { label: "Wife", isCount: false, selected: false },
    { label: "Father", isCount: false, selected: false },
    { label: "Mother", isCount: false, selected: false },
    { label: "Son", isCount: true, count: 0, selected: false },
    { label: "Daughter", isCount: true, count: 0, selected: false },
]);

const moreMembers = reactive([
    { label: "Grand Father", isCount: false, selected: false },
    { label: "Grand Mother", isCount: false, selected: false },
    { label: "Father Inlaw", isCount: false, selected: false },
    { label: "Mother Inlaw", isCount: false, selected: false },
]);

const diseases = [
    "Diabetes",
    "Blood Pressure",
    "Heart disease",
    "Any Surgery",
    "Thyroid",
    "Asthma",
    "Other disease",
    "None of these"
];

// State to track selected diseases
const selectedDiseases = ref([]);

const setGender = (selectedGender) => {
    gender.value = selectedGender;
};

const updateTotalChildrenCount = (change) => {
    totalChildrenCount.value += change;
};

watch(gender, (newGender) => {
    const spouseMember = members.find((member) => member.label === "Wife" || member.label === "Husband");
    if (spouseMember) {
        spouseMember.label = newGender === "Male" ? "Wife" : "Husband";
    }
});

// Manage "More Members" Visibility
const toggleMoreMembers = () => {
    showMoreMembers.value = !showMoreMembers.value;
};

// Reactive State for Selected Members
const selectedMembers = computed(() => {
    return [...members, ...moreMembers].filter(member => member.selected);
});

// Go Back to Member Selection
const goBack = () => {
    memberSelected.value = false;
    members.forEach(member => member.selected = false);
    moreMembers.forEach(member => member.selected = false);
};

const formData = reactive({});

const ageDetails = computed(() => {
    const ageFields = [];

    selectedMembers.value.forEach((member) => {
        if (member.isCount) {
            if (member.label === "Son" || member.label === "Daughter") {
                const maxChildren = 4;
                let childCount = Math.min(member.count, maxChildren);

                for (let i = 1; i <= childCount; i++) {
                    ageFields.push({
                        label: `${i === 1 ? 'First' : i === 2 ? 'Second' : i === 3 ? 'Third' : 'Fourth'} ${member.label} Age`,
                        model: `${member.label.toLowerCase()}Age${i}`,
                        options: Array.from({ length: 100 }, (_, i) => i + 1),
                    });
                }
            }
        } else {
            ageFields.push({
                label: `${member.label} Age`,
                model: `${member.label.toLowerCase()}Age`,
                options: Array.from({ length: 100 }, (_, i) => i + 1),
            });
        }
    });

    return ageFields;
});

const toggleDiseaseSelection = (disease) => {
    if (selectedDiseases.value.includes(disease)) {
        selectedDiseases.value = selectedDiseases.value.filter((item) => item !== disease);
    } else {
        // If "None of these" is selected, clear all other selections
        if (disease === "None of these") {
            selectedDiseases.value = ["None of these"];
        } else {
            selectedDiseases.value = selectedDiseases.value.filter((item) => item !== "None of these");
            selectedDiseases.value.push(disease);
        }
    }
};

</script>

<style scoped>
button {
    transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
    background-color: #1e40af;
    color: white;
}
</style>