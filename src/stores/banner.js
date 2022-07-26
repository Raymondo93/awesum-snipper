import {defineStore} from "pinia";
import {useSnippetStore} from "./snippet.js";

export const useBannerStore = defineStore({
  id: 'banner',
  state: () => ({
    isFullWidth: true,
    banImgIsRight: true,
    banHasButton: true,
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
      snippetStore.updateCssProperty('.ban-img', 'min-height', event.target.value + 'px');
    },
    toggleBannerImageWidth(event) {
      this.isFullWidth = event.target.checked;
    },
    toggleImagePosition(event) {
      this.banImgIsRight = event.target.value === 'is-right';
    },
    toggleButton(event) {
      this.banHasButton = event.target.checked;
    }
  }
})