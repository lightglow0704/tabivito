<script setup>
import HomeCarousel from '@/components/HomeCarousel.vue'
import HomeTravelList from '@/components/HomeTravelList.vue'
import TripFlowSection from '@/components/TripFlowSection.vue'


import img1 from '@/assets/carousel/carousel1.jpg'
import img2 from '@/assets/carousel/carousel2.jpg'
import img3 from '@/assets/carousel/carousel3.jpg'

const slides = [img1, img2, img3]
</script>

<template>
  <main>

    <HomeCarousel :images="slides" :interval="5000" />

    <TripFlowSection />

    <HomeTravelList />
  </main>
</template>

<style scoped>
/* 필요 시 여백 조정 */
main {
  background: #fafafa;
}
</style>
