<script setup>
import {useTilesStore} from "../../stores/tiles";

const tileStore = useTilesStore();
</script>

<template>
  <div id="tile-options">
    <h4>Options for the tiles section</h4>
    <label for="title">Title</label>
    <input name="title" type="text" @change="tileStore.updateTitle($event)" />
  </div>
</template>