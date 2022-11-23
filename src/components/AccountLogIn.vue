
<script>
import ButtonLogIn from "/src/components/ButtonGeneral.vue";
import InputForm from "/src/components/InputForm.vue";
import {BFormInput} from "bootstrap-vue"
export default {
  components: { InputForm, ButtonLogIn, BFormInput },
  data() {
    return {
      email: '',
      password: ''
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
        <button-log-in>
          <span>Войти</span>
        </button-log-in>
      </div>
      <div><h3>Еще нет аккаунта? <a class="link" href="#"><u>Регистрация</u></a></h3></div>
    </div>
</template>


<style scoped>

div{
  color: #ffffff;
}

span{
  padding: 20px;
  font-size: 22px;
  line-height: 27px;
}

.input {
  color: #ffffff!important;
  background: none;
  margin-bottom: 10px;
  width: 300px;
}

.input:focus {
  background: none;
  border: #ffffff 2px solid;
  box-shadow: none;
}

div h1{
  font-size: 35px;
  font-weight:  300;
  margin-bottom: 20px;
}
div h3{
  font-weight:  100;
  font-size: 18px;
}

.login-button{
  margin-top: 10px;
  padding: 8px 35px;
  font-size: 22px;
  margin-bottom: 10px;
}

.form-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:  30px 40px;
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