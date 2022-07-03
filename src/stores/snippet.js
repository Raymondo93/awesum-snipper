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
      if(this.component !== '') {
        this.resetStore(this.component);
      }
      this.component = e.target.value;
      let code = document.getElementById(this.component);
      code.style.display = 'block';
      this.htmlSnippet = new formatStringToHtml(code.getInnerHTML()).format();
      this.getCssSnippet(document.getElementById(this.component));
    },
    getCssSnippet(element) {
      let usedClassList = getClassList(element);
      let cssJson = parseToJson(css);
      let classes = [];
      usedClassList.forEach((cssClass) => {
        for (let i = 0; i < cssJson.length; ++i) {
          if ('.' + cssClass === cssJson[i].selectors.trim()) {
            classes.push(cssJson[i]);
          }
        }
      })
      this.cssSnippet = classes;
    },
    resetStore(component) {
      document.getElementById(component).style.display = 'none';
      this.$reset();
    }
  }
});



