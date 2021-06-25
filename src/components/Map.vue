<template>
  <div id="map" style="height: 100vh"></div>
</template>

<script>
export default {
  data: () => ({
    map: null,
    path: [
      { lat: 1.298982, lng: 36.776811 },
      { lat: -1.297459, lng: 36.776747 },
      { lat: -1.296193, lng: 36.776726 },
      { lat: -1.296097, lng: 36.779236 },
      { lat: -1.296151, lng: 36.777637 },
      { lat: -1.296215, lng: 36.776693 },
      { lat: -1.294252, lng: 36.776586 },
      { lat: -1.294048, lng: 36.77679 },
      { lat: -1.293973, lng: 36.779118 },
      { lat: -1.292622, lng: 36.779075 },
      { lat: -1.291844, lng: 36.779049 },
    ],
    velocity: 100,
    initialDate: new Date(),
    p: [],
  }),


  mounted() {
    this.initMap();
    this.loopMarkers(this.path)
    this.interval = window.setInterval(this.moveObject, 1000)
  },

  destroyed() {
    window.clearInterval(this.interval);
  },

  methods: {
    // This example adds an animated symbol to a polyline.
    initMap() {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: this.path[0],
        zoom: 8,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
      });

      // Define the symbol, using one of the predefined paths ('CIRCLE')
      // supplied by the Google Maps JavaScript API.
      const lineSymbol = {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor: "#393",
      };

      // Create the polyline and add the symbol to it via the 'icons' property.
      const line = new window.google.maps.Polyline({
        path: this.path,
        icons: [
          {
            icon:lineSymbol ,
            offset: "100%",
          },
        ],
        strokeColor: "#FF0000",
        map: map,
      });
      this.animateCircle(line);
    },

    // Use the DOM setInterval() function to change the offset of the symbol
    // at fixed intervals.
    animateCircle(line) {
      let count = 0;
      window.setInterval(() => {
        count = (count + 1) % 200;
        const icons = line.get("icons");
        icons[0].offset = count / 2 + "%";
        line.set("icons", icons);
      }, 1000);
    },
   
    // Derive the marker points
    setMarker(Points, Label) {
      const markers = new window.google.maps.Marker({
        position: Points,
        map: this.map,
        Label: {
          text: Label,
          color: "#fff",
        },
      })

       console.log(markers)
    },

    // access each point and place a marker
    loopMarkers(arr) {
      for (let el of arr ) {
        this.setMarker(el, "P")
      }
    }
  },
};
</script>

<style>
</style>