<script>
import { BContainer, BRow, BCol, BFormGroup, BFormInput } from "bootstrap-vue"
export default {
  components: {
    BContainer, BRow, BCol, BFormGroup, BFormInput
  },
  data() {
    return {
      cond: false,
    }
  },
  methods: {

  },
}
</script>

<template>
  <div class="reg-page">
    <div class="top-menu">
      <button class="back-btn">
        &lt; Назад
      </button>
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
              <b-form-input class="reg-input" id="input-email" v-model="email"/>
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
              <b-form-input class="reg-input" id="input-age" v-model="age"/>
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
              <b-form-input class="reg-input" id="input-gender" v-model="gender"/>
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
              <b-form-input class="reg-input" id="input-password" v-model="password"/>
            </b-form-group>
            <b-form-group
                class="reg-group mb-0"
                label="Подтверждение пароля"
                label-for="input-confirm-password"
            >
              <b-form-input class="reg-input" id="input-confirm-password" v-model="confirmPassword"/>
            </b-form-group>
          </b-col>
          <b-col class="reg-col to-right-bottom">
            <button class="reg-button">
              Зарегистрироваться
            </button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.reg-page {
  font-family: Inter,sans-serif;
}
.reg-form {
  background-color: rgba(82, 115, 85, 0.85);
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
.reg-col {
  padding: 0 50px;
}
.reg-button {
  background: #859F8A;
  color: #fff;
  border: 0;
  border-radius: 6px;
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
  background-color: #859F8A;
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
  background: none;
  border: none;
  padding: 0;
  color: #fff;
  font-weight: 500;
}
.custom-label {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
}
</style>