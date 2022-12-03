<script>
import {RouterView} from 'vue-router'
import ProfilePage from "./views/ProfilePage.vue";
import BasicInformation from "./components/BasicInformation.vue";
export default {
  components: {ProfilePage, RouterView, BasicInformation }
}
</script>

<template>
  <!--<router-view/>-->
  <profile-page/>
  <!--<basic-information/>-->
</template>

<style scoped>
</style>
