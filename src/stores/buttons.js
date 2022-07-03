import {defineStore} from "pinia";

export const useButtonStore = defineStore({
  id: 'button',
  state: () => ({
    buttonType: 'primary',
    text: 'Example text',
    pageLink: '#',
  }),
  actions: {

  }
})