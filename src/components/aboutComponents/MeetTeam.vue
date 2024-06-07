<script setup>
const team = [
    {
    img:'/img/John.png',
    name:'John Smith',
    level:'CEO',
    hover:'/img/hover.png',
   
},
{
    img:'/img/Simon.png',
    name:'Simon Adams',
    level:'CTO',
    hover:'/img/hover.png',
 


},
{
    img:'/img/Paul.png',
    name:'Paul Jones',
    level:'Design Lead',
    hover:'/img/hover.png',
   
},
{
    img:'/img/Sara.png',
    name:'Sara Hardin',
    level:'Project Manager',
    hover:'/img/hover.png',
 
}   
]
</script>

<template>
    <div class="bg-[#F4F6FC]">
        <div class="container">
       <h3 class="text-[#282938] text-2xl sm:text-5xl sm:leading-[64px] font-semibold text-center pt-10 md:pt-[128px] pb-5 md:pb-[48px]">Meet our team</h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center pb-[128px]">
        <div v-for="item,index in team " :key="index">
            <div class="shadow-md bg-white relative group">
<div class="flex justify-center px-[64px] pt-[48px] pb-[30px] ">
    <img :src="item.img" alt="images">
    <img class=" group-hover:opacity-100 opacity-0 duration-300 pz-[10] absolute  px-[64px] pb-[30px]" src="/img/hover.png" alt=""> 
<div class="group-hover:opacity-100 opacity-0 duration-300 flex absolute top-1/2 justify-center items-center gap-3 z-[20]">
    <img src="/img/facebook.png" alt="">
    <img src="/img/twitter.png" alt="">
    <img src="/img/linked.png" alt="">
        </div>
</div>

<div class="pb-[34px]">
<p>{{ item.name }}</p>
<p>{{ item.level }}</p>
</div>
</div>
        </div>
     
      
    </div>
    
</div>
    </div>
</template>



<style scoped>

</style>