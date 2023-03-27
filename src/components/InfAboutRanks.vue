
<script>
export default {
  name: "InfAboutRanks"
}
</script>


<template>
<div class="form">
  <div class="header">Немного о рейтинге пользователей:</div>
  <hr/>
  <div class="line">
    <span class="num">10</span>
    <img src="src/assets/coins.svg" class="image">
    <span class="rank">Юный защитник природы</span>
  </div>
  <div class="line">
    <span class="num">20</span>
    <img src="src/assets/coins.svg" class="image">
    <span class="rank">Юный защитник природы</span>
  </div>
  <div class="line">
    <span class="num">40</span>
    <img src="src/assets/coins.svg" class="image">
    <span class="rank">Юный защитник природы</span>
  </div>
  <div class="line">
    <span class="num">80</span>
    <img src="src/assets/coins.svg" class="image">
    <span class="rank">Юный защитник природы</span>
  </div>
  <div class="line">
    <span class="num">100</span>
    <img src="src/assets/coins.svg" class="image">
    <span class="rank">Юный защитник природы</span>
  </div>
  <hr/>
  <div class="description">
    Как получить Eco-очки?
    Проходите тесты, взаимодействуйте с другими пользователями, предлагайте новые точки переработки мусора.
  </div>
</div>
</template>


<style scoped>

.form{
  width: 530px;
  height: 310px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
}

.header{
  font-size: 20px;
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
  margin-right: 5px;
  font-weight: bold;
  color: #1c7430;
}

.line{
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-bottom: 3px;
}

.description{
  font-size: 14px;
}

</style>