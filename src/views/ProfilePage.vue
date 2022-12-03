<script>
import GlobalHeader from "../components/GlobalHeader.vue";
import BasicInformation from "../components/BasicInformation.vue";
import PointStatistic from "../components/PointStatistic.vue";
import ArticlesStatistic from "../components/ArticlesStatistic.vue";
import {BAvatar, BToast, BButton} from "bootstrap-vue"
export default {
  name: "ProfilePage",
  components: {GlobalHeader, BAvatar, BToast, BButton, BasicInformation, PointStatistic, ArticlesStatistic},
  data() {
    return {
      modalShow: false,
      friends_counter: 0,
      likes_counter: 0,
      user_name: 'Имя Юзера'
    }
  },
}
</script>

<template>
  <global-header/>
<div class="app">
 <div class="main-container">
    <div class="basic-inf">
      <basic-information/>
    </div>
    <div class="activities">
      <div class="blocks">
        <div class="line">
          <articles-statistic/>
          <img src="/src/assets/background.png" alt="picture" class="image">
        </div>
        <div class="line">
          <img src="/src/assets/background2.png" alt="picture" class="image">
          <point-statistic/>
        </div>
      </div>
    </div>
 </div>
</div>
</template>

<style scoped>
.app{
  margin: auto;
  font-family: Inter, sans-serif;
}

.main-container{
  background-color: #c9e0cf;
  display: flex;
  height: 23vw;
  justify-content: space-between;
}

.basic-inf{
  display: flex;
  width: 48%;
  justify-content: flex-end;
  align-items: center;
}

.activities {
  width: 48%;
  align-items: center;
  display: flex;
}

.blocks{
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.line{
  display: flex;
  justify-content: space-between;
  height: 48%;
  width: 100%;
}

.image{
  width: 48%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
}

</style>