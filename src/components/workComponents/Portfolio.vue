
<script setup>

const socials =
[
    {icon:'/socials/1facebook.png',url:'https://www.facebook.com'

       },
    {icon:'/socials/2twitter.png',url:'https://x.com'

},
    {icon:'/socials/3instagram.png',url:'https://www.instagram.com'

}, 
    {icon:'/socials/4linkedn.png',url:'https://www.linkedin.com'
}
];

</script>

<template>
    <div class="bg-[#F4F6FC]">
        <div class="container py-10 sm:py-[96px]">
            <div class="text-[#282938] text-center lg:w-[733px] lg:mx-auto">
                <h4 class="text-base leading-7 mb-1">What we created</h4>
                <h1 class="font-semibold text-2xl sm:text-5xl sm:leading-[64px] mb-6">Our Work Portfolio</h1>
                <p class="text-xs sm:text-base sm:leading-7 mb-8">We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
            </div>
<div class="flex gap-7 justify-center">
    <div v-for="item,index in socials" :key="index">
       <a :href="item.url"><img :src="item.icon" alt="socials" ></a> 
    </div>
</div>
        </div>

    </div>
</template>



<style lang="scss" scoped>

</style>