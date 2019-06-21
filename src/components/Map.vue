<template lang="html">
  <div id="map"></div>
</template>

<script lang="ts">
import Vue from "vue";
import mapboxgl from "mapbox-gl";

export default Vue.extend({
  data() {
    return {
      map: null
    };
  },
  methods: {
    initMap: function() {
      var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
      mapboxgl.accessToken =
        "pk.eyJ1IjoidGltLWdlaHJzaXR6IiwiYSI6ImNqdzd4Z3JiODFxeHE0OW5ueHBrZ3B3YTMifQ.YfFIwdBMAaHe9HjJ4vZbcg";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/tim-gehrsitz/cjwcguy2w0dwi1cm9zr64gpr0"
      });
    }
  },
  mounted: function() {
    this.initMap();
  }
});
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>

