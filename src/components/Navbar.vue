<script setup>
import Menu from './Menu.vue'

</script>

<template>
  <div class="bg-[#1C1E53]">
    <div class="container">
      <div
        class="flex  md:justify-between items-center sm:justify-evenly gap-6 text-center py-10 font-medium text-lg"
      >
       
          <img class="" src="/img/Logo.png" alt="Logo" />
          <!-- <div class="flex justify-end w-full h-10 ">
            <img class="sm:hidden" src="/img/menu.png" alt="menu" />
         <Menu/> -->
        <!-- </div> --> 

        <div class="hidden sm:block">
          <div class="flex gap-10 text-[#BBBBCB] place-items-center">
            <router-link to="/home" class="[&.router-link-active]:text-white"
              >Home</router-link
            >
            <router-link to="/about" class="[&.router-link-active]:text-white"
              >About us</router-link
            >
            <router-link to="/pricing" class="[&.router-link-active]:text-white"
              >Pricing</router-link
            >
            <router-link to="/work" class="[&.router-link-active]:text-white"
              >Work</router-link
            >
            <router-link to="/blog" class="[&.router-link-active]:text-white"
              >Blog</router-link
            >
            <router-link
              to="/contact-us"
              class="[&.router-link-active]:text-white border-2 border-[#BBBBCB] rounded-2xl md:px-3 md:py-2 lg:px-5 lg:py-2 [&.router-link-active]:border-white"
              >Contact us</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
