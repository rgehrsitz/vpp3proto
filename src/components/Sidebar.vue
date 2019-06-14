<template>
  <div class="sidebar">
    <h1>{{currentBar}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentBar():string {
      return this.$store.state.currentBar;
    }
  },
})
</script>

<style>
.sidebar {
  background-color: rgb(255, 255, 255);
  border-left: 0.5px solid rgb(226, 226, 226);
  color: black;
  width: 200px;
  display: flex;
  flex-direction: column;
}

h1 {
  margin-top: 0px;
  padding: 4px;
  font-size: 20px;
  color: black;
  font-weight: normal;
}

#pin-icon {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  width: auto;
  display: block;
  margin: auto;
}
</style>
