<script setup>
import {useTilesStore} from "../../stores/tiles";

const tileStore = useTilesStore();
</script>

<template>
  <div id="tile-options">
    <h4>Options for the tiles section</h4>
    <form>
      <label for="title">Title</label>
      <input name="title" type="text" @change="tileStore.updateTitle($event)" />
    </form>
    <select @change="tileStore.toggleList($event)">
      <option value="list">With list</option>
      <option value="content">With content</option>
    </select>
    <select @change="tileStore.toggleImage($event)">
      <option value="image">With image</option>
      <option value="no-image">No image</option>
    </select>
    <select @change="tileStore.toggleQuantity($event)">
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
</template>