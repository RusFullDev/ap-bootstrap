

<script setup>
import { ref} from 'vue';
import { template } from '../static/worktemplate.js';

const menu = ['All', 'UI Design', 'Webflow Design', 'Figma Design'];
const selectedCategory = ref('All');
const templates = ref(template['All']);

function filterTemplates(category) {
    selectedCategory.value = category;
    templates.value = template[category];
}
</script>

<template>
    <div class="container py-5">
        <div class="flex sm:gap-8 sm:justify-center gap-x-8 gap-y-0 flex-wrap">
            <div class="sm:py-12" v-for="(item, index) in menu" :key="index">
                <button 
                    class="hover:text-[#2405F2] text-lg leading-8 font-normal" 
                    @click="filterTemplates(item)"
                > 
                    {{ item }}
                </button>
            </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-5 sm:gap-9 text-[#282938]">
            <div v-for="(item, index) in templates" :key="index" class="my-3">
                <img class="mb-6 w-full" :src="item.img" alt="Template images">
                <h3 class="mb-2 sm:mb-3 text-2xl sm:text-[38px] sm:leading-[56px] font-semibold">{{ item.title }}</h3>
                <p class="mb-4 sm:mb-6 font-normal text-base leading-7">{{ item.info }}</p>
                <button class="font-medium text-sm sm:text-lg hover:text-[#FCD980]">
                    {{ item.btn }} &#8594;
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
