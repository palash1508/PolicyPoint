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
        iconLink: '/assets/images/landingPage/HomePageLifeInsuranceIcon.png'
    },
    {
        name: 'HealthInsurance',
        text: 'Health Insurance',
        imgLink: '/assets/images/landingPage/HomePageHealthInsurance.png',
        iconLink: '/assets/images/landingPage/HomePageHealthInsuranceIcon.png'
    },
    {
        name: 'CarInsurance',
        text: 'Car Insurance',
        imgLink: '/assets/images/landingPage/HomePageCarInsurance.png',
        iconLink: '/assets/images/landingPage/HomePageCarInsuranceIcon.png'
    },
    {
        name: 'BikeInsurance',
        text: 'Bike Insurance',
        imgLink: '/assets/images/landingPage/HomePageBikeInsurance.png',
        iconLink: '/assets/images/landingPage/HomePageBikeInsuranceIcon.png'
    },
    {
        name: 'FamilyInsurance',
        text: 'Family Insurance',
        imgLink: '/assets/images/Insurance/Family_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageLifeInsuranceIcon.png'
    },
    {
        name: 'TravelInsurance',
        text: 'Travel Insurance',
        imgLink: '/assets/images/Insurance/Travel_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageHealthInsuranceIcon.png'
    },
    {
        name: 'HomeInsurance',
        text: 'HomeInsurance',
        imgLink: '/assets/images/Insurance/Home_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageCarInsuranceIcon.png'
    },
    {
        name: 'FireInsurance',
        text: 'Fire Insurance',
        imgLink: '/assets/images/Insurance/Fire_Insurance.png',
        iconLink: '/assets/images/landingPage/HomePageBikeInsuranceIcon.png'
    },
];

</script>

<style scoped></style>