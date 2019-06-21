<template>
  <div class="bottombar">
    <div v-on:click="updateFullScreen" style="float: left;">
      <svg  v-show="!isFullScreen"  id="bottom-icon" width="18" height="18" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
      <svg  v-show="isFullScreen"  id="bottom-icon" width="18" height="18" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  data() {
    return {
      zoomedAmt: 100,
    }
  },
  methods: {
    updateFullScreen: function() {
      this.$store.commit('updateFullScreen');
    },
  },
  computed: {
    isFullScreen():boolean {
      return this.$store.state.isFullScreen;
    }
  }
})
</script>

<style scoped>
.bottombar {
  background: rgb(0, 97, 161);
  color: white;
  width: 100%;
  height: 20px;
}

#bottom-icon {
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 4px;
  width: auto;
  display: block;
  margin: auto;
  fill: rgb(190, 190, 190);
}

#bottom-icon:hover {
  fill: rgb(255, 255, 255);
}
</style>