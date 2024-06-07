
<script setup>
const page = [
  {
    price: '$299',
    design: 'Per Design',
    pageName: 'Landing Page ',
    info: 'When you’re ready to go beyond prototyping in Figma, ',
    but: 'Get started',
    pageMenu : ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']
  },
  {
    price: '$399',
    design: 'Multi Design',
    pageName: 'Website Page',
    info: 'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help. ',
    but: 'Get started',
    pageMenu :['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']
  },
  {
    price: '$499 +',
    design: 'Per Design',
    pageName: 'Complex Project',
    info: 'When you’re ready to go beyond prototyping in Figma,',
    but: 'Contact us',
    pageMenu:['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users', 'Assist and Help']
  },
];

</script>

<template>
  <div class="container py-10 sm:py-[60px] md:py-[110px]">
    <div class="text-[#282938] mb-[64px] text-center ">
      <h1 class="text-5xl leading-[64px] font-semibold mb-4">Our Pricing Plans</h1>
      <p class="text-base leading-7 font-medium text-[#282938] max-w-[562px] mx-auto">
        When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.
      </p>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      <div v-for="(item, index) in page" :key="index" :class="['p-12 rounded-xl', index === 1 ? 'bg-[#1C1E53]' : 'bg-[#F4F6FC]']">
        <div class="flex items-center gap-2 mb-5">
          <p :class="[ 'font-semibold text-xl sm:text-[35px] sm:leading-[56px]',index===1 ?'text-white':'text-[#282938]']">{{ item.price }}</p>
          <p :class="['font-normal text-base leading-7',index===1 ? 'text-[#FCD980]':'text-[#2405F2]' ]">{{ item.design }}</p>
        </div>
        <h2 :class="['mb-2 font-normal text-2xl leading-9',index===1 ?'text-white':'text-[#282938]']">{{ item.pageName }}</h2>
        <p :class="['h-[84px] mb-[50px] overflow-hidden text-base leading-7',index===1 ?'text-white':'text-[#282938]']">{{ item.info }}</p>
        <div class=" mb-[70px] h-[268px]">
        <div  v-for="(menuItem , menuIndex) in item.pageMenu" :key="menuIndex" class="flex gap-3 items-center">
            <img class="mb-5" src="/img/Pointer2.png" alt="Pointer" />  
            <p :class="['mb-5 text-base leading-7',index===1 ?'text-white':'text-[#282938]']">{{ menuItem }}</p>
        </div>
    </div>
    <div class="text-center">
        <button :class="['px-6 py-2 sm:px-[50px] sm:py-[14px] rounded-[42px] font-semibold text-lg leading-8',index===1 ? 'text-[#282938] bg-[#FCD980] ':' bg-[#282938] text-[#F4F6FC] hover:bg-[#FCD980] hover:text-black ']">
          {{ item.but }}
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
