<script>
export default {
  name: "TestStatistic",
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div class="point-num">
      <div class="description">
        <div class ="text">Пройдено тестов:</div>
        <img src="src/assets/tests.svg" class="image">
        <div class="count"> {{count}}/3 </div>
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



.description{
  height: 80%;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text{
  width: 80%;
  line-height: 25px;
}

.image{
  width: 70%;
  height: 60px;
}

.count{
  font-size: 50px;
  line-height: 45px;
  align-items: center;
  color: #AF7911;
}

</style>