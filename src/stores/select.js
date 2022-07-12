import {defineStore} from "pinia";
import {useSnippetStore} from "./snippet";


export const useSelectStore = defineStore({
  id: 'select',
  state: () => ({
    tileOptions: false,
    buttonOptions: false,
    faqOptions: false,
    contactOptions: false,
    selectOptions: {
      buttons: 'component-button',
      tiles: 'component-tiles',
      faq: 'component-faq',
      contact: 'component-contact',
      banner: 'component-banner',
    }
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
        case 'component-faq':
          this.faqOptions = true;
          break;
        case 'component-contact':
          this.contactOptions = true;
          break;
        default: break;
      }
      snippetStore.getSnippet(event);
    }
  }
})