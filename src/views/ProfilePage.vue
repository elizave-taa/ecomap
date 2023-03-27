<script>
import GlobalHeader from "../components/GlobalHeader.vue";
import BasicInformation from "../components/BasicInformation.vue";
import PointStatistic from "../components/PointStatistic.vue";
import RatingBlock from "../components/RatingBlock.vue";
import TestStatistic from "../components/TestStatistic.vue";
import EventsBlock from "../components/EventsBlock.vue";
import InfAboutRanks from "../components/InfAboutRanks.vue";
import {BAvatar, BToast, BButton, BContainer} from "bootstrap-vue"
import Rating from "../components/RatingBlock.vue";
export default {
  name: "ProfilePage",
  components: {
    Rating, GlobalHeader, InfAboutRanks,
    BAvatar, BToast, BButton, BasicInformation,
    PointStatistic, BContainer, RatingBlock, TestStatistic, EventsBlock},
  data() {
    return {


    }
  },
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
          <div class="statistic"> <events-block/> </div>
        </div>

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
}

.row{
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  max-height: 225px;
}

.blocks{
  width: 54%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.statistic{
  width: 23%;
  height: 100%;
}

.statistic:hover{
  cursor: pointer;
  width: 24%;
  height: 102%;
}


</style>