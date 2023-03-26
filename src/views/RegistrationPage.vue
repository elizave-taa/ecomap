<script>
import { BContainer, BRow, BCol, BFormGroup, BFormInput, BFormSelect } from "bootstrap-vue"
import ButtonGeneral from "../components/ButtonGeneral.vue"
export default {
  components: {
    BContainer, BRow, BCol, BFormGroup, BFormInput, BFormSelect, ButtonGeneral
  },
  data() {
    return {
      name: null,
      nickname: null,
      email: null,
      lastname: null,
      age: null,
      gender: null,
      password: null,
      confirmPassword: null,
      genders: [
        { value: 1, text: 'Мужской' },
        { value: 2, text: 'Женский' },
        { value: 3, text: 'Другой' }
      ]
    }
  },
  computed: {
    regData() {
      return {
        name: this.name,
        nickname: this.nickname,
        email: this.email,
        lastname: this.lastname,
        age: this.age,
        gender: this.gender,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }
    }
  },
  watch: {
    age() {
      if (!Number.isInteger(+this.age) || this.age < 0 || this.age > 111)
        this.age = null;
    }
  },
  methods: {
    handleRegistration() {
      console.log(this.regData)
    },
  },
}
</script>

<template>
  <div class="rp-wrapper">
    <b-container>
      <div class="reg-page">
        <div class="top-menu">
          <button-general class="back-btn" @click="$router.go(-1)">
              Назад
          </button-general>
          <div class="need-block">
            <span class="need-circle"></span>
            <p>Помечены необязательные поля</p>
          </div>
        </div>
        <div class="reg-form">
          <b-container>
            <b-row>
              <b-col class="reg-col">
                <b-form-group
                    class="reg-group"
                    label="Имя"
                    label-for="input-name"
                >
                  <b-form-input class="reg-input" id="input-name" v-model="name"/>
                </b-form-group>
                <b-form-group
                    class="reg-group"
                    label="Никнейм"
                    label-for="input-nickname"
                >
                  <b-form-input class="reg-input" id="input-nickname" v-model="nickname"/>
                </b-form-group>
                <b-form-group
                    class="reg-group"
                    label="Почта"
                    label-for="input-email"
                >
                  <b-form-input class="reg-input" id="input-email" v-model="email" type="email"/>
                </b-form-group>

              </b-col>
              <b-col class="reg-col">
                <b-form-group
                    class="reg-group"
                    label-for="input-lastname"
                >
                  <template #label>
                    <div class="custom-label">
                      Фамилия
                      <span class="need-circle"></span>
                    </div>
                  </template>
                  <b-form-input class="reg-input" id="input-lastname" v-model="lastname"/>
                </b-form-group>
                <b-form-group
                    class="reg-group"
                    label-for="input-age"
                >
                  <template #label>
                    <div class="custom-label">
                      Возраст
                      <span class="need-circle"></span>
                    </div>
                  </template>
                  <b-form-input class="reg-input" id="input-age" v-model="age" type="number"/>
                </b-form-group>
                <b-form-group
                    class="reg-group"
                    label-for="input-gender"
                >
                  <template #label>
                    <div class="custom-label">
                      Пол
                      <span class="need-circle"></span>
                    </div>
                  </template>
                  <b-form-select class="reg-input" v-model="gender" :options="genders" id="input-gender"/>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="mt-5">
              <b-col class="reg-col">
                <b-form-group
                    class="reg-group"
                    label="Пароль"
                    label-for="input-password"
                >
                  <b-form-input class="reg-input" id="input-password" v-model="password" type="password"/>
                </b-form-group>
                <b-form-group
                    class="reg-group mb-0"
                    label="Подтверждение пароля"
                    label-for="input-confirm-password"
                >
                  <b-form-input class="reg-input" id="input-confirm-password" v-model="confirmPassword" type="password"/>
                </b-form-group>
              </b-col>
              <b-col class="reg-col to-right-bottom">
                <button-general class="reg-button" @click="handleRegistration">
                  Зарегистрироваться
                </button-general>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.rp-wrapper {
  background-image: url('/src/assets/map.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin-top: -37px;
  padding: 67px;
}

.reg-page {
  font-family: Inter,sans-serif;
}
.reg-form {
  background-color: rgba(var(--c-primary-rgb), 0.75);
  border-radius: 8px;
  padding: 35px 0;
}
.reg-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.reg-group:deep(label) {
  color: #fff;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 500;
}
.reg-input {
  background: none !important;
  border-radius: 6px;
  color: #fff !important;
  font-size: 14px;
  width: 200px;
  margin-left: 20px;
}
.reg-input:deep(option) {
  background-color: rgb(var(--c-button-rgb));
}
.reg-input:deep(option):hover {
  background-color: rgb(var(--c-button-rgb));
}
.reg-col {
  padding: 0 50px;
}
.reg-button {
  padding: 12px 22px;
  font-size: 18px;
  font-weight: 500;
}
.to-right-bottom {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.need-circle {
  height: 20px;
  width: 20px;
  background-color: rgb(var(--c-primary-lightest-rgb));
  display: inline-block;
  border-radius: 20px;
}
.need-block {
  display: flex;
  align-items: center;
}
.need-block p {
  margin-bottom: 0;
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
.back-btn {
  font-size: 16px;
  padding: 6px 11px;
  line-height: 20px;
}
.custom-label {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
}
.reg-input[type="number"]::-webkit-outer-spin-button,
.reg-input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.reg-input[type="number"] {
  -moz-appearance: none;
  appearance: none;
}
.reg-input[type="number"]:hover,
.reg-input[type="number"]:focus {
  -moz-appearance: none;
  appearance: none;
}
.reg-input[type="number"]::-webkit-inner-spin-button,
.reg-input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>