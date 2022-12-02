<script>
import {RouterView} from 'vue-router'
import GlobalHeader from "./components/GlobalHeader.vue";
export default {
  components: { RouterView, GlobalHeader }
}
</script>

<template>
  <global-header v-if="$route.name !== 'article'"/>
  <router-view/>
</template>

<style scoped>
</style>
