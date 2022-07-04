import {defineStore} from "pinia";


export const useTilesStore = defineStore({
  id: 'tiles',
  state: () => ({
    title: 'Example title',
    hasList: true,
    tileItems: ["List item", "List item", "List item"],
    tileContent: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\n' +
        '          Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque\n' +
        '          interloper chantey doubloon starboard grog black jack gangway rutters.\n' +
        '          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.'
  }),
  actions: {
    updateTitle(event) {
      this.title = event.target.value;
    },
    toggleList(event) {
      this.hasList = event.target.value === 'list';
    }
  }
})