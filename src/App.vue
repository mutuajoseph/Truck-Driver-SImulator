<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h2>Top Freight Logistics</h2>
    </v-app-bar>

    <v-main class="container">
      <!-- <HereMaps /> -->
      <Map />
    </v-main>
  </v-app>
</template>

<script>
// import HereMaps from './components/HereMaps.vue'
import Map from './components/Map.vue'
export default {
  name: "App",

  components: {
    // HereMaps,
    Map
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>
.container {
  margin-top: .4rem;
}
</style>
