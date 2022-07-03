<script setup>

import {computed} from "vue";

const buttonTypeUpdate = computed((event) => {

});
</script>

<template>
  <div id="button-type-selector">
    <h4>Select type for button</h4>
    <select @change="buttonTypeUpdate($event)">
      <option value="primary" default>Primary</option>
      <option value="secondary">Secondary</option>
      <option value="warning">Warning</option>
    </select>
  </div>
</template>
