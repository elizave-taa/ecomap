<script>
export default {
  props: {
    variant: {
      type: String,
      default: "basic"
    }
  },
}
</script>

<template>
  <button class="button-general" :class="variant" @click="$emit('click')">
    <slot/>
  </button>
</template>

<style scoped>
.button-general {
  font-weight: 400;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--btn-border-color);
  color: var(--btn-text-color);
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  transition: background-color .2s;
  background-color: var(--btn-color);
  cursor: pointer;
}

.button-general:hover {
  background-color: var(--btn-hover-color);
}

.button-general:active {
  background-color: var(--btn-active-color);
}

.button-general.basic {
  --btn-color: rgb(var(--c-button-rgb));
  --btn-hover-color: rgb(var(--c-button-hover-rgb));
  --btn-active-color: rgb(var(--c-button-active-rgb));
  --btn-border-color: rgb(var(--c-button-border-rgb));
  --btn-text-color: #fff;
}

.button-general.red {
  --btn-color: rgb(var(--c-button-red-rgb));
  --btn-hover-color: rgb(var(--c-button-red-hover-rgb));
  --btn-active-color: rgb(var(--c-button-red-active-rgb));
  --btn-border-color: rgb(var(--c-button-red-border-rgb));
  --btn-text-color: #fff;
}

.button-general.blue {
  --btn-color: rgb(var(--c-button-blue-rgb));
  --btn-hover-color: rgb(var(--c-button-blue-hover-rgb));
  --btn-active-color: rgb(var(--c-button-blue-active-rgb));
  --btn-border-color: rgb(var(--c-button-blue-border-rgb));
  --btn-text-color: #fff;
}

.button-general.yellow {
  --btn-color: rgb(var(--c-button-yellow-rgb));
  --btn-hover-color: rgb(var(--c-button-yellow-hover-rgb));
  --btn-active-color: rgb(var(--c-button-yellow-active-rgb));
  --btn-border-color: rgb(var(--c-button-yellow-border-rgb));
  --btn-text-color: #fff;
}

.button-general.pink {
  --btn-color: rgb(var(--c-button-pink-rgb));
  --btn-hover-color: rgb(var(--c-button-pink-hover-rgb));
  --btn-active-color: rgb(var(--c-button-pink-active-rgb));
  --btn-border-color: rgb(var(--c-button-pink-border-rgb));
  --btn-text-color: #fff;
}

.button-general.dark {
  background-color: rgba(61, 97, 68);
}

.button-general.limpid {
  background-color: rgba(82, 115, 89, 0.75);
}
</style>