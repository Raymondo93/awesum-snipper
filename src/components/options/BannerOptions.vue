<script setup>
import {useBannerStore} from "../../stores/banner.js";

const bannerStore = useBannerStore();
</script>

<template>
  <div class="banner-options">
    <label :for="'banner-height'">Height banner</label>
    <input name="banner-height" type="number" @change="bannerStore.updateBannerHeight" />
    <label :for="'banner-image-width'">Banner image full width?</label>
    <input type="checkbox" name="banImgWidth" @change="bannerStore.toggleBannerImageWidth" checked />

    <div v-if="!bannerStore.isFullWidth">
      <label :for="'banner-image-position'">Image position</label>
      <select class="selectbox" @change="bannerStore.toggleImagePosition">
        <option value="is-right">right</option>
        <option value="is-left">left</option>
      </select>

      <input type="checkbox" name="banHasButton" @change="bannerStore.toggleButton" checked />
    </div>
  </div>
</template>