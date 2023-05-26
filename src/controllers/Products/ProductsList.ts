import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
import ProductCard from "@/views/Products/ProductCard.vue";
import { Product } from "@/types";

@Component({
  name: "products-list",
  components: {
    ProductCard,
  },
})
export default class ProductList extends Vue {
  searchString = "";
  availableProducts = false;

  @Getter products!: Product[];
  @Getter description!: string;
  @Action receiveProducts!: () => void;

  created(): void {
    this.receiveProducts();
  }

  get filteredProducts() {
    // if checkbox is clicked it shows only available items
    if (this.availableProducts) {
      return this.products.filter((product) => product.new || product.sale);
    }

    // if checkbox is not clicked it searches by a search word longer that 3 chars
    return this.searchString.length > 3
      ? this.products.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(this.searchString.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(this.searchString.toLowerCase())
        )
      : this.products;
  }
}
