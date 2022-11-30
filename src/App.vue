<script>
import {RouterView} from 'vue-router'
import GlobalHeader from "./components/GlobalHeader.vue";
export default {
  components: { RouterView, GlobalHeader }
}
</script>

<template>
  <global-header/>
  <router-view/>
</template>

<style scoped>
</style>
