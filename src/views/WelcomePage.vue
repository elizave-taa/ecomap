<script>
import ButtonGeneral from "/src/components/ButtonGeneral.vue";
import AccountLogIn from "/src/components/AccountLogIn.vue";
export default {
  components: { ButtonGeneral, AccountLogIn },
  methods: {
    loginWithoutAuth() {
      console.log()
    }
  }
}
</script>

<template>
  <div class="app">
    <div class="parent">
      <div class="login-form">
        <div><account-log-in/></div>
        <div class="text-or">ИЛИ</div>
        <div class="login-button">
          <button-general @click="loginWithoutAuth">
            <router-link class="link" to="/map">
              <div class="btn-text">Продолжить без входа</div>
            </router-link>
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
  width: 100%;
  height: 100vh;
}

span{
  padding: 40px;
  font-size: 20px;
  line-height: 40px;
  font-weight: 100;
}

.text-or{
  color: #ffffff;
  font-weight: 300;
  font-size : 16px;
}

.parent {
  padding-top: 10%;
  margin-left: 0;
  font-family: Inter, sans-serif;
  justify-content: space-around;
  display: flex;
}
h1{
  font-size: 65px;
  font-weight: 200;
}
h2{
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
}

.in-description{
  padding: 2px 20px 1px 20px;
  text-align: right;
}

.btn-text{
  font-size: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 10px;
  line-height: 30px;
  color: #ffffff!important;
  text-decoration: none!important;
}

.link:hover{
  color: #ffffff!important;
  text-decoration: none!important;
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