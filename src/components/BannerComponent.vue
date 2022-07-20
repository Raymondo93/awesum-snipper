<script setup>
import {onUpdated} from "vue";
import BannerImage from "@/assets/images/pexels-irlando-calzada-979729.jpg";
import FallbackImage from "@/assets/images/jake-weirick-1Ad511F-ia0-unsplash.jpg"
import {useBannerStore} from "@/stores/banner.js";
import ButtonComponent from "./ButtonComponent.vue";
import {useSnippetStore} from "@/stores/snippet.js";

const bannerStore = useBannerStore();
const snippetStore = useSnippetStore()

onUpdated(() => {
  snippetStore.updateSnippet();
})
</script>

<template>
  <div id="component-banner">
    <div class="banfull-width" v-if="bannerStore.isFullWidth">
      <div class="banfull-img" :style="{backgroundImage: 'url(' + BannerImage + ')'}">
      </div>
      <div class="banfull-content">
        <h1 class="banfull-title">{{ bannerStore.bannerTitle }}</h1>
        <p class="banfull-description">{{ bannerStore.bannerDescription }}</p>
      </div>
    </div>
    <div class="banhalf-width banhalf-is-right" v-if="!bannerStore.isFullWidth && bannerStore.banImgIsRight">
      <div class="banhalf-content">
        <h1 class="banhalf-title">{{ bannerStore.bannerTitle }}</h1>
        <p class="banhalf-description">{{ bannerStore.bannerDescription }}</p>
        <button-component v-if="bannerStore.banHasButton" />
      </div>
      <div class="banhalf-img-box">
        <picture class="banhalf-img">
          <source media="(min-width:375px" :srcset="BannerImage" />
          <img :src="FallbackImage" alt="banner-image" width="" height="" />
        </picture>
      </div>
    </div>
    <div class="banhalf-width banhalf-is-left" v-if="!bannerStore.isFullWidth && !bannerStore.banImgIsRight">
      <div class="banhalf-content">
        <h1 class="banhalf-title">{{ bannerStore.bannerTitle }}</h1>
        <p class="banhalf-description">{{ bannerStore.bannerDescription }}</p>
        <button-component v-if="bannerStore.banHasButton" />
      </div>
      <div class="banhalf-img-box">
        <picture class="banhalf-img">
          <source media="(min-width:375px" :srcset="BannerImage" />
          <img :src="FallbackImage" alt="banner-image" width="" height="" />
        </picture>
      </div>
    </div>
  </div>
</template>