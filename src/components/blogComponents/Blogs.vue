
<script setup>
const blog=[
    {
        img:'/blog/1.people-using-laptops.png',
        data:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        info:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        img:'/blog/2.woman.png',
        data:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        info:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        img:'/public/blog/3.person-holding.png',
        data:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        info:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        img:'/blog/4.people-having.png',
        data:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        info:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        img:'/blog/4.people-having.png',
        data:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        info:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        img:'/blog/6.group.png',
        data:'27 Jan 2021',
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        info:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    }
]

</script>

<template>
    <div class="container mb-[60px] md:mb-[128px]">
        <div class="text-[#282938] ">
            <h2 class="text-5xl leading-[64px] font-semibold mb-12 text-center">Our Blog</h2>
            <div class="grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-4 gap-2">
                <div class="mb-8" v-for="(item, index) in blog" :key="index">
                    <img class="mb-8 w-full" :src="item.img" alt="Our blogs image">
                    <p class="font-medium text-base leading-7 mb-2 md:mb-4">{{ item.data }}</p>
                    <h3 class="text-xl md:text-2xl md:leading-9 font-normal mb-2 md:mb-4">{{ item.title }}</h3>
                    <p class="font-normal text-base leading-7 mb-3 md:mb-6">{{ item.info }}</p>
                    <button class="font-medium text-lg hover:text-[#FCD980]">Read More &#8594;</button>

                     </div>
            </div>
           
        </div>

    </div>
</template>



<style scoped>

</style>