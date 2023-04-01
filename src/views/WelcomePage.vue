<script>
import ButtonGeneral from "/src/components/ButtonGeneral.vue";
import AccountLogIn from "/src/components/AccountLogIn.vue";
import axios from "axios";
import { getCookie } from "../helpers/cookie.js";
export default {
  components: { ButtonGeneral, AccountLogIn, axios },
  name: "WelcomePage",
  created() {if (getCookie('jwt'))
    this.$router.push({name:
     'profile'})
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
          <button-general variant="limpid" >
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
</template>

<style scoped>
.app {
  background-image: url('/src/assets/map.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin-top: -35px;
}
.text-or{
  color: #ffffff;
  font-weight: 300;
  font-size : 16px;
}

.parent {
  width: 100vw;
  padding-top: 35px;
  font-family: Inter, sans-serif;
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 97vh;
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

.login-form{
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.second-container{
  height: 65%;
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

@media (max-width: 415px) {
  .login-form{
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .btn-text{
    font-size: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    line-height: 20px;
    color: #ffffff!important;
    text-decoration: none!important;
  }

  .login-form div{
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 380px) {
   .btn-text {
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    line-height: 20px;
    color: #ffffff !important;
    text-decoration: none !important;
  }
}

@media (max-width: 900px) {
  .second-container{
    display: none;
  }
  }

@media (max-width:  1200px){
  .login-form{
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .second-container{
    height: 40%;
  }
}


</style>