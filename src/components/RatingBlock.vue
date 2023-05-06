<script>
import{useUserStore} from "../PiniaStore.js";
export default {
  name: "Rating",
  data() {
    return {
      userStore: useUserStore()
    }
  },
  computed: {
    user() {
      return this.userStore.user
    },
    userRate() { return this.user?.rate },
  },
}
</script>

<template>
  <div class="point-num">
    <div class="main-container">
      <div class="description">
        <div class ="text">Набрано <br/> Eco-очков:</div>
      </div>
      <div class="coins">
        <div v-if="userRate < 10" class="count"> {{userRate}} </div>
        <div v-if="userRate < 100 && userRate >= 10" class="count-small"> {{userRate}} </div>
        <div v-if="userRate >= 100" class="count-small-2"> {{userRate}} </div>
        <img src="/src/assets/coins.svg" class="image">
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
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.text{
  width: 80%;
  line-height: 25px;
}

.coins{
  display: flex;
  align-items: center;
}

.image{
  width: 35px;
  height: 35px;
}
.count{
  font-size: 100px;
  line-height: 75px;
  align-items: center;
  color: #0b2e13;
}
.count-small{
  font-size: 70px;
  line-height: 75px;
  align-items: center;
  color: #0b2e13;
}
.count-small-2{
  font-size: 48px;
  line-height: 75px;
  align-items: center;
  color: #0b2e13;
}
@media (max-width: 995px) {
  .point-num{
    max-height: 200px;
  }
  .description{
    margin-top: 10px;
  }
  .text{
    line-height: 20px;
    font-size: 18px;
  }
  .image{
    width: 27px;
    height: 27px;
  }
  .count{
    font-size: 60px;
    line-height: 75px;
    align-items: center;
    color: #0b2e13;
  }
  .count-small{
    font-size: 60px;
    line-height: 75px;
    align-items: center;
    color: #0b2e13;
  }
  .count-small-2{
    font-size: 45px;
  }
}
@media (max-width: 768px) {
  .point-num{
    height: 170px;
  }
  .count{
    font-size: 80px;
  }
  .count-small{
    font-size: 50px;
  }
  .count-small-2{
    font-size: 55px;
  }
  .text{
    font-size: 15px;
    align-items: center;
    text-align: center;
  }
}
</style>