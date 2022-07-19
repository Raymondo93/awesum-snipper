import {defineStore} from "pinia";

export const useBannerStore = defineStore({
  id: 'banner',
  state: () => ({
    bannerTitle: 'Hello, world!',
    bannerDescription: 'Hai, and welcome to this awesome code snippet application',
  }),
  actions: {

  }
})