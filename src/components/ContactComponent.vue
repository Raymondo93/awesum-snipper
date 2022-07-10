<script setup>
import {useContactStore} from "../stores/contact";

const contactStore = useContactStore();
</script>

<template>
  <div id="component-contact">
    <div class="contact-box iqf">
      <form class="iqf">
        <fieldset class="iqf-fieldset">
          <ul class="iqf-list">
            <li class="iqf-item is-half" v-for="field in contactStore.formFields">
              <label class="iqf-label" :for="field.id">{{field.label}}</label>
              <input v-if="field.type === 'text'" class="iqf-text" :type="field.type" :id="field.id"
                     :required="field.required" :placeholder="field.placeholder">
              <textarea v-if="field.type === 'textarea'" class="iqf-textarea" required :placeholder="field.placeholder"></textarea>
            </li>
            <li class="iqf-item checkbox">
              <input class="iqf-checkbox" type="checkbox">
              <span class="iqf-checkbox-text">Akkoord met de algemene
                        voorwaarden.</span>
            </li>
            <li class="iqf-item submit">
              <button class="btn-link">Verzenden
                <span class="btn-arrow-icon  fal fa-arrow-right"></span>
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  </div>
</template>