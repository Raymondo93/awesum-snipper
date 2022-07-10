<script setup>

import TilesComponent from "./TilesComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
import FaqComponent from "./FaqComponent.vue";
import ContactComponent from "./ContactComponent.vue";
</script>

<template>
  <section id="hidden-components" class="fit">
    <tiles-component />
    <button-component button-style="primary" text="Example button" page-link="#" />
    <faq-component />
    <contact-component />
  </section>
</template>