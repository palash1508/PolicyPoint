<template>
    <div class="w-full bg-[#EEEEEE33] pb-20">
        <div v-if="!memberSelected" class="max-w-4xl mx-auto py-8 space-y-6 ">
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
                    <button class="px-6 py-2 rounded-l-lg font-semibold  text-sm "
                        :class="gender === 'Male' ? 'bg-[#2B2B5F] text-[#FFFFFF]' : 'text-[#000000] border-[#2B2B5F] border'"
                        @click="gender = 'Male'">
                        Male
                    </button>
                    <button class="px-6 py-2 rounded-r-lg font-medium "
                        :class="gender === 'Female' ? 'bg-[#2B2B5F] text-[#FFFFFF]' : 'text-[#000000] border-[#2B2B5F] border'"
                        @click="gender = 'Female'">
                        Female
                    </button>
                </div>
    
                <div class="">
                    <!-- Member Selection -->
                    <div class="grid grid-cols-2 gap-6 justify-items-center">
                        <SharedMemberCard v-for="(member, index) in members" :key="index" :label="member.label"
                            :withCounter="member.isCount" :defaultCount="member.count"
                            @update:count="updateCount(member.label, $event)"
                            @select="toggleMember(member.label, $event)" />
                    </div>
    
                    <!-- More Members -->
                    <div class="text-center mt-4">
                        <button class="text-#000000 font-semibold text-xl" @click="showMoreMembers = !showMoreMembers">
                            More Members {{ showMoreMembers ? '▲' : '▼' }}
                        </button>
                        <div v-if="showMoreMembers" class="grid grid-cols-2 gap-6 mt-4 justify-items-center">
                            <SharedMemberCard v-for="(member, index) in moreMembers" :key="index" :label="member.label"
                                :isCount="member.isCount" @select="toggleMember(member.label, $event)" />
                        </div>
                    </div>
    
                    <!-- Continue Button -->
                    <div class="text-center mt-10">
                        <button @click="proceedForm"
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
    
        <!-- Next Form details  -->
    
        <div v-if="memberSelected" class="min-h-screen ">
            <!-- Back Button -->
            <header class="px-4 py-2  shadow">
                <button @click="goBack" class="flex items-center space-x-2 text-[#2B2B5F]">
                    <i class="fas fa-arrow-left"></i>
                    <span>Back</span>
                </button>
            </header>
    
            <!-- Form Section -->
            <main class="max-w-lg mx-auto mt-8 p-6">
                <!-- Title -->
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
    
                <!-- Age Section Title -->
                <h3 class="text-[40px] leading-[45px] font-semibold text-center text-[#2B2B5F] mt-8 mb-4">
                    Select Your Age
                </h3>
    
                <!-- Age Inputs -->
                <div class="space-y-4">
                    <div v-for="(field, index) in ageDetails" :key="index" class="space-y-2">
                        <label :for="field.model" class="text-[#000000] font-medium text-lg">
                            {{ field.label }}
                        </label>
                        <select :id="field.model" v-model="formData[field.model]" placeholder="Your Age"
                            class="w-full py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B2B5F] px-6  border-[#0000004D">
                            <option v-for="option in field.options" :key="option" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                </div>
    
                <!-- Continue Button -->
                <div class="text-center mt-16">
                    <NuxtLink to="/insurance/health/plans"
                            class="px-20 py-3 bg-[#2B2B5F] text-[#FFFFFF] rounded-lg hover:bg-blue-700 text-2xl font-bold">
                            Continue
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
import { ref } from "vue";

const gender = ref("Male");
const showMoreMembers = ref(false);

// Main members
const members = ref([
    { label: "Myself", isCount: false, selected: false },
    { label: "Wife", isCount: false, selected: false },
    { label: "Father", isCount: false, selected: false },
    { label: "Mother", isCount: false, selected: false },
    { label: "Son", isCount: true, count: 1, selected: false },
    { label: "Daughter", isCount: true, count: 1, selected: false },
]);

// Additional members
const moreMembers = ref([
    { label: "Grand Father", isCount: false, selected: false },
    { label: "Grand Mother", isCount: false, selected: false },
    { label: "Father Inlaw", isCount: false, selected: false },
    { label: "Mother Inlaw", isCount: false, selected: false },
]);

// Update count for counted members
const updateCount = (label, count) => {
    const member = findMember(label);
    if (member && member.isCount) {
        member.count = count;
    }
};

// Toggle member selection
const toggleMember = (label, selected) => {
    const member = findMember(label);
    if (member) {
        member.selected = selected;
        if (member.isCount) {
            member.count = selected ? 1 : 0;
        }
    }
};

// Find member in either list
const findMember = (label) => {
    return (
        members.value.find((m) => m.label === label) ||
        moreMembers.value.find((m) => m.label === label)
    );
};


// Form data model
const formData = ref({
    name: "",
    phone: "",
    pincode: "",
    age: "",
    wifeAge: "",
});

// Options for dropdown
const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

// Personal details fields
const personalDetails = [
    {
        label: "Your Name",
        placeholder: "Your Name",
        model: "name",
        type: "text",
    },
    {
        label: "Phone No.",
        placeholder: "Your Mobile No.",
        model: "phone",
        type: "tel",
    },
    {
        label: "Pincode",
        placeholder: "Pincode",
        model: "pincode",
        type: "text",
    },
];

// Age selection fields
const ageDetails = [
    {
        label: "Your Age",
        placeholder: "Select Your Age",
        model: "age",
        options: ageOptions,
    },
    {
        label: "Your Wife Age",
        placeholder: "Select Wife's Age",
        model: "wifeAge",
        options: ageOptions,
    },
];

const goBack = () => {
    memberSelected.value = false
};

const memberSelected = ref(false) ;
const proceedForm = () =>{
    memberSelected.value = true;
}
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