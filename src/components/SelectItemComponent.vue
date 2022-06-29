<script setup>


import {useSnippetStore} from "../stores/snippet";

const snippetStore = useSnippetStore();

</script>

<template>
  <section>
    <div class="fit">
      <div class="sec-welcome">
        <h1 class="welcome-title">Welcome the awesum code-snippet-printer</h1>
      </div>
      <div class="sec-selectbox">
        <select id="selectbox-select" name="snippet" @change="snippetStore.getSnippet($event)">
          <option value="" default>Nothing</option>
          <option value="component-button">Buttons</option>
          <option value="component-tiles">Tiles</option>
        </select>
      </div>
    </div>
  </section>
</template>