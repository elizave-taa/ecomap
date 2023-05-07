<script>
import BasicInformation from "../components/BasicInformation.vue";
import PointStatistic from "../components/PointStatistic.vue";
import RatingBlock from "../components/RatingBlock.vue";
import TestStatistic from "../components/TestStatistic.vue";
import InfAboutRanks from "../components/InfAboutRanks.vue";
import ArticleCard from "../components/ArticleCard.vue";
import PointCard from "../components/PointCard.vue";
import {BAvatar, BToast, BButton, BContainer, BRow, BCard, BTab, BTabs } from "bootstrap-vue"
import axios from "axios";
export default {
  name: "ProfilePage",
  components: { InfAboutRanks,
    BAvatar, BToast, BButton, BasicInformation, BRow, BCard, BTab, BTabs,
    PointStatistic, BContainer, RatingBlock, TestStatistic, ArticleCard, PointCard
  },
  data() {
    return {
      page: 1,
      limit: 999,
      articles: [],
      points: [],
    }
  },
  computed: {
  },
  methods: {
    getArticles() {
      axios.get("profile/liked", {
        params: {
          page: this.page,
          limit: this.limit,
        }
      }).then((response) => {
        this.articles = response.data.data;
      })
    },
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<template>
  <div class="app">
    <b-container class="main_container">
      <div class="row">
      <basic-information prefix="1"/>
        <div class="blocks">
          <div class="statistic"> <point-statistic/> </div>
          <div class="statistic"> <rating-block/> </div>
          <div class="statistic"> <test-statistic/> </div>
        </div>
      </div>
      <div class="row-1">
        <basic-information prefix="2"/>
        <div class="blocks">
          <div class="statistic"> <point-statistic/> </div>
          <div class="statistic"> <rating-block/> </div>
          <div class="statistic"> <test-statistic/> </div>
        </div>
      </div>

      <b-row class="favourites">
        <b-card class="second-row" >
          <b-tabs  small card align="center">
            <b-tab active>
              <template #title>
                <div class="title">Избранные точки</div>
              </template>
              <div class="ap-grid">
                <point-card></point-card>
                <point-card></point-card>
                <point-card></point-card>
              </div>
            </b-tab>
            <b-tab class="tab-title">
              <template #title>
                <div class="title">Любимые статьи</div>
              </template>
              <div class="ap-grid">
                <article-card v-for="article in articles" :id="article.id" :title="article.title" :likes="article.countOfLikes" :image="article.image"/>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-row>
    </b-container>

  </div>
</template>

<style scoped>
.app {
  background-size: cover;
  background-position: center;
  background-color: #BCCABF;
  font-family: Inter, sans-serif;
  padding-bottom: 0;
  height: 120%;
  min-height: 120vh;
}
.main_container{
  width: 100%;
  padding-top: 30px;
  align-items: center;
}
.row{
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.title{
  border-radius: 8px;
  padding: 3px;
  color: #25462a;
  font-weight: 500;
}
.second-row{
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
  border-radius: 8px!important;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.blocks{
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.statistic{
  width: 29%;
  height: 100%;
}
.statistic:hover{
  cursor: pointer;
  width: 30%;
  height: 102%;
}
.row-1{
  display: none;
}
.ap-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
}
@media (max-width: 995px) {
  .statistic{
    width: 32%;
  }
  .statistic:hover{
    width: 34%;
  }
  .blocks{
    width: 52%;
  }
  .row{
    height: 30%;
  }
  .row-1{
    display: none;
  }
  .favourites{
    display: flex;
  }
  .ap-grid{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .row{
    display: none;
  }
  .row-1{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .blocks{
    width: 100%;
  }
  .favourites{
    display: flex;
    width: 100%;
    margin-left:1px;
    margin-top: 20px;
  }
  .ap-grid{
    grid-template-columns: 1fr;
    margin-left: 20px;
    margin-right: 20px;
  }
}
@media (max-width: 515px) {
  .title{
    font-size: 12px;
    padding: 2px;
  }
}
</style>