
<script>
import {BCol, BContainer, BFormGroup, BFormInput, BFormSelect, BRow, BTable} from "bootstrap-vue";
export default {
  name: "InfAboutRanks",
  components: { BTable },
  data() {
  }
}
</script>


<template>
<div class="form">
  <div class="header">Немного о рейтинге пользователей:</div>
  <hr/>
  <div class="line">
    <div>
      <span class="num">30</span>
      <img src="/src/assets/coins.svg" class="image">
    </div>
    <span class="rank">Юный защитник природы</span>
  </div>
  <div class="line">
    <div>
      <span class="num">50</span>
      <img src="/src/assets/coins.svg" class="image">
    </div>
    <span class="rank">Опытный эколог</span>
  </div>
  <div class="line">
    <div>
      <span class="num">90</span>
      <img src="/src/assets/coins.svg" class="image">
    </div>
    <span class="rank">Ярый борец за экологию</span>
  </div>
  <div class="line">
    <div>
      <span class="num">180</span>
      <img src="/src/assets/coins.svg" class="image">
    </div>
    <span class="rank">Грета Тунберг</span>
  </div>
  <div class="line">
    <div>
      <span class="num">300</span>
      <img src="/src/assets/coins.svg" class="image">
    </div>
    <span class="rank">Вы - сама природа</span>
  </div>
  <hr/>
  <div class="description">Как получить Eco-очки?
    Предлагайте новые точки переработки мусора, проявляйте активность в приложении.</div>
</div>


</template>


<style scoped>

.form{
  width: 390px;
  height: 315px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
}

.header{
  font-size: 17px;
  margin-bottom: 5px;
}

.image{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.rank{
  line-height: 20px;
  margin-right: 5px;
  color: #1c7430;
}

.num{
  line-height: 25px;
  margin-right: 10px;
  font-weight: bold;
  color: #1c7430;
}

.line{
  display: flex;
  justify-content: space-between;
  width: 77%;
  margin-bottom: 3px;
}

.description{
  font-size: 14px;
}
@media(max-width: 420px){
  .form{
    width: 330px;
    height: 400px;
    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
    background-color: #ffffff;
    border-radius: 8px;
    padding: 8px;
  }
  .header{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .image{
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  .rank{
    line-height: 20px;
    margin-right: 5px;
    color: #1c7430;
  }
  .num{
    line-height: 25px;
    margin-right: 10px;
    font-weight: bold;
    color: #1c7430;
  }
  .line{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 3px;
  }
  .description{
    font-size: 13px;
  }
}

</style>