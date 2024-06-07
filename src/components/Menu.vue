
<script setup>

</script>


<template>
    <div>
        <div
              class="sm:hidden shadow absolute top-[80%] right-0 z-[10] h-screen w-1/2 rounded-md left-0 bg-black/50   "
            >
              <ul class="text-left text-2xl px-6 py-4 duration-200 text-gray-100">
                <li
                  class="border-b border-gray-300 cursor-pointer hover:border-green-500"
                >
                  <router-link
                    to="/home"
                    class="[&.router-link-active]:text-white py-4"
                    >Home</router-link
                  >
                </li>
                <li
                  class="border-b border-gray-300 cursor-pointer hover:border-green-500"
                >
                  <router-link
                    to="/about"
                    class="[&.router-link-active]:text-white py-4"
                    >About us</router-link
                  >
                </li>
                <li
                  class="border-b border-gray-300 cursor-pointer hover:border-green-500"
                >
                  <router-link
                    to="/pricing"
                    class="[&.router-link-active]:text-white py-4"
                    >Pricing</router-link
                  >
                </li>
                <li
                  class="border-b border-gray-300 cursor-pointer hover:border-green-500"
                >
                  <router-link
                    to="/work"
                    class="[&.router-link-active]:text-white py-4"
                    >Work</router-link
                  >
                </li>
                <li
                  class="border-b border-gray-300 cursor-pointer hover:border-green-500"
                >
                  <router-link
                    to="/blog"
                    class="[&.router-link-active]:text-white "
                    >Blog</router-link
                  >
                </li>
                <li
                  class="border-b border-gray-300 cursor-pointer hover:border-green-500"
                >
                  <router-link
                    to="/contact-us"
                    class="[&.router-link-active]:text-white  border-[#BBBBCB]  lg:px-5 lg:py-2 [&.router-link-active]:border-white"
                    >Contact us</router-link
                  >
                </li>
              </ul>
            </div>
    </div>
</template>



<style scoped>

</style>