<script setup>
import StockImage from "@/assets/images/pexels-pixabay-162140.jpg";
import {useTilesStore} from "../../stores/tiles";
import {useSnippetStore} from "../../stores/snippet";
import {onUpdated} from "vue/dist/vue";

const tileStore = useTilesStore();
const snippetStore = useSnippetStore();

onUpdated(() => {
  snippetStore.updateSnippet();
});
</script>

<template>
  <div class="tile">
    <div class="tile-box">
      <div class="tile-image-box">
        <img class="tile-image" :src="StockImage" alt="tile-image" width="" height="" />

      </div>
      <div class="tile-content-box">
        <h3 class="tile-title">{{tileStore.title}}</h3>
        <ul class="tile-list" v-if="tileStore.hasList">
          <li class="tile-list-item" v-for="item in tileStore.tileItems">{{item}}</li>
        </ul>
        <p v-else class="tile-content">{{tileStore.tileContent}}</p>
      </div>
    </div>
  </div>
</template>