import {defineStore} from "pinia";

export const useContactStore = defineStore({
  id: 'contact',
  state: () => ({
    isVisible: false,
    formFields: [{
      id: 'firstname',
      type: 'text',
      required: true,
      label: 'Voornaam',
      placeholder: 'Jesse',
    }, {
      id: 'lastname',
      type: 'text',
      required: true,
      label: 'Achternaam',
      placeholder: 'Klager',
    }, {
      id: 'comment',
      type: 'textarea',
      required: false,
      label: 'Opmerking',
      placeholder: 'Opmerkingen'
    }]
  })
})