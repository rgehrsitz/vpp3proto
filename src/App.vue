<template>
  <div id="app" style="height: 100%;">
    <div class="row">
      <sideselect></sideselect>
      <sidebar v-show="!isFullScreen" class="bar-slide"></sidebar>
      <mainMap></mainMap>
      <mapTools></mapTools>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainMap from './components/Map.vue'
import Sidebar from './components/Sidebar.vue'
import SideSelect from './components/SideSelect.vue'
import BottomBar from './components/BottomBar.vue'
import MapTools from './components/MapTools.vue'

export default Vue.extend({
  name: 'app',
  components: {
    'mainMap': MainMap,
    'sidebar': Sidebar,
    'sideselect': SideSelect,
    'bottomBar' : BottomBar,
    'mapTools' : MapTools,
  },
  computed: {
    isFullScreen(): boolean{
      return this.$store.state.isFullScreen;
    }
  },

})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

.row{
  display: flex;
  flex: 1;
  height: 100%;
}

.bar-slide {
  display: inherit !important; /* override v-show display: none */
  transition-duration: 0.6s;
}

.bar-slide[style*="display: none;"] {
  pointer-events: none;
  user-select: none;
  width: 0px;
}
</style>
