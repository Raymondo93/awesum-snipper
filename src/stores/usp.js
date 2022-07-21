import {defineStore} from "pinia";

export const useUspStore = defineStore({
  id: 'usp',
  state: () => ({
    usp: [{
      id: 1,
      icon: 'icon',
      title: 'usp title',
      description: 'tell us something about your usp',
      buttonText: 'check this usp'
    },{
      id: 2,
      icon: 'icon',
      title: 'usp title',
      description: 'tell us something about your usp',
      buttonText: 'plan a meeting'
    },{
      id: 3,
      icon: 'icon',
      title: 'usp title',
      description: 'tell us something about your usp',
      buttonText: 'take imidiate action!'
    }]
  }),
  actions: {

  }
});