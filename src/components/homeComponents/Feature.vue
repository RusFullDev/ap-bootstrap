<script setup>

import {features} from '/src/static/feature.js'
</script>

<template>
    <div class="bg-[#F4F6FC]">
        <div class="container">
<div class="text-center pb-[47px] pt-[168px]">
<p class=" font-medium text-lg ">Features</p>
<h2 class="text-[#282938] font-semibold text-5xl leading-[64px] max-w-[580px] mx-auto">Design that solves problems, one product at a time</h2>
</div>
   
    <div class=" grid grid-cols-3 gap-8 place-items-center pb-[128px]">
        <div v-for="item,index in features" :key="index" class="shadow bg-white w-full p-9">
             <img :src="item.icon" alt="icon" class=" mb-6">
            <h3 class="pb-3 text-2xl leading-9 font-normal">{{ item.title }}</h3>
            <p class="text-base leading-7 font-normal">{{ item.info }}</p>
       
        </div>
        </div>
        </div>
   
    </div>
    
  
</template>



<style scoped>

</style>