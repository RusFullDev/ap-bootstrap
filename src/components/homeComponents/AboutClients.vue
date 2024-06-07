
<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  methods: {
    goToPrevSlide() {
      this.swiper.slidePrev();
    },
    goToNextSlide() {
      this.swiper.slideNext();
    },
  },
};
</script>

<template>
    <div class="bg-[#F4F6FC] ">
<div class="container lg:pb-[128px] pb-10">
    <div class="lg:grid lg:grid-cols-3 grid-cols-2 text-center lg:text-start">
    <div class="">
        <h3 class="text-[#282938] font-semibold text-2xl lg:text-4xl lg:leading-[55px] mb-4 lg:w-[327px]">What our clients say about us</h3>
        <p class="text-[#282938] font-normal text-base leading-7 lg:w-[327px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
    </div>
    <div class="lg:col-span-2  text-start" >
      <div class="px-5">
        <div class="swiper-container overflow-hidden relative ">
          <div class="swiper-wrapper">
            <div v-for="item in 3" :key="item" class="swiper-slide">
              <h2 class="font-semibold text-xl lg:text-3xl lg:max-w-[800px]">
                "The best agency we’ve worked with so far. They understand our
                product and are able to add new features with a great focus."
              </h2>
              <div class="md:flex justify-between items-center mt-4">
                <div class="flex gap-4 text-center">
                  <img class="py-12" src="/img/Jenny.png" alt="" />
                  <div class="my-10">
                    <h1 class="font-semibold text-xl">Jenny Wilson</h1>
                    <p>Vice President</p>
                  </div>
                </div>
              </div>              
            </div>
        </div>
        <div class="flex lg:gap-2 justify-end absolute bottom-0 right-0 lg:right-5 z-30">
              <button
                @click="goToPrevSlide"
                class="rounded-full border-none  py-5 px-3 md:hover:bg-[#5239FA]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z"
                    />
                  </g>
                </svg>
              </button>
              <button
                @click="goToNextSlide"
                class="rounded-full border-none  py-5 px-3 md:hover:bg-[#5239FA]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
                    />
                  </g>
                </svg>
              </button>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
    </div>
</template>



<style  scoped>

</style>