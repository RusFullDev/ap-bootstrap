

<script setup>
const menu = ['All','UI Design','Webflow Design','Figma Design']
// const btn = ['View Portfolio','View Portfolio','Read case study','Read case study','Read case study','Read case study']
const template = [
    {
        img:'/templates/img1.png',
        title:'Template 1',
        info:'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
        btn:'View Portfolio'
    },
    {
        img:'/templates/img2.png',
        title:'Template 2',
        info:'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
        btn:'View Portfolio'
    },
    {
        img:'/templates/img3.png',
        title:'Template 3',
        info:'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
        btn:'Read case study'
    },
    {
        img:'/templates/img4.png',
        title:'Template 4',
        info:'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
        btn:'Read case study'
    },
    {
        img:'/templates/img5.png',
        title:'Template 5',
        info:'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
        btn:'Read case study'
    },
    {
        img:'/templates/img6.png',
        title:'Template 6',
        info:'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
        btn:'Read case study'
    },
    
]
</script>


<template>
    <div class="container">
        <div class="flex  sm:gap-8 sm:justify-center gap-x-8 gap-y-0 flex-wrap">
        <div class="sm:py-12" v-for="(item, index) in menu" :key="index">
            <button class="hover:text-[#2405F2] text-lg leading-8 font-normal"> {{ item }}</button>
        </div>
    </div>
    <div class="grid sm:grid-cols-2 gap-9 text-[#282938]">
        <div v-for="(item, index) in template" :key="index" class="my-3">
            <img class="mb-6" :src="item.img" alt="Template images" >
            <h3 class="mb-2 sm:mb-3 text-2xl sm:text-[38px] sm:leading-[56px] font-semibold">{{ item.title }}</h3>
            <p class="mb-4 sm:mb-6 font-normal text-base leading-7">{{ item.info }}</p>
            <button class="font-medium text-sm sm:text-lg hover:text-[#FCD980]">{{item.btn}} &#8594;</button>
        </div>

    </div>

    </div>
</template>



<style scoped>

</style>