<script setup>
import {reactive} from 'vue'
const socials=reactive(['/img/facebook.png','/img/twitter.png','/img/instagram.png','/img/linked.png']);

</script>


<template>
    <div>
<div class="bg-[#1C1E53]">
    <div class="container  py-[30px] md:py-[96px]">
        <div class="lg:grid lg:grid-cols-2 items-center gap-[260px]">
        <div>
            <img src="/img/Logo.png" alt="" class="pb-4">
        <p class="text-[#F4F6FC] text:9xl sm:text-lg sm:w-[399px]">We are always open to discuss your project and improve your online presence.</p>
        </div>
<div class="">
    <h3 class="text-white text-5xl leading-[64px] pb-4">Lets Talk!</h3>
    <p class="text-[#F4F6FC] text-lg pb-7 sm:w-[399px]">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
    <div class="flex gap-7 pb-4 md:pb-4 lg:pb-0">
        <div v-for="item,index in socials" :key="index" class="" >
        <img :src="item" alt="" >
    </div>
    </div>
</div>
</div>
<div class="bg-[#FCD980] sm:grid sm:grid-cols-2 sm:place-items-center gap-5 sm:h-[95px] sm:w-[500px] sm:pt-5 ">
        <div>
            <h3 class="text-lg font-medium">Email me at</h3>
            <p class="text-base font-normal">contact@website.com</p>
        </div>
        <div>
            <h3 class="text-lg font-medium">Call us</h3>
            <p class="text-base font-normal">0927 6277 28525</p>
        </div>
    </div>
    </div>
</div>

    </div>
</template>



<style scoped>

</style>