<script setup>
import {reactive} from 'vue'
const socials=reactive(['/img/facebook.png','/img/twitter.png','/img/instagram.png','/img/linked.png']);

</script>


<template>
    <div>
<div class="bg-[#1C1E53]">
    <div class="container  py-[96px]">
        <div class="grid grid-cols-2 items-center gap-[260px]">
        <div>
            <img src="/img/Logo.png" alt="" class="pb-4">
        <p class="text-[#F4F6FC] text-lg w-[399px]">We are always open to discuss your project and improve your online presence.</p>
        </div>
<div class="">
    <h3 class="text-white text-5xl leading-[64px] pb-4">Lets Talk!</h3>
    <p class="text-[#F4F6FC] text-lg pb-7 w-[399px]">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
    <div class="flex gap-7">
        <div v-for="item,index in socials" :key="index" class="" >
        <img :src="item" alt="" >
    </div>
    </div>
</div>
</div>
<div class="bg-[#FCD980] grid grid-cols-2 place-items-center gap-5 h-[95px] w-[500px] ">
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