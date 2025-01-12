<template>
    <div class="flex flex-col gap-1">
        <label class="text-lg font-medium text-[#000000CC]">{{ label }}</label>
        <div v-if="type === 'radio'" class="flex items-center gap-4">
            <div v-for="(option, index) in options" :key="index" class="flex items-center gap-2 w-1/3">
                <input :id="`${label}-${index}`" :value="option" :name="label" type="radio"
                    class="text-[#2B2B5F] focus:ring-[#2B2B5F]" v-model="selected" />
                <label :for="`${label}-${index}`" class="text-sm font-medium text-[#2B2B5F]">
                    {{ option }}
                </label>
            </div>
        </div>
        <component v-else :is="type === 'select' ? 'select' : 'input'" :type="type === 'select' ? null : type"
            :placeholder="placeholder" v-model="selected"
            class="border border-[#0000004D] rounded-[10px] p-2 text-[#2B2B5FB2] font-medium text-base">
            <option v-if="type === 'select'" v-for="(option, index) in options" :key="index" :value="option"
                :disabled="index === 0">
                {{ option }}
            </option>
        </component>
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: '',
    },
    options: {
        type: Array,
        default: () => [],
    },
});

const selected = ref('');
</script>