<script>
import {RouterView} from 'vue-router'
import GlobalHeader from "./components/GlobalHeader.vue";
import ProfilePage  from "./views/ProfilePage.vue";
import DataPoint from "./views/DataPoint.vue";
import MapPage from "./views/MapPage.vue";
export default {
  components: {MapPage, DataPoint, RouterView, GlobalHeader, ProfilePage }
}
</script>

<template>
  <global-header v-if="$route.name !== 'article'"/>
  <!--<router-view/>-->
  <map-page/>
  <!--<profile-page/>-->

</template>

<style scoped>
</style>
