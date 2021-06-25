import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;
// Vue.use(VueGoogleMaps, {
//     load: {
//       key: 'AIzaSyC7Y8dOZVFvDJ__dbWY9dM_X5_EFTip1Qo',
//       libraries: 'places',
//     }
//   }
// )

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
