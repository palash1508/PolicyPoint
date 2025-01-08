<template>
    <div class="flex flex-col gap-1">
        <label class="text-lg font-medium text-[#000000CC]">{{ label }}</label>
        <component :is="type === 'select' ? 'select' : 'input'" :type="type === 'select' ? null : type"
            :placeholder="placeholder"
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
</script>

<style scoped></style>