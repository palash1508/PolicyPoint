<template>
  <div class="p-6 md:p-11 border rounded-lg shadow-custom bg-white border-[#99999980]">
    <h3 class="font-semibold text-2xl mb-4 text-[#2B2B5F]">Medical Questions For {{ member.name }}</h3>
    <div class="space-y-3">
      <div v-for="(question, index) in questions" :key="index">
        <p class="text-[#000000] font-medium text-[15px] leading-4">{{ question }}</p>
        <div class="flex items-center justify-between space-x-4 text-[15px] w-1/2 lg:w-1/3 mt-2">
          <!-- Yes Option -->
          <label class="flex items-center space-x-3 cursor-pointer font-medium text-[#999999]">
            <input type="radio" :name="'q' + index + member.name" value="yes" class="hidden"
              v-model="selectedAnswers[index]" />
            <div class="w-5 h-5 border rounded-[2px] flex justify-center items-center border-[#2B2B5F]" :class="{
              'text-[#2B2B5F] border-[#2B2B5F] border': selectedAnswers[index] === 'yes',
              'border-[#000000]': selectedAnswers[index] !== 'yes',
            }">
              <svg v-if="selectedAnswers[index] === 'yes'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="[#2B2B5F]" width="16" height="16">
                <path d="M9 16.17l-3.88-3.88L4 13.41l5 5 12-12-1.41-1.41z" />
              </svg>
            </div>
            <span class="" :class="{
              'text-[#000000] font-semibold': selectedAnswers[index] === 'yes',
              'text-[#999999]': selectedAnswers[index] !== 'yes',
            }">Yes</span>
          </label>

          <!-- No Option -->
          <label class="flex items-center space-x-3 cursor-pointer font-medium text-[#999999]">
            <input type="radio" :name="'q' + index + member.name" value="no" class="hidden"
              v-model="selectedAnswers[index]" />
            <div class="w-5 h-5 border rounded-[2px] flex justify-center items-center" :class="{
              'text-[#2B2B5F] border-[#2B2B5F] border': selectedAnswers[index] === 'no',
              'border-[#000000]': selectedAnswers[index] !== 'no',
            }">
              <svg v-if="selectedAnswers[index] === 'no'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="[#2B2B5F]" width="16" height="16">
                <path d="M9 16.17l-3.88-3.88L4 13.41l5 5 12-12-1.41-1.41z" />
              </svg>
            </div>
            <span :class="{
              'text-[#000000] font-semibold': selectedAnswers[index] === 'no',
              'text-[#999999]': selectedAnswers[index] !== 'no',
            }">No</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: Object,
});

const selectedAnswers = ref({});

const questions = [
  "Has any Proposed to be Insured been diagnosed with or suffered from / is suffering from or is currently under medication for the following. If Your response is yes to any of the following questions, please specify details of the same in the additional information section :",
  "Do You smoke, consume alcohol, or chew tobacco, ghutka or paan or use any recreational drugs?",
  "Have any of the above mentioned person(s) to be insured been diagnosed / hospitalized for any illness / injury during the last 48 months?",
  "Have any of the person(s) to be insured ever filed a claim with their current / previous insurer?",
  "Is any of the person(s) to be insured, already covered under any other health insurance policy of Religare Health Insurance?",
];


</script>

<style scoped>
.shadow-custom {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>