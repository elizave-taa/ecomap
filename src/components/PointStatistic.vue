<script>
import {useUserStore} from "../PiniaStore.js";
import {BButton, BPopover} from "bootstrap-vue";

export default {
  name: "PointStatistic",
  components: {
    BButton, BPopover
  },
  data() {
    return {
      userStore: useUserStore()
    }
  },
  computed: {
    user() {
      return this.userStore.user
    },
    userPoints() { return this.user?.points },
    userName(){ return this.user?.nickname}
  },
}
</script>

<template>
<div class="point-num">
    <div class="main-container">
      <div v-if="userPoints && userPoints.length < 10" class="count"> {{userPoints.length}} </div>
      <div v-if="userPoints && userPoints.length >= 10" class="count-small"> {{userPoints.length}} </div>
      <div class="description">
        <b-button class="btn-points" id="my-button"><div class ="text">Предложенных точек сбора</div></b-button>
        <b-popover triggers="hover focus" target="my-button" custom-class="my-popover-class">
          <template #title>Точки пользователя  {{userName}}</template>
          <div v-if="!userPoints || userPoints.length == 0">Пока не предложено ни одной точки</div>
          <div v-else>
            <ol v-for="item in userPoints" >
              <p>Название:  {{ item.title }} </p>
              <p>Адрес:  {{ item.address }} </p>
            </ol>
          </div>
        </b-popover>
      </div>
    </div>
</div>
</template>

<style scoped>
.point-num{
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main-container{
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.description{
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.text{
  width: 70%;
  line-height: 25px;
}
.count{
  font-size: 120px;
  line-height: 75px;
  align-items: center;
  color: #0c5460;
}
.count-small{
  font-size: 85px;
  line-height: 75px;
  align-items: center;
  color: #0c5460;
}
.btn-points:hover,
.btn-points:focus,
.btn-points{
  background: none!important;
  color: #000000;
  align-items: center;
  text-align: center;
  font-size: 14px;
  display: flex;
  justify-content: center!important;
  box-shadow: none!important;
  border: none!important;
  padding: 0!important;
  font-weight: 500;
}
</style>