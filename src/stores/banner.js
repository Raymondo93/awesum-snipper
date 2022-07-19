import {defineStore} from "pinia";
import {useSnippetStore} from "./snippet.js";

export const useBannerStore = defineStore({
  id: 'banner',
  state: () => ({
    bannerTitle: 'Hello, world!',
    bannerDescription: 'Hai, and welcome to this awesome code snippet application',
    bannerHeight: undefined,
  }),
  actions: {
    updateBannerHeight(event) {
      let element = document.querySelector('.ban-img');
      if(!isNaN(event.target.value) && event.target.value > 0) {
        element.style.minHeight = event.target.value + 'px';
      }
      const snippetStore = useSnippetStore();
      snippetStore.updateMinHeightBanner('.ban-img', 'min-height', event.target.value + 'px');
    },
  }
})