<script setup>
import StockImage from "@/assets/images/pexels-pixabay-162140.jpg";
import {useSnippetStore} from "../../stores/snippet";
import {computed, onUpdated} from "vue";

const snippetStore = useSnippetStore();

const props = defineProps({
  tile: {
    type: Object,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
  }
});

const setQuantity = computed(() => {
  switch(props.quantity) {
    case 3:
      return "tile--3";
    case 4:
      return "tile--4"
  }
});


onUpdated(() => {
  snippetStore.updateSnippet();
});
</script>

<template>
  <div class="tile" :class="setQuantity">
    <div class="tile-box">
      <div class="tile-image-box" v-if="props.tile.hasImage">
        <img class="tile-image" :src="StockImage" alt="tile-image" width="" height="" />
      </div>
      <div class="tile-content-box">
        <h3 class="tile-title">{{props.tile.title}}</h3>
        <ul class="tile-list" v-if="props.tile.hasList">
          <li class="tile-list-item" v-for="item in props.tile.tileItems">{{item}}</li>
        </ul>
        <p v-else class="tile-content">{{props.tile.tileContent}}</p>
      </div>
    </div>
  </div>
</template>