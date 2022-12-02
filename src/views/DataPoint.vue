<script>
import GlobalHeader from "../components/GlobalHeader.vue";
import ButtonGeneral from "../components/ButtonGeneral.vue";
import InfAboutNewPoint from "../components/InfAboutNewPoint.vue";
export default {
  name: "DataPoint",
  components: { GlobalHeader, ButtonGeneral, InfAboutNewPoint }
}
</script>

<template>
<div class="app">
  <global-header/>
  <div class="main-container">
    <div class="back_link">
      <button-general variant="limpid">
        Назад
      </button-general>
    </div>
    <inf-about-new-point class="inf"/>
  </div>
</div>
</template>


<style scoped>

.app {
  background-image: url('/src/assets/map.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  /*margin-top: -37px;*/
}

.main-container{
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.back_link {
  width: 85%;
  margin-bottom: 10px;
}

.inf{
  width: 85%;
  height: 85%;
}


</style>