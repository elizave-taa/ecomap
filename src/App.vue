<script>
import { RouterView } from 'vue-router'
import GlobalHeader from "./components/GlobalHeader.vue";
import axios from "axios";
import { useUserStore } from "./PiniaStore.js";
import { getCookie } from "./helpers/cookie.js";

export default {
  components: { RouterView, GlobalHeader },
  data() {
    return {
      withoutHeader: ['article', 'welcome-page'],
      userStore: useUserStore(),
    }
  },

  created() {
    axios.interceptors.request.use(
        (config) => {
          const token = getCookie("jwt");
          if (token != null) {
            config.headers.authorization = token;
          }
          return config;
        })
    if (getCookie('jwt')) { this.userStore.fetchUser() }
  },
}
</script>

<template>
  <global-header v-if="!withoutHeader.includes($route.name)"/>
  <router-view/>
</template>

<style scoped>
</style>
