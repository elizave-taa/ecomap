<script>
export default {
  name: "EventsBlock",
  data() {
    return {
      count: 0
    }
  },
  watch:{

  }
}
</script>

<template>
  <div class="point-num">
    <div class="main-container">
      <div v-if="count < 10" class="count"> {{count}} </div>
      <div v-if="count >= 10" class="count-small"> {{count}} </div>
      <div class="description">
        <div class ="text">Мероприятий организовано</div>
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
  color: #341a0c;
}

.count-small{
  font-size: 85px;
  line-height: 75px;
  align-items: center;
  color: #341a0c;
}

</style>