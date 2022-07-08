<script setup>
import StockImage from "@/assets/images/pexels-pixabay-162140.jpg";
import FallbackImage from "@/assets/images/jake-weirick-1Ad511F-ia0-unsplash.jpg";
import {useSnippetStore} from "@/stores/snippet";
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
      <div class="tile-image-box" v-if="this.props.tile.hasImage">
        <picture class="tile-image">
          <source media="(min-width:375px)" :srcset="StockImage" />
          <img :src="FallbackImage" alt="tile-image" width="" height="" />
        </picture>
      </div>
      <div class="tile-content-box">
        <h3 class="tile-title">{{this.props.tile.title}}</h3>
        <ul class="tile-list" v-if="this.props.tile.hasList">
          <li class="tile-list-item" v-for="item in this.props.tile.tileItems">{{item}}</li>
        </ul>
        <p v-else class="tile-content">{{this.props.tile.tileContent}}</p>
      </div>
    </div>
  </div>
</template>