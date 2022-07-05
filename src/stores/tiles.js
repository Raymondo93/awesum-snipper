import {defineStore} from "pinia";


export const useTilesStore = defineStore({
  id: 'tiles',
  state: () => ({
    tiles: [{
      title: 'Example title',
      hasList: true,
      hasImage: true,
      tileItems: ["List item", "List item", "List item"],
      tileContent: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\n' +
          '          Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque\n' +
          '          interloper chantey doubloon starboard grog black jack gangway rutters.\n' +
          '          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
    }, {
      title: 'Example title',
      hasList: true,
      hasImage: true,
      tileItems: ["List item", "List item", "List item"],
      tileContent: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\n' +
          '          Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque\n' +
          '          interloper chantey doubloon starboard grog black jack gangway rutters.\n' +
          '          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
    }, {
      title: 'Example title',
      hasList: true,
      hasImage: true,
      tileItems: ["List item", "List item", "List item"],
      tileContent: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\n' +
          '          Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque\n' +
          '          interloper chantey doubloon starboard grog black jack gangway rutters.\n' +
          '          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
    }]
  }),
  actions: {
    updateTitle(event) {
      this.tiles.forEach((tile) => {
        tile.title = event.target.value;
      });
    },
    toggleList(event) {
      this.tiles.forEach((tile) => {
        tile.hasList = event.target.value === "list";
      })
    },
    toggleImage(event) {
      this.tiles.forEach((tile) => {
        tile.hasImage = event.target.value === "image";
      });
    },
    toggleQuantity(event) {
      if (event.target.value === "4") {
        this.tiles.push({
          title: 'Example title',
          hasList: true,
          hasImage: true,
          tileItems: ["List item", "List item", "List item"],
          tileContent: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\n' +
              '          Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque\n' +
              '          interloper chantey doubloon starboard grog black jack gangway rutters.\n' +
              '          Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
        });
      } else if (event.target.value === "3") {
        this.tiles.pop();
      }
    }
  }
})