import Vue from "vue";
import Component from "vue-class-component";

@Component({ name: "search-input" })
export default class SearchInput extends Vue {
  isChecked = false;
  searchString = "";

  updateSearchString() {
    this.$emit("update-search", this.searchString);
  }

  toggleCheckbox() {
    this.$emit("toggle-checkbox", this.isChecked);
  }
}
