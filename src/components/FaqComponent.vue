<script setup>
import {useFaqStore} from "../stores/faq";

const faqStore = useFaqStore();
</script>

<template>
  <div id="component-faq">
    <div class="faq">
      <h2 class="faq-title">Frequently asked questions</h2>
      <div class="faq-box">
        <ul class="faq-list">
          <li class="faq-list-item" v-for="question in faqStore.questions" @click="faqStore.toggleFaqRow(question.id)">
            <div class="faq-question-box" >
              <h5 class="faq-question">{{ question.question }} and {{question.id}}</h5>
            </div>
            <div :id="'answerId-' + question.id" class="faq-answer-box">
              <p class="faq-answer">{{ question.answer }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>