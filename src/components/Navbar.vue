<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const isMenuOpen = ref(false);
const router = useRouter();


function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}


function handleMenuClick(route) {
  isMenuOpen.value = false;
  router.push(route);
}
</script>

<template>
  <div class="bg-[#1C1E53] relative">
    <div class="container">
      <div
        class="relative sm:static flex md:justify-between items-center gap-6 text-center py-10 font-medium text-lg"
      >
        <div class="flex justify-between w-full">
          <router-link to="/home">
            <img class="sm:hidden md:block" src="/img/Logo.png" alt="Logo" />
          </router-link>
          <span class="text-4xl cursor-pointer mx-2 sm:hidden block">
            <img
              class="sm:hidden"
              :src="isMenuOpen ? '/img/close.png' : '/img/menu.png'"
              @click="toggleMenu"
              :alt="isMenuOpen ? 'close' : 'menu'"
            />
          </span>
        </div>

        <!-- Mobile Menu -->
        <transition name="fade">
          <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 z-[10]" @click="toggleMenu"></div>
        </transition>
        <transition name="slide">
          <div v-if="isMenuOpen" class="sm:hidden fixed top-0 right-0 w-2/3 h-full bg-white shadow z-[20]">
            <ul class="text-left text-xl px-7 py-6 text-gray-800">
              <li
                class="border-b py-2 border-gray-300 cursor-pointer hover:border-green-500"
                @click="handleMenuClick('/home')"
              >
                Home
              </li>
              <li
                class="border-b py-2 border-gray-300 cursor-pointer hover:border-green-500"
                @click="handleMenuClick('/about')"
              >
                About us
              </li>
              <li
                class="border-b py-2 border-gray-300 cursor-pointer hover:border-green-500"
                @click="handleMenuClick('/pricing')"
              >
                Pricing
              </li>
              <li
                class="border-b py-2 border-gray-300 cursor-pointer hover:border-green-500"
                @click="handleMenuClick('/work')"
              >
                Work
              </li>
              <li
                class="border-b py-2 border-gray-300 cursor-pointer hover:border-green-500"
                @click="handleMenuClick('/blog')"
              >
                Blog
              </li>
              <li
                class="border-b py-2 border-gray-300 cursor-pointer hover:border-green-500"
                @click="handleMenuClick('/contact-us')"
              >
                Contact us
              </li>
            </ul>
          </div>
        </transition>

        <!-- Desktop Menu -->
        <div class="hidden sm:block">
          <div class="flex gap-10 text-[#BBBBCB] place-items-center">
            <router-link to="/home" class="[&.router-link-active]:text-white hover:border-b-2 hover:border-b-white"
              >Home</router-link
            >
            <router-link to="/about" class="[&.router-link-active]:text-white hover:border-b-2 hover:border-b-white"
              >About</router-link
            >
            <router-link to="/pricing" class="[&.router-link-active]:text-white hover:border-b-2 hover:border-b-white"
              >Pricing</router-link
            >
            <router-link to="/work" class="[&.router-link-active]:text-white hover:border-b-2 hover:border-b-white"
              >Work</router-link
            >
            <router-link to="/blog" class="[&.router-link-active]:text-white hover:border-b-2 hover:border-b-white"
              >Blog</router-link
            >
            <router-link
              to="/contact-us"
              class="[&.router-link-active]:text-white sm:border-2 sm:border-[#BBBBCB] rounded-2xl md:px-3 md:py-2 sm:px-5 sm:py-2 [&.router-link-active]:border-white"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to  {
  transform: translateX(100%);
}
</style>
