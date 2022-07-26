import {defineStore} from "pinia";
import {useSnippetStore} from "./snippet";


export const useSelectStore = defineStore({
  id: 'select',
  state: () => ({
    tileOptions: false,
    buttonOptions: false,
    faqOptions: false,
    contactOptions: false,
    bannerOptions: false,
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
          this.tileOptions = true;
          break;
        case 'component-button':
          this.buttonOptions = true;
          break;
        case 'component-faq':
          this.faqOptions = true;
          break;
        case 'component-contact':
          this.contactOptions = true;
          break;
        case 'component-banner':
          this.bannerOptions = true;
          break;
        default: break;
      }
      snippetStore.getSnippet(event);
    }
  }
})