import {defineStore} from "pinia";

export const useTilesStore = defineStore({
  id: 'tiles',
  state: () => ({
    title: 'Example title',
    hasList: false,
  }),
  actions: {
    updateTitle(event) {
      this.title = event.target.value;
    }
  }
})