<script>
import {BFormInput} from "bootstrap-vue"
export default {
  components: {
    BFormInput
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div class="s-input-wrapper">
    <b-form-input class="s-input" placeholder="искать статью"/>
    <svg class="s-input-icon" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53Zm0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z"/><path fill="currentColor" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22Z"/></svg>
  </div>
</template>

<style scoped>
.s-input-wrapper {
  position: relative;
}

.s-input-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #371D0E;
}

.s-input {
  border-style: dashed;
  border-color: #371D0E;
  border-radius: 6px;
  font-size: 14px;
  color: #371D0E !important;
  height: 30px;
  padding: 5px 32px 5px 10px;
}

.s-input::placeholder {
  color: #4E4D4D;
  font-weight: 500;
  text-align: center;
}
</style>