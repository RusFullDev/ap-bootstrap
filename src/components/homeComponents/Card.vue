
<script setup>
import {features} from '/src/static/feature.js'

</script>

<template>
    <div class=" grid grid-cols-3">
    <div class="shadow bg-white w-[405px] h-[316px]">
        <div v-for="item,index in features" :key="index">
            <img :src="item.icen" alt="icon">
            <h3>{{ item.title }}</h3>
            <p>{{ item.info }}</p>
        </div>
        </div>

    </div>
</template>



<style scoped>

</style>