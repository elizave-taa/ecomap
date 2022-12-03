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
  <div class="text">
    Предложил(а) точек переработки:
  </div>
  <div class="count">
    {{count}}
  </div>
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
  flex-direction: column;
  justify-content: center;
}

.inside{
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
}

.text{
  width: 50%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.count{
  font-size: 80px;
  line-height: 85px;
  width: 30%;
  text-align: right;
  color: #0c5460;
}

</style>