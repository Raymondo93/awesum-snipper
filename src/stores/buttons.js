import {defineStore} from "pinia";

export const useButtonStore = defineStore({
  id: 'button',
  state: () => ({
    buttonType: 'primary',
    text: 'Example text',
    pageLink: '#',
  }),
  actions: {
    updateButtonType(event) {
      if (event.target.value === 'primary' || event.target.value === 'secondary' || event.target.value === 'warning') {
        this.buttonType = event.target.value;
      }
    }
  }
})