<script>
import BasicInformation from "../components/BasicInformation.vue";
import PointStatistic from "../components/PointStatistic.vue";
import RatingBlock from "../components/RatingBlock.vue";
import TestStatistic from "../components/TestStatistic.vue";
import EventsBlock from "../components/EventsBlock.vue";
import InfAboutRanks from "../components/InfAboutRanks.vue";
import {BAvatar, BToast, BButton, BContainer, BRow, BCard, BTab, BTabs} from "bootstrap-vue"
export default {
  name: "ProfilePage",
  components: { InfAboutRanks,
    BAvatar, BToast, BButton, BasicInformation, BRow, BCard, BTab, BTabs,
    PointStatistic, BContainer, RatingBlock, TestStatistic, EventsBlock
  },
  data() {
  },
  computed: {
  }
}
</script>

<template>
  <div class="app">
    <b-container class="main_container">
      <b-row class="row">
      <basic-information/>
        <div class="blocks">
          <div class="statistic"> <point-statistic/> </div>
          <div class="statistic"> <rating-block/> </div>
          <div class="statistic"> <test-statistic/> </div>

        </div>
      </b-row>
      <b-row class="row">
      <b-card class="second-row" >
        <b-tabs card align="center">
          <b-tab  title="Избранные точки" active>
            <b-card-text>Скоро и здесь будет появляться контент! :)</b-card-text>
          </b-tab>
          <b-tab title="Понравившееся статьи">
            <b-card-text>Скоро и здесь будет появляться контент! :)</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.app{
  background-size: cover;
  background-position: center;
  background-color: #BCCABF;
  font-family: Inter, sans-serif;
}
.main_container{
  width: 100%;
  height: 95vh;
  padding-top: 30px;
  align-items: center;
}
.row{
  width: 103%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  max-height: 225px;
  margin-bottom: 30px;
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
</style>