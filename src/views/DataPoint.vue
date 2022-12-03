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
  <div class="main-container">
    <div class="back_link">
      <button-general variant="limpid">
        <router-link class="link" to="/map">
          <div class="btn-text">Назад</div>
        </router-link>
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
  margin-top: -37px;
}

.main-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.back_link {
  width: 77%;
  margin-bottom: 7px;
}

.btn-text{
  font-size: 16px;
  padding: 5px;
  line-height: 20px;
  color: #ffffff!important;
  text-decoration: none!important;
}

.link:hover{
  color: #ffffff!important;
  text-decoration: none!important;
}

.inf{
  width: 77%;
  height: 77%;
}

</style>