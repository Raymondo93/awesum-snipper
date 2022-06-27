<script setup>
  import StockImage from "@/assets/images/jake-weirick-1Ad511F-ia0-unsplash.jpg"
</script>

<template>
  <div class="tile">
    <img :src="StockImage" alt="tile-image" />
    <h3 class="tile-title">title</h3>
    <p class="tile-content">Lorum ipsum description text</p>
  </div>
</template>