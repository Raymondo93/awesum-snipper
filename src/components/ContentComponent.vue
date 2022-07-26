<script setup>
import {useContentStore} from "@/stores/content.js";
import {computed, onUpdated} from "vue";
import {useSnippetStore} from "../stores/snippet.js";

const contentStore = useContentStore();
const snippetStore = useSnippetStore();

const getImagePosition = computed(() => {
  if (contentStore.imageIsLeft) {
    return 'content-img-is-left';
  } else {
    return 'content-img-is-right';
  }
});

onUpdated(() => {
  snippetStore.updateSnippet();
})
</script>

<template>
  <div id="component-content">
    <div class="content-section" :class="getImagePosition">
      <div class="content-img-box">
        <picture class="content-img">
          <source :srcset="contentStore.image" media="(min-width:375px)" />
          <img :src="contentStore.image" alt="content-image" width="" height="" />
        </picture>
      </div>
      <div class="content-content-box">
        <h1 class="content-content-title">{{ contentStore.title }}</h1>
        <p class="content-content-text">
          {{ contentStore.text }}
        </p>
      </div>
    </div>
  </div>
</template>
