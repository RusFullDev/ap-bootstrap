<script setup>
import { ref } from 'vue';

const questions = ref([
  {
    number: '01',
    question: 'How much time does it take?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    open: false
  },
  {
    number: '02',
    question: 'What is your class naming convention?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    open: false
  },
  {
    number: '03',
    question: 'How do we communicate?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    open: false
  },
  {
    number: '04',
    question: 'I have a bigger project. Can you handle it?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    open: false
  },
  {
    number: '05',
    question: 'What is your class naming convention?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    open: false
  },
]);

const toggle = (index) => {
  questions.value[index].open = !questions.value[index].open;
};
</script>

<template>
  <div class="container mb-[60px] md:mb-[128px] ">
<div class="grid lg:grid-cols-3 gap-6">
    <div class="text-center sm:text-start">
      <h2 class=" text-2xl md:text-5xl md:leading-[64px] text-[#282938] font-semibold mb-4">Frequently asked questions</h2>
      <p class="text-[#2405F2] text-lg leading-8 font-normal">Contact us For More Info</p>
    </div>
    <div class="lg:col-span-2">
      <div v-for="(item, index) in questions" :key="index" class="border-t border-b">
        <h2 :id="'accordion-collapse-heading-' + index">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200  dark:text-gray-400 hover:bg-gray-100 gap-3"
            :data-accordion-target="'#accordion-collapse-body-' + index"
            aria-expanded="false"
            :aria-controls="'accordion-collapse-body-' + index"
            @click="toggle(index)"
          >
            <div class="flex gap-[54px]">
              <p class="text-[#2405F2] font-normal text-lg sm:text-xl md:text-2xl md:leading-9">{{ item.number }}</p>
              <span class="text-[#282938] font-normal text-lg sm:text-xl md:text-2xl md:leading-9">{{ item.question }}</span>
            </div>
            <span class="text-xl text-[#282938]">
              {{ item.open ? 'X' : '+' }}
            </span>
          </button>
        </h2>
        <div
          :id="'accordion-collapse-body-' + index"
          class="transition-max-height duration-300 ease-in-out overflow-hidden "
          :class="item.open ? 'max-h-[400px]' : 'max-h-0'"
        >
            <p class="mb-2 font-medium text-[#282938] text-xs sm:text-lg sm:leading-8 p-4">{{ item.answer }}</p>
          
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.transition-max-height {
  transition: max-height 0.3s ease-in-out;
}
</style>
