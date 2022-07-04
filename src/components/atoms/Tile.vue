<script setup>
import StockImage from "@/assets/images/pexels-pixabay-162140.jpg";
import {useTilesStore} from "../../stores/tiles";

const tileStore = useTilesStore();
</script>

<template>
  <div class="tile">
    <div class="tile-box">
      <div class="tile-image-box">
        <img class="tile-image" :src="StockImage" alt="tile-image" width="" height="" />

      </div>
      <div class="tile-content-box">
        <h3 class="tile-title">{{tileStore.title}}</h3>
        <p class="tile-content">Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.
          Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque
          interloper chantey doubloon starboard grog black jack gangway rutters.
          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
        </p>
      </div>
    </div>
  </div>
</template>