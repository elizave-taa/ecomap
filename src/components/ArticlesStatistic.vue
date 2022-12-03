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
    <div class="line1"></div>
    <div class="line2"></div>
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
  background-color: #0c5460;
  width: 85%;
  height: 70%;
}

</style>