<script setup>
import {useSelectStore} from "../stores/select.js";
import ButtonOptions from "./options/ButtonOptions.vue";
import TileOptions from "./options/TileOptions.vue";
import BannerOptions from "./options/BannerOptions.vue";

const selectStore = useSelectStore();

</script>

<template>
  <section class="fit">
    <div class="sec-welcome">
      <h1 class="welcome-title">Welcome the awesum code-snippet-printer</h1>
    </div>
    <div>
      <select class="selectbox" id="selectbox-select" name="snippet" @change="selectStore.selectComponentOption($event)">
        <option value="" default>Nothing</option>
        <option v-for="(value, key) in selectStore.selectOptions" :value=value >{{ key }}</option>
      </select>
    </div>
    <div v-if="selectStore.buttonOptions">
      <button-options/>
    </div>
    <div v-if="selectStore.tileOptions">
      <tile-options/>
    </div>
    <div v-if="selectStore.bannerOptions">
      <banner-options />
    </div>
  </section>
</template>