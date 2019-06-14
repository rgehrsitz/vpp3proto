<template>
  <div class="map">
    <img v-bind:style="{height: zoomHeight + '%'}" class="earth" alt="MAP" src="../assets/Earth.jpg"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      zoomHeight: 100,
    }
  },
  
})
</script>

<style>
.map {
  background: rgb(0, 0, 0);
  color: white;
  width: 100%;
  overflow: hidden;
  padding: 2px;
  text-align: center;
}

.earth{
  height: 100%;
}
</style>

