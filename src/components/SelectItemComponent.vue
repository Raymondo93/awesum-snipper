<script setup>


</script>

<template>
  <section>
    <div class="fit">
      <div class="sec-welcome">
        <h1 class="welcome-title">Welcome the awesum code-snippet-printer</h1>
      </div>
      <div class="sec-selectbox">
        <select id="selectbox-select" name="snippet" @change="$emit('updateSelector')">
          <option value="" default>Nothing</option>
          <option value="component-button">Buttons</option>
          <option value="component-tiles">Boxes</option>
        </select>
      </div>
    </div>
  </section>
</template>