<script setup>

import TilesComponent from "./TilesComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
</script>

<template>
  <section id="hidden-components" class="fit">
    <TilesComponent />
    <ButtonComponent button-style="primary" text="Example button" page-link="#" />
  </section>
</template>