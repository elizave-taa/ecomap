<script>
import {BDropdown, BDropdownItem} from "bootstrap-vue"
import {RouterLink} from "vue-router"
export default {
  components: {BDropdown, BDropdownItem, RouterLink},
  data() {
    return {
      transparentRoutes: ['registration', 'new-point']
    }
  }
}
</script>

<template>
  <div class="global-header" :class="{'global-header-transparent': transparentRoutes.includes($route.name)}">
    <img alt="ecomap" class="logo" src="/src/assets/logo.svg" />
    <router-link class="link" to="/admin">Админ-панель</router-link>
    <router-link class="link" to="/we">О проекте</router-link>
    <router-link class="link" to="/articles">Статьи про экологию</router-link>
    <router-link class="link" to="/map">Смотреть карту</router-link>
    <b-dropdown id="dropdown-right" right text="Контакты" variant="primary" class="contacts">
      <b-dropdown-item href="#">Как с нами связаться?</b-dropdown-item>
      <hr/>
      <b-dropdown-item href="#">Контакт 1</b-dropdown-item>
      <b-dropdown-item href="#">Контакт 2</b-dropdown-item>
    </b-dropdown>
    <img alt="профиль" class="logo-user" src="/src/assets/user.svg" />
  </div>
</template>

<style scoped>
.global-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 150px;
  background-color: rgb(var(--c-primary-rgb));
  position: relative;
  z-index: 10;
}
.global-header-transparent {
  background-color: rgba(var(--c-primary-rgb), 0.75);
}
.logo {
  width: 25px;
  height: 23px;
}
.logo-user {
  cursor: pointer;
  width: 20px;
  height: 20px;
}
.link {
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: #fff !important;
}
.contacts:deep(button){
  padding: 0;
  background: none!important;
  border: none!important;
  font-family: Inter, sans-serif;
  font-size: 15px;
}
</style>