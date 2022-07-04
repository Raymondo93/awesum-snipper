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
  </div>
</template>