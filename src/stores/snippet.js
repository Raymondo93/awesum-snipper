import {defineStore} from 'pinia';
import formatStringToHtml from 'format-string-to-html';
import fs from 'fs';

export const useSnippetStore = defineStore({
  id: 'snippet',
  state: () => ({
    component: '',
    isVisible: false,
    snippet: ''
  }),
  actions: {
    getSnippet(e) {
      console.log(e.target.value);
      let code = document.getElementById(e.target.value);
      code.style.display = 'block';
      this.snippet = new formatStringToHtml(code.getInnerHTML()).format();
      console.log(this.snippet);
      this.getCssSnippet();
    },
    getCssSnippet() {
      fs.readFile('/home/ray/Workspace/projects/awesum-code-snipper/src/assets/style/style.css', function(err, result) {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log('I have the data' + result);
      })
    }
  }
})