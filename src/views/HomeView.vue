<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import ShowingCodeComponent from "@/components/ShowingCodeComponent.vue";
import ShowingItemComponent from "@/components/ShowingItemComponent.vue";
import SelectItemComponent from "@/components/SelectItemComponent.vue";

import {getSnippet} from "../../public/js/main";
import HiddenComponents from "@/components/HiddenComponents.vue";

function getAndPrintSnippet(e) {
  let snippet = getSnippet(e);
  console.log(snippet);
}

</script>

<template>
  <main>
    <SelectItemComponent  @updateSelector="getAndPrintSnippet"/>
    <ShowingCodeComponent />
    <ShowingItemComponent />
    <HiddenComponents />
  </main>
</template>
