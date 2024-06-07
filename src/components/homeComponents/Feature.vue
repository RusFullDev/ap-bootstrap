<script setup>

import {features} from '/src/static/feature.js'
</script>

<template>
    <div class="bg-[#F4F6FC]">
        <div class="container">
<div class="text-center lg:pb-[47px] lg:pt-[168px] pb-4 sm:pb-6 md:pt-[100px] pt-12">
<p class=" font-medium text-lg ">Features</p>
<h2 class="text-[#282938] font-semibold text-2xl md:text-5xl md:leading-[64px] max-w-[580px] mx-auto">Design that solves problems, one product at a time</h2>
</div>
   
    <div class="grid-flow-row auto-rows-max sm:grid-cols-2 grid lg:grid-cols-3 gap-8 place-items-center pb-10 md:pb-[60px] lg:pb-[128px]">
        <div v-for="item,index in features" :key="index" class="shadow bg-white w-full p-9">
             <img :src="item.icon" alt="icon" class=" mb-6">
            <h3 class="pb-3 text-2xl leading-9 font-normal h-9 overflow-hidden ">{{ item.title }}</h3>
            <p class="text-base leading-7 font-normal">{{ item.info }}</p>
       
        </div>
        </div>
        </div>
   
    </div>
    
  
</template>



<style scoped>

</style>