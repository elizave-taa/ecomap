<script>
import ButtonLogIn from "/src/components/ButtonGeneral.vue";
import InputForm from "/src/components/InputForm.vue";
import {BFormInput, BModal} from "bootstrap-vue"
import ButtonGeneral from "./ButtonGeneral.vue";
import {RouterLink} from "vue-router";
import axios from "axios";

export default {
  components: {ButtonGeneral, InputForm, ButtonLogIn, BFormInput, RouterLink, BModal},
  data() {
    return {
      email: '',
      password: '',
      wasError: false
    }
  },
  computed: {
    loginData() {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
      accLogin(){
        axios.post("http://80.90.190.25:5243/api/login",this.loginData).then((response) =>
        {console.log(response);
          this.$router.push({name: 'profile'});
          console.log(response.data)}).catch((error) => {
          this.wasError = true;
          console.log(error.response.data) });
      }
  }
}
</script>

<template>
    <div class="form-login">
      <div><h1>Вход в аккаунт</h1></div>

      <b-form-input class="input" v-model="email" placeholder="Введите почту"></b-form-input>
      <b-form-input class="input" v-model="password" placeholder="Введите пароль"></b-form-input>
      <div class="login-button">
        <button-general @click="accLogin">
          <span>Войти</span>
        </button-general>
      </div>
      <p class="mistake" v-if="wasError">Неверный пароль или логин!</p>
      <div>Еще нет аккаунта? <router-link class="link" to="/registration"><u>Регистрация</u></router-link></div>
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

div h1{
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
  background-color: rgba(82, 115, 89, 0.75);
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
</style>