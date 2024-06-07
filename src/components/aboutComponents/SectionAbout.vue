

<script setup>
const information =[
  {
  title:'Goal focussed',
  info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
  title:' Continuous improvement',
  info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut          aliquip ex ea commodo consequat.'
}
]

</script>

<template>
  <div class="container lg:pb-[128px] md:pb-[60px] pb-10">
    <div
      class="bg-[#F4F5F5] text-[#282938] grid md:grid-cols-2 py-5 md:py-10 lg:py-[96px] items-center px-10 gap-2 md:gap-10 lg:px-[80px] lg:gap-[61px] "
    >
      <div v-for="(item, index) in information" :key="index">
        <h2 class="font-semibold text-2xl md:text-[38px] md:leading-[56px] pt-4">{{item.title}}</h2>
        <p class="font-normal text-xs sm:text-sm md:text-base md:leading-7">{{item.info}}</p>
      </div>
    </div>
    <div>
      <img
        class="w-full"
        src="/img/man-in-blue-jacket-looking-at-white-board-7413916.png"
        alt="man"
      />
    </div>
  </div>
</template>

<style scoped></style>
