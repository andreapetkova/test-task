import Vue from "vue";
import Component from "vue-class-component";
import TheHeader from "./views/TheHeader.vue";

@Component({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
