<script setup>
import ShowingCodeComponent from "@/components/ShowingCodeComponent.vue";

import SelectItemComponent from "@/components/SelectItemComponent.vue";

import {getSnippet} from "../../public/js/main";
import HiddenComponents from "@/components/HiddenComponents.vue";

async function getAndPrintSnippet(e) {
  console.log(e)
  const snippet = await getSnippet(e.target.value);
  console.log(snippet);
}

</script>

<template>
  <SelectItemComponent @updateSelector="getAndPrintSnippet"/>
  <ShowingCodeComponent />
  <HiddenComponents/>
</template>
