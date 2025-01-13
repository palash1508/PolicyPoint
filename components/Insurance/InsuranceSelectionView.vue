<template>
    <div class="">
        <SharedInsuranceCard :cards="cards" />
    </div>

</template>

<script setup>
const cards = [
    {
        name: 'LifeInsurance',
        text: 'Life Insurance',
        imgLink: 'HomePageLifeInsurance.png',
        iconLink: 'HomePageLifeInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'HealthInsurance',
        text: 'Health Insurance',
        imgLink: 'HomePageHealthInsurance.png',
        iconLink: 'HomePageHealthInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'CarInsurance',
        text: 'Car Insurance',
        imgLink: 'HomePageCarInsurance.png',
        iconLink: 'HomePageCarInsuranceIcon.png',
        to: '/insurance/Car'
    },
    {
        name: 'BikeInsurance',
        text: 'Bike Insurance',
        imgLink: 'HomePageBikeInsurance.png',
        iconLink: 'HomePageBikeInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'FamilyInsurance',
        text: 'Family Insurance',
        imgLink: 'Family_Insurance.png',
        iconLink: 'HomePageLifeInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'TravelInsurance',
        text: 'Travel Insurance',
        imgLink: 'Travel_Insurance.png',
        iconLink: 'HomePageHealthInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'HomeInsurance',
        text: 'HomeInsurance',
        imgLink: 'Home_Insurance.png',
        iconLink: 'HomePageCarInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'FireInsurance',
        text: 'Fire Insurance',
        imgLink: 'Fire_Insurance.png',
        iconLink: 'HomePageBikeInsuranceIcon.png',
        to: '/insurance/health'
    },
];

</script>

<style scoped></style>