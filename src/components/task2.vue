<template>
    <div>
        <button @click="start">Start</button>
        <button @click="end">End</button>
        <p v-if="duration">Duration: {{ duration }} seconds</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const startTime = ref(null);
const endTime = ref(null);
const duration = ref(null);

const start = () => {
    startTime.value = new Date();
};

const end = () => {
    endTime.value = new Date();
    duration.value = ((endTime.value - startTime.value) / 1000).toFixed(2);
};
</script>

<style lang="scss" scoped>
button {
    margin: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);

    &:hover {
        background-color: #0056b3;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
}
</style>