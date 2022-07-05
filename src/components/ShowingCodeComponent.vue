<script setup>

import {useSnippetStore} from "@/stores/snippet";


const store = useSnippetStore();

// store.getCssSnippet();

</script>

<template>
  <section id="snippet-component" class="fit">
    <h3>HTML snippet code</h3>
    <pre>
      <code>
        {{store.htmlSnippet}}
      </code>
    </pre>
    <h3>CSS snippet code</h3>
    <pre>
      <code v-for="snippet in store.cssSnippet">
{{snippet}}
      </code>
    </pre>
  </section>



</template>