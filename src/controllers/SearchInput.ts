import Vue from "vue";
import Component from "vue-class-component";

@Component({ name: "search-input" })
export default class SearchInput extends Vue {
  availableProducts = false;
  toggleCheckbox() {
    this.$emit("toggle-checkbox", this.availableProducts);
  }
}
