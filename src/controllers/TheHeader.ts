import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";

@Component
export default class TheHeader extends Vue {
  @Getter title!: string;
  @Getter description!: string;
  @Action receiveHeader!: () => void;

  created(): void {
    this.receiveHeader();
  }
}
