<script>
import ArticlesPageHeader from "../components/ArticlesPageHeader.vue";
import ArticlesPageList from "../components/ArticlesPageList.vue";
export default {
  components: {
    ArticlesPageHeader,
    ArticlesPageList,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <articles-page-header class="ap-header"/>
  <articles-page-list/>
</template>

<style scoped>
.ap-header {
  margin-bottom: 40px;
}
</style>