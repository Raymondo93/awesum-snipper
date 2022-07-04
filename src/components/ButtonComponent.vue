<script setup>
import {computed, onUpdated} from 'vue';
import {useButtonStore} from "../stores/buttons";
import {useSnippetStore} from "../stores/snippet";

const buttonStore = useButtonStore();
const snippetStore = useSnippetStore();

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

onUpdated(() => {
  snippetStore.updateSnippet();
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