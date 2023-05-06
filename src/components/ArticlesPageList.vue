<script>
import ArticleCard from "./ArticleCard.vue";
import ArticlesPaginator from "./ArticlesPaginator.vue";
import axios from "axios";

export default {
  components: {
    ArticleCard,
    ArticlesPaginator,
  },

  props: {
    search: String,
  },

  data() {
    return {
      page: 1,
      limit: 999,
      articles: [],
    }
  },
  methods: {
    getArticles() {
      axios.get("article", {
        params: {
          page: this.page,
          limit: this.limit,
          search: this.search,
        }
      }).then((response) => {
        this.articles = response.data.data;
      })
    },
  },

  watch: {
    search() {
      this.getArticles()
    }
  },

  mounted() {
    this.getArticles()
  }
}
</script>

<template>
  <div className="ap-grid">
    <article-card v-for="article in articles" :id="article.id" :title="article.title" :likes="article.countOfLikes"
                  :image="article.image" :was-liked="article.is_liked"/>
  </div>
  <!--  <div>-->
  <!--    <articles-paginator class="ap-paginator" :page-count="10" next-text=">" prev-text="<" />-->
  <!--  </div>-->
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
  background-color: rgb(var(--c-primary-rgb));
  border-radius: 5px;
}

.ap-paginator:deep(a) {
  display: block;
  color: #fff;
  padding: 5px 10px;
}

.ap-paginator:deep(li.active) {
  background-color: rgb(var(--c-primary-light-rgb));
}

.ap-paginator:deep(li.disabled a) {
  text-decoration: none !important;
  cursor: default !important;
}
</style>