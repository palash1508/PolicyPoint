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
        imgLink: '/assets/images/landingPage/HomePageLifeInsurance.png',
        iconLink: '/assets/images/landingPage/HomePageLifeInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'HealthInsurance',
        text: 'Health Insurance',
        imgLink: '/assets/images/landingPage/HomePageHealthInsurance.png',
        iconLink: '/assets/images/landingPage/HomePageHealthInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'CarInsurance',
        text: 'Car Insurance',
        imgLink: '/assets/images/landingPage/HomePageCarInsurance.png',
        iconLink: '/assets/images/landingPage/HomePageCarInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'BikeInsurance',
        text: 'Bike Insurance',
        imgLink: '/assets/images/landingPage/HomePageBikeInsurance.png',
        iconLink: '/assets/images/landingPage/HomePageBikeInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'FamilyInsurance',
        text: 'Family Insurance',
        imgLink: '/assets/images/Insurance/Family_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageLifeInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'TravelInsurance',
        text: 'Travel Insurance',
        imgLink: '/assets/images/Insurance/Travel_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageHealthInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'HomeInsurance',
        text: 'HomeInsurance',
        imgLink: '/assets/images/Insurance/Home_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageCarInsuranceIcon.png',
        to: '/insurance/health'
    },
    {
        name: 'FireInsurance',
        text: 'Fire Insurance',
        imgLink: '/assets/images/Insurance/Fire_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageBikeInsuranceIcon.png',
        to: '/insurance/health'
    },
];

</script>

<style scoped></style>