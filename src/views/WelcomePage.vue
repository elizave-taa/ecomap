<script>

import GlobalHeader from "/src/components/GlobalHeader.vue";
import ButtonGeneral from "/src/components/ButtonGeneral.vue";
import AccountLogIn from "/src/components/AccountLogIn.vue";

export default {
  components: { GlobalHeader, ButtonGeneral, AccountLogIn }
}
</script>

<template>
  <div class="app">
    <global-header />

    <div class="parent">

      <div class="login-form">

        <div><account-log-in/></div>
        <div class="text-or">ИЛИ</div>
        <div class="login-button">
          <button-general variant="limpid">
            <span>Продолжить без входа</span>
          </button-general>
        </div>
      </div>

      <div class ="second-container">
        <div class="description">
          <div class="in-description">
            <h1>EcoMap</h1>
            <h2>Наши усилия и действия на благо природы</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class = "description"></div>
  <!--  <RouterView />-->
</template>

<style scoped>
.app {
  background-image: url('/src/assets/map.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
}

span{
  padding: 30px 68px 30px 68px;
  font-size: 22px;
  line-height: 50px;
  font-weight: 100;
}

.text-or{
  color: #ffffff;
  font-weight: 300;
  font-size : 22px;
}

.parent {
  margin-top: 10%;
  margin-left: 0;
  font-family: Inter, sans-serif;
  justify-content: space-around;
  display: flex;
}
h1{
  font-size: 75px;
  font-weight: 200;
}
h2{
  font-size: 25px;
  font-style: italic;
  font-weight: 300;
}

.in-description{
  padding: 2px 20px 1px 20px;
  text-align: right;
}

.description{

  border-right: #ffffff solid 4px;
  text-align: center;
  line-height: 20px;
  color: #ffffff;
}


.login-form div{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

</style>