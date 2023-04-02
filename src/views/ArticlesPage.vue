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
    return {
      search: null,
    }
  },
  methods: {
    handleSearch(s) {
      this.search = s;
    },
  },
}
</script>

<template>
  <b-container class="ap-container">
    <articles-page-header @search="handleSearch" class="ap-header"/>
    <articles-page-list :search="search"/>
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