
<script setup>
const anketa= [
    {
        title:'Name',
        text:'Enter your name'
    },
    {
        title:'Email',
        text:'Enter your Email'
    },
    {
        title:'Subject',
        text:'Provide context'
    },
    {
        title:'Subject',
        text:'Select Subject'
    },
    // {
    //     title:'Message',
    //     text:'Write your  question here'
    // }
]
</script>
<template>
    <div class="container py-[60px] md:py-[128px]">
<div class="text-[#282938] text-center mb-[64px]">
<h1 class="font-semibold text-5xl leading-[64px] mb-4">Contact Us</h1>
<p class="text-base leading-7 font-normal md:w-[562px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
</div>
<div class="bg-[#F4F6FC] rounded-xl p-[70px] text-xs sm:text-lg sm:leading-8">
<div class="grid lg:grid-cols-2 lg:gap-8 gap-4 pb-4 font-normal">
<div v-for="(item, index) in anketa" :key="index">
    <div class="">
    <h4 class="pb-[6px]">{{ item.title }}</h4>
    <input type="text" name="" required  :placeholder="item.text" class="w-full h-12 sm:h-[64px] border-2 rounded-lg px-8 focus:outline-none bg-[#F4F6FC]">
    </div>
</div>
</div>
<div class='pb-8'>
<h4 class="pb-[6px]">Message</h4>
<input type="text" name="" id="" required placeholder="Write your  question here" class=" bg-[#F4F6FC] border-2 rounded-lg w-full h-[120px] sm:h-[176px]  px-8 focus:outline-none">
</div>
<button  class="px-6 py-3 rounded-3xl sm:px-[51px] sm:py-[15px] sm:rounded-[42px] font-semibold text-sm sm:text-lg sm:leading-8 bg-[#282938] text-[#F4F6FC] hover:bg-[#FCD980] hover:text-black">Send Messege</button>
</div>

    </div>
</template>

<style scoped>

</style> 