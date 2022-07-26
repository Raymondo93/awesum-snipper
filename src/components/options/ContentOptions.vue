<script setup>

import {useContentStore} from "../../stores/content.js";

const contentStore = useContentStore();
</script>

<template>
  <div class="content-options">
    <label for="content-image-position">Image left:</label>
    <input type="checkbox" name="content-image-position" @change="contentStore.toggleImagePosition($event)" checked />
  </div>
</template>