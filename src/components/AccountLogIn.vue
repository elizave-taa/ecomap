
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
      <!--<b-form-input v-model="email" placeholder="Введите почту"></b-form-input>
      <b-form-input v-model="password" placeholder="Введите пароль"></b-form-input> -->
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


div h1{
  font-size: 35px;
  font-weight:  300;
}
div h3{
  font-weight:  100;
  font-size: 18px;
}

.login-button{
  padding: 8px 35px;
  font-size: 22px;
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