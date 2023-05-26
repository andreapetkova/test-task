import Vue from "vue";
import Component from "vue-class-component";
import TheHeader from "./views/TheHeader.vue";
import ProductsList from "./views/Products/ProductsList.vue";

@Component({
  components: {
    TheHeader,
    ProductsList,
  },
})
export default class App extends Vue {}
