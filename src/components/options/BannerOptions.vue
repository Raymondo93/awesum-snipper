<script setup>
import {useBannerStore} from "../../stores/banner.js";

const bannerStore = useBannerStore();
</script>

<template>
  <div class="banner-options">
    <label :for="'banner-height'">Height banner</label>
    <input name="banner-height" type="number" @change="bannerStore.updateBannerHeight" />
  </div>
</template>