import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
// import { Action, Getter } from "vuex-class";
import { Product } from "@/types";

@Component({ name: "product-card" })
export default class TheHeader extends Vue {
  @Prop() product!: Product;
}
