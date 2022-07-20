import {defineStore} from 'pinia';
import formatStringToHtml from 'format-string-to-html';
import css from '@/assets/style/style.css?raw';
import {parseToObject, parseToCss} from "@/assets/js/cssToObjectParser";
import {getClassList} from "@/assets/js/classListCrawler";

export const useSnippetStore = defineStore({
  id: 'snippet',
  state: () => ({
    component: '',
    isVisible: false,
    htmlSnippet: '',
    cssSnippet: [],
  }),
  actions: {
    getSnippet(e) {
      if (this.component !== '') {
        this.resetStore(this.component);
      }
      this.component = e.target.value;
      let code = document.getElementById(this.component);
      code.style.display = 'block';
      this.htmlSnippet = new formatStringToHtml(code.getInnerHTML()).format();
      this.getCssSnippet(code);
    },
    getCssSnippet(element) {
      let usedClassList = getClassList(element);
      let cssJson = parseToObject(css);
      let classes = [];
      usedClassList.forEach((cssClass) => {
        for (let i = 0; i < cssJson.length; ++i) {
          let selectors = cssJson[i].selectors.trim();
          if (selectors.includes(':')) {
            let s = selectors.split(':').filter(e => e);
            selectors = s[0];
          }
          // check if multiple selectors
          let selector = selectors.split('.').filter(e => e);
          if (selector.length === 1) {
            if (cssClass === selector[0]) {
              classes.push(cssJson[i]);
              // TODO => check all html elements instead only img
            } else if (selector[0].includes(' img')) {
              classes.push(cssJson[i]);
            }
          } else {
            let included = true;
            selector.forEach((s) => {
              s = s.replace(/(\s|\t|>|'*')/g, '');
              if (!usedClassList.includes(s.trim())) {
                included = false;
              }
            });
            if (included) {
              classes.push(cssJson[i]);
            }
          }
        }
      });
      this.cssSnippet = parseToCss([...new Set(classes)]);
    },
    updateSnippet() {
      let component = document.getElementById(this.component);
      this.htmlSnippet = new formatStringToHtml(component.getInnerHTML()).format();
      this.getCssSnippet(component);
    },
    updateCssProperty(cssClass, property, value) {
      let cssObjects = parseToObject(this.cssSnippet.join('\n'));
      let object = cssObjects.find(obj =>
        obj.selectors.trim() === cssClass.trim()
      );
      object.properties[property] = value;
      this.cssSnippet = parseToCss(cssObjects);
    },
    resetStore(component) {
      document.getElementById(component).style.display = 'none';
      this.$reset();
    },
  }
});



