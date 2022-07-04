<script setup>
import Tile from "./atoms/Tile.vue";
import {useTilesStore} from "../stores/tiles";

const tileStore = useTilesStore();

</script>

<template>
  <div id="component-tiles">
    <div class="tiles">
      <Tile v-for="tile in tileStore.tiles" :tile="tile" :quantity="tileStore.tiles.length"/>
    </div>
  </div>
</template>