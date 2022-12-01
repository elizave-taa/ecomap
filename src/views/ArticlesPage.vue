<script>
import ArticlesPageHeader from "../components/ArticlesPageHeader.vue";
import ArticlesPageList from "../components/ArticlesPageList.vue";
import {BContainer} from "bootstrap-vue";
export default {
  components: {
    ArticlesPageHeader,
    ArticlesPageList,
    BContainer,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <b-container class="ap-container">
    <articles-page-header class="ap-header"/>
    <articles-page-list/>
  </b-container>
</template>

<style scoped>
.ap-header {
  margin-bottom: 40px;
}

.ap-container {
  padding: 30px 0;
}
</style>