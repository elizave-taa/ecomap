<script>
import GlobalHeader from "../components/GlobalHeader.vue";
import ButtonGeneral from "../components/ButtonGeneral.vue";
import InfAboutNewPoint from "../components/InfAboutNewPoint.vue";
import { BContainer } from "bootstrap-vue"
export default {
  name: "DataPoint",
  components: { GlobalHeader, ButtonGeneral, InfAboutNewPoint, BContainer }
}
</script>

<template>
<div class="dp-wrapper">
  <b-container>
    <div class="top-menu">
      <button-general class="back-btn" @click="$router.go(-1)">
        Назад
      </button-general>
    </div>
    <inf-about-new-point class="dp-form"/>
  </b-container>
</div>
</template>

<style scoped>
.dp-wrapper {
  background-image: url('/src/assets/map.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin-top: -37px;
  padding: 67px;
}

.dp-form {
  background-color: rgba(var(--c-primary-rgb), 0.75);
  border-radius: 8px;
  padding: 35px 0;
}

.back-btn {
  font-size: 16px;
  padding: 6px 11px;
  line-height: 20px;
}

.top-menu {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}
</style>