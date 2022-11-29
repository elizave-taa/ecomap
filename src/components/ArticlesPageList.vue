<script>
import ArticleCard from "./ArticleCard.vue";
export default {
  components: {
    ArticleCard
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div class="ap-grid">
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
  </div>
</template>

<style scoped>
.ap-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 50px;
}
</style>