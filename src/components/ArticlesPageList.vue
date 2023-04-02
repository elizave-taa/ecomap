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
      axios.get("http://80.90.190.25:5243/api/article", {
        headers: {
          "authorization": "daa1321becebd9767f1b9bee75506c5b0b6190e029c1bf203654db830b8b7d55"
        },
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
  <div class="ap-grid">
    <article-card v-for="article in articles" :id="article.id" :title="article.title" :likes="article.countOfLikes" :image="article.image"/>
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