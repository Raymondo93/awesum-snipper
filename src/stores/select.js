import {defineStore} from "pinia";
import {useSnippetStore} from "./snippet";


export const useSelectStore = defineStore({
  id: 'select',
  state: () => ({
    options: {
      tile: false,
      button: false,
      faq: false,
      contact: false,
      banner: false,
      usp: false,
      content: false,
    },

    selectOptions: {
      buttons: 'component-button',
      tiles: 'component-tiles',
      faq: 'component-faq',
      contact: 'component-contact',
      banner: 'component-banner',
      usp: 'component-usp',
      content: 'component-content',
    }
  }),
  actions: {
    selectComponentOption(event) {
      const snippetStore = useSnippetStore();
      this.$reset();
      switch (event.target.value) {
        case 'component-tiles':
          this.options.tile = true;
          break;
        case 'component-button':
          this.options.button = true;
          break;
        case 'component-faq':
          this.options.faq = true;
          break;
        case 'component-contact':
          this.options.contact = true;
          break;
        case 'component-banner':
          this.options.banner = true;
          break;
        case 'component-usp':
          this.options.usp = true;
          break;
        case 'component-content':
          this.options.content = true;
          break;
        default: break;
      }
      snippetStore.getSnippet(event);
    }
  }
})