<script setup>
const socials=
[
    {icon:'/img/facebook.png',url:'https://www.facebook.com'

       },
    {icon:'/img/twitter.png',url:'https://x.com'

},
 
    {icon:'/img/linked.png',url:'https://www.linkedin.com'
}
];
import {team} from '../static/teams.js'
</script>

<template>
    <div class="bg-[#F4F6FC]">
        <div class="container">
       <h3 class="text-[#282938] text-2xl sm:text-5xl sm:leading-[64px] font-semibold text-center pt-10 md:pt-[128px] pb-5 md:pb-[48px]">Meet our team</h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center pb-12 sm:pb-[128px]">
        <div v-for="item,index in team " :key="index">
            <div class="shadow-md bg-white relative group">
<div class="flex justify-center px-[64px] pt-[48px] pb-[30px] ">
    <img :src="item.img" alt="images">
    <img class=" group-hover:opacity-100 opacity-0 duration-300 pz-[10] absolute  px-[64px] pb-[30px]" src="/img/hover.png" alt="hover"> 
<div class="group-hover:opacity-100 opacity-0 duration-300 flex absolute top-1/2 justify-center items-center gap-3 z-[20]">
    <div v-for="item,index in socials" :key="index">
       <a :href="item.url"><img :src="item.icon" alt="socials" ></a> 
    </div>
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