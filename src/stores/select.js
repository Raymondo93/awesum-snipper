import {defineStore} from "pinia";
import {useSnippetStore} from "./snippet";


export const useSelectStore = defineStore({
  id: 'select',
  state: () => ({
    tileOptions: false,
    buttonOptions: false,
  }),
  actions: {
    selectComponentOption(event) {
      const snippetStore = useSnippetStore();
      switch (event.target.value) {
        case 'component-tiles':
          this.tileOptions = true;
          break;
        case 'component-button':
          this.buttonOptions = true;
          break;
        default: break;
      }
      snippetStore.getSnippet(event);
    }
  }
})