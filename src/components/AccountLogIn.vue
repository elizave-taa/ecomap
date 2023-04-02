<script>
import ButtonLogIn from "/src/components/ButtonGeneral.vue";
import InputForm from "/src/components/InputForm.vue";
import {BFormInput, BModal} from "bootstrap-vue"
import ButtonGeneral from "./ButtonGeneral.vue";
import {RouterLink} from "vue-router";
import axios from "axios";
import {useUserStore} from "../PiniaStore.js";
import {setCookie} from "../helpers/cookie.js"

export default {
  components: {ButtonGeneral, InputForm, ButtonLogIn, BFormInput, RouterLink, BModal},
  data() {
    return {
      token:'',
      email: '',
      Password: '',
      wasError: false,
      userStore: useUserStore()
    }
  },
  computed: {
    loginData() {
      return {
        email: this.email,
        password: this.Password
      }
    }
  },
  methods: {
      accLogin(){
        axios.post("http://80.90.190.25:5243/api/login",this.loginData).then((response) =>
        {console.log(response);
          setCookie("jwt", response.data.token, {'max-age': 7*24*60*60});
          this.$router.push({name: 'profile'});
          this.userStore.fetchUser();
          console.log(response.data)}).catch((error) => {
          this.wasError = true;
          console.log(error)});
      }
  }
}
</script>

<template>
    <div class="form-login">
      <div class="login">Вход в аккаунт</div>

      <b-form-input class="input" v-model="email" placeholder="Введите почту"></b-form-input>
      <b-form-input class="input" id="input-password" placeholder="Введите пароль" v-model="Password" type="password"/>
      <div class="login-button">
        <button-general @click="accLogin">
          <span>Войти</span>
        </button-general>
      </div>
      <p class="mistake" v-if="wasError">Неверный пароль или логин!</p>
      <div class="reg">Еще нет аккаунта? <router-link class="link" to="/registration"><u>Регистрация</u></router-link></div>
    </div>
</template>

<style scoped>
div{
  color: #ffffff;
}

span{
  padding: 20px;
  font-size: 18px;
  line-height: 27px;
}

.input {
  color: #ffffff!important;
  background: none;
  margin-bottom: 10px;
  width: 250px;
  height: 35px;
}

.input:focus {
  background: none;
  border: #ffffff 2px solid;
  box-shadow: none;
}

.login{
  font-size: 25px;
  font-weight:  300;
  margin-bottom: 20px;
}

div h3{
  font-weight:  100;
  font-size: 16px;
}

.login-button{
  margin-top: 5px;
  padding: 10px;
  font-size: 20px;
}

.form-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:  20px 30px;
  font-family: Inter, sans-serif;
  background-color: rgba(var(--c-primary-rgb), 0.75);
  border: none;
  border-radius: 8px;
}

.link{
  color: #fff !important;
}

.link:hover{
  color: rgba(154,153,152)!important;
}

.mistake{
  font-size: 16px;
  line-height: 10px;
  color: #981111;
}

@media (max-width: 410px) {

  .login{
    font-size: 18px;
    font-weight:  300;
    margin-bottom: 10px;
  }
  .input {
    color: #ffffff!important;
    background: none;
    margin-bottom: 6px;
    width: 190px;
    height: 25px;
  }
  .mistake{
    font-size: 12px;
    line-height: 10px;
    color: #981111;
  }
  span{
    padding: 4px;
    font-size: 14px;
  }

  .reg{
    font-size: 12px;
  }
  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:  10px 20px;
    font-family: Inter, sans-serif;
    background-color: rgba(82, 115, 89, 0.75);
    border: none;
    border-radius: 8px;
  }
}
</style>