<script>
import ArticleCard from "./ArticleCard.vue";
import ArticlesPaginator from "./ArticlesPaginator.vue";
export default {
  components: {
    ArticleCard,
    ArticlesPaginator,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div class="ap-grid">
    <article-card id="1" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="2" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="3" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="4" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="5" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="6" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="7" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="8" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
    <article-card id="9" title="Экология человека и экологическая культура" :likes="8" image="https://pic.xenomorph.ru/2013-04/1365242838_16.jpg"/>
  </div>
  <div>
    <articles-paginator class="ap-paginator" :page-count="10" next-text=">" prev-text="<" />
  </div>
</template>

<style scoped>
.ap-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 50px;
}

.ap-paginator {
  list-style: none;
  display: flex;
  column-gap: 15px;
  justify-content: center;
  margin-top: 50px;
  padding-left: 0;
}

.ap-paginator:deep(li) {
  display: block;
  background-color: #859F8A;
  border-radius: 5px;
}

.ap-paginator:deep(a) {
  display: block;
  color: #fff;
  padding: 5px 10px;
}

.ap-paginator:deep(li.active) {
  background-color: #3D6144;
}

.ap-paginator:deep(li.disabled a) {
  text-decoration: none !important;
  cursor: default !important;
}
</style>