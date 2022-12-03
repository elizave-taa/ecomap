<script>
import ButtonLogIn from "/src/components/ButtonGeneral.vue";
import InputForm from "/src/components/InputForm.vue";
import {BFormInput, BModal} from "bootstrap-vue"
import ButtonGeneral from "./ButtonGeneral.vue";
import {RouterLink} from "vue-router";

export default {
  components: {ButtonGeneral, InputForm, ButtonLogIn, BFormInput, RouterLink, BModal},
  data() {
    return {
      email: '',
      password: '',
      modalShow: false
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
    handleLogin() {
      console.log(this.loginData)
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
        <button-general @click="modalShow = !modalShow">
          <span>Войти</span>
        </button-general>
        <b-modal v-model="modalShow">Кнопка "вход" пока не работает, нажмите на кнопку "продолжить без входа" и посмотрите, что уже есть в проекте Ecomap &#10084;</b-modal>
      </div>
      <div><h3>Еще нет аккаунта? <router-link class="link" to="/registration"><u>Регистрация</u></router-link></h3></div>
      <!--<router-link to=""></router-link> -->
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
  margin-bottom: 10px;
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
</style>