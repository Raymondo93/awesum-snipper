<script setup>
import {useSelectStore} from "../stores/select";
import ButtonOptions from "./options/ButtonOptions.vue";

const selectStore = useSelectStore();

</script>

<template>
  <section class="fit">
    <div class="sec-welcome">
      <h1 class="welcome-title">Welcome the awesum code-snippet-printer</h1>
    </div>
    <div class="sec-selectbox">
      <select id="selectbox-select" name="snippet" @change="selectStore.selectComponentOption($event)">
        <option value="" default>Nothing</option>
        <option value="component-button">Buttons</option>
        <option value="component-tiles">Tiles</option>
      </select>
    </div>
    <div v-if="selectStore.buttonOptions">
      <ButtonOptions/>
    </div>
  </section>
</template>