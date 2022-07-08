import {defineStore} from "pinia";

export const useFaqStore = defineStore({
  id: 'faq',
  state: () => ({
    isVisible: false,
    questions: [{
      id: 1,
      answerVisible: false,
      question: "How do i build a FAQ",
      answer: "Lorem ipsum in dolor sit amet, consectetur adipiscing elit, sed de eiusmod tempor incididunt ut labore \n" +
          "et dolore magna aliqua. Ut enim strip ad minim veniam, quis nostrud exercitation aliquip ex ea club commodo consequat.",
    }, {
      id: 2,
      answerVisible: false,
      question: "When are websites going to build themselves",
      answer: "Never",
    }],
  }),
  actions: {
    toggleFaqRow(id) {
      let answer = this.questions.find((answer) => answer.id === id);
      console.log(answer);
      answer.answerVisible = !answer.answerVisible;
      console.log('I clicked on an element! ' + id);
    }
  }
});