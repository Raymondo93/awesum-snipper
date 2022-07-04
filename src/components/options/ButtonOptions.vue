<script setup>

import {useButtonStore} from "../../stores/buttons";

const buttonStore = useButtonStore();
</script>

<template>
  <div id="button-type-selector">
    <h4>Select type for button</h4>
    <select @change="buttonStore.updateButtonType($event)">
      <option value="primary" default>Primary</option>
      <option value="secondary">Secondary</option>
      <option value="warning">Warning</option>
    </select>
  </div>
</template>
