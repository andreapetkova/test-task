import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { StateType, FullGetResponse, Product } from "@/types";
import axios from "axios";
import type { AxiosError } from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    _title: "",
    _description: "",
    _products: null,
  },
  getters: {
    title(state: StateType): string {
      return state._title;
    },
    description(state: StateType): string {
      return state._description;
    },
    products(state: StateType): Product[] | null {
      return state._products;
    },
  },
  mutations: {
    updateHeader(state: StateType, payload: FullGetResponse) {
      state._title = payload.title;
      state._description = payload.description;
    },
    updateProducts(state: StateType, payload: Product[]) {
      state._products = payload;
    },
  },
  actions: {
    async receiveHeader(
      ctx: ActionContext<StateType, StateType>
    ): Promise<void> {
      try {
        const response = await axios.get("products.json");
        ctx.commit("updateHeader", response.data);
      } catch (err) {
        alert(err as AxiosError);
      }
    },
    async receiveProducts(
      ctx: ActionContext<StateType, StateType>
    ): Promise<void> {
      try {
        const response = await axios.get("products.json");
        ctx.commit("updateProducts", response.data.products);
      } catch (err) {
        alert(err as AxiosError);
      }
    },
  },
  modules: {},
});
