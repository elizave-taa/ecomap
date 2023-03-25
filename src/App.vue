<script>
import {RouterView} from 'vue-router'
import GlobalHeader from "./components/GlobalHeader.vue";
export default {
  components: { RouterView, GlobalHeader },
  data() {
    return {
      withoutHeader: ['article', 'welcome-page']
    }
  }
}
</script>

<template>
  <global-header v-if="!withoutHeader.includes($route.name)"/>
  <router-view/>
</template>

<style scoped>
</style>
