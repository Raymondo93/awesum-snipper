<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import {useUspStore} from "@/stores/usp.js";

const uspStore = useUspStore();
</script>

<template>
  <div id="component-usp">
    <div class="usp">
      <ul class="usp-list">
        <li class="usp-box" v-for="u in uspStore.usp">
          <p class="usp-box-icon">
            {{ u.icon }}
          </p>
          <div class="usp-box-content">
            <h3 class="usp-box-title">{{ u.title }}</h3>
            <p class="usp-box-description">{{ u.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>