import {defineStore} from 'pinia';
import formatStringToHtml from 'format-string-to-html';
import css from '@/assets/style/style.css?raw';
import {parseToJson} from "../assets/js/cssToJsonParser";
import {getClassList} from "../assets/js/classListCrawler";

export const useSnippetStore = defineStore({
  id: 'snippet',
  state: () => ({
    component: '',
    isVisible: false,
    htmlSnippet: '',
    cssSnippet: '',
  }),
  actions: {
    getSnippet(e) {
      let code = document.getElementById(e.target.value);
      code.style.display = 'block';
      this.htmlSnippet = new formatStringToHtml(code.getInnerHTML()).format();
      let classList = getClassList(code);
      console.log(classList);
      this.getCssSnippet(code);
    },
    getCssSnippet(code) {
      let usedClassList = getClassList(code);
      let cssJson = parseToJson(css);
      let classes = [];
      usedClassList.forEach((cssClass) => {
        for (let i = 0; i < cssJson.length; ++i) {
          console.log('class .' + cssClass);
          console.log('json ' + cssJson[i].selectors);
          if ('.' + cssClass === cssJson[i].selectors.trim()) {
            classes.push(cssJson[i]);
          }
        }
      })
      this.cssSnippet = classes;
    }
  }
})