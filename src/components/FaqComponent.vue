<script setup>
import {useFaqStore} from "../stores/faq";

const faqStore = useFaqStore();
</script>

<template>
  <div id="component-faq">
    <div class="faq">
      <h2 class="faq-title">Frequently asked questions</h2>
      <small class="supersmall">Ik heb het antwoord niet dus ga maar naar huis!</small>
      <div class="faq-box">
        <ul class="faq-list">
          <li class="faq-list-item" v-for="question in faqStore.questions" @click="faqStore.toggleFaqRow(question.id)">
            <div class="faq-question-box" >
              <h5 class="faq-question">{{ question.question }} and {{question.id}}</h5>
            </div>
            <div class="faq-answer-box" v-if="question.answerVisible">
              <p class="faq-answer">{{ question.answer }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>