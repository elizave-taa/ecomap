<script>
export default {
  name: "PointStatistic",
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div class="point-num">
    <div class="inside">
    <div class="line1">{{count}} статей предложено</div>
    </div>
  </div>
</template>

<style scoped>

.point-num{
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
  width:48%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inside{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c5460;
  border-radius: 8px;
  width: 85%;
  height: 70%;
}

.line1{
  margin-left: 10px;
  font-size: 22px;
  color: #ffffff;
}

</style>