<script setup>
import {computed} from 'vue';
import {useButtonStore} from "../stores/buttons";

const buttonStore = useButtonStore();

const getButtonStyle = computed(() => {
  switch (buttonStore.buttonType) {
    case "primary":
      return "primary-button";
    case "secondary":
      return "secondary-button";
    case "warning":
      return "warning-button";
    default:
      return "";
  }
});

</script>

<template>
  <div id="component-button">
    <div>
      <a :href="buttonStore.pageLink">
        <button
            type="button"
            :class="getButtonStyle"
            class="button"
            @click="$emit('buttonClicked')"
        >
          {{ buttonStore.text }}
        </button>
      </a>
    </div>
  </div>
</template>