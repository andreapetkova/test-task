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
export default class TheHeader extends Vue {
  @Getter products!: Product[];
  @Getter description!: string;
  @Action receiveProducts!: () => void;

  created(): void {
    this.receiveProducts();
  }
}
