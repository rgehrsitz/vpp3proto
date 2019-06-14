<template>
  <div class="bottombar">
    <div v-on:click="updateFullScreen" style="float: left;">
      <svg  v-show="!isFullScreen"  id="bottom-icon" width="18" height="18" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
      <svg  v-show="isFullScreen"  id="bottom-icon" width="18" height="18" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>
    </div>
    <div v-on:click="zoomIn" style="float: left;">
      <svg id="bottom-icon" width="18" height="18" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg>
    </div>
    <div v-on:click="zoomOut" style="float: left;">
      <svg id="bottom-icon" width="18" height="18" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"/></svg>
    </div>
    <div v-on:click="zoomFull" style="float: left;">
      <svg id="bottom-icon" style="padding-top: 3px; padding-bottom: 3px;" width="14" height="14" viewBox="0 0 24 24"><defs><path id="a" d="M0 0h24v24H0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"/><path clip-path="url(#b)" fill="none" d="M0 0h24v24H0z"/></svg>
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
  background: rgb(0, 135, 224);
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