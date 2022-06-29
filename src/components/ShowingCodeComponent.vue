<script setup>

import {useSnippetStore} from "@/stores/snippet";


const store = useSnippetStore();

</script>

<template>
  <section id="snippet-component" class="fit">
    <pre>
      <code>
        {{store.snippet}}
      </code>
    </pre>
  </section>



</template>