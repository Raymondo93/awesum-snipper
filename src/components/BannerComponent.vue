<script setup>
import BannerImage from "@/assets/images/pexels-irlando-calzada-979729.jpg";
import {useBannerStore} from "@/stores/banner.js";

const bannerStore = useBannerStore();
</script>

<template>
  <div id="component-banner">
    <div class="ban-full-width">
      <div class="ban-img" :style="{backgroundImage: 'url(' + BannerImage + ')'}">
      </div>
      <div class="ban-content">
        <h1 class="ban-title">{{ bannerStore.bannerTitle }}</h1>
        <span class="ban-description">{{ bannerStore.bannerDescription }}</span>
      </div>
    </div>
  </div>
</template>