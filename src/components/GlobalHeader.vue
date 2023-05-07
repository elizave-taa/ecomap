<script>
import { BDropdown, BDropdownItem, BContainer, BIcon } from "bootstrap-vue"
import { useUserStore } from "../PiniaStore.js";
import { RouterLink } from "vue-router"
import { getCookie } from "../helpers/cookie.js"
import { deleteCookie } from "../helpers/cookie.js";

export default {
  components: { BDropdown, BDropdownItem, RouterLink, BContainer, BIcon },
  data() {
    return {
      transparentRoutes: ['registration', 'new-point'],
      userStore: useUserStore(),
      isAuth: false,
    }
  },

  created() {
    if (getCookie('jwt'))
      this.isAuth = true;
  },

  computed: {
    user() {
      return this.userStore.user
    },
    userAdmin() { return this.user?.is_admin },
    userAge() { return this.user?.age },
  },

  methods: {
    exit() {
      deleteCookie('jwt');
      this.$router.push({ name: 'welcome-page' });
      this.isAuth = false;
    }
  }
}
</script>

<template>
  <div class="global-header" :class="{'global-header-transparent': transparentRoutes.includes($route.name)}">
    <b-container class="main-1">
      <img alt="ecomap" class="logo" src="/src/assets/logo.svg" />
      <router-link v-if="userAdmin" class="link" to="/admin">Админ-панель</router-link>
      <router-link class="link" to="/we">О проекте</router-link>
      <router-link class="link" to="/articles">Статьи про экологию</router-link>
      <router-link class="link" to="/map">Смотреть карту</router-link>

      <router-link v-if="$route.name == 'profile'" class="link" to="/profile">
        <b-dropdown id="dropdown-1" text="Мой профиль" class="btn-exit">
          <b-dropdown-item @click="exit()"> Выход </b-dropdown-item>
          <b-dropdown-item @click="exit()"> Редактировать профиль </b-dropdown-item>
        </b-dropdown>
      </router-link>

      <router-link class="link" v-else to="/profile">
        Мой профиль
      </router-link>

    </b-container>
    <b-container class="main-2">

      <router-link to="/we">
        <img alt="о нас" class="alt-logo" src="/src/assets/about-us.svg" />
      </router-link>
      <router-link to="/articles">
        <img alt="статьи" class="alt-logo" src="/src/assets/articles.svg" />
      </router-link>
      <router-link to="/map">
        <img alt="карта" class="alt-logo" src="/src/assets/map-page.svg" />
      </router-link>
      <router-link v-if="$route.name != 'profile'" to="/profile">
        <img alt="карта" class="alt-logo" src="/src/assets/user.svg" />
      </router-link>
      <router-link v-if="$route.name == 'profile'" to="/profile">
        <b-dropdown id="dropdown-right" right class="btn-exit-2">
          <b-dropdown-item @click="exit()"> Выход </b-dropdown-item>
          <b-dropdown-item @click="exit()"> Редактировать профиль </b-dropdown-item>
        </b-dropdown>
      </router-link>
      <router-link v-if="userAdmin" to="/admin">
        <img alt="админ панель" class="logo-user" src="/src/assets/admin.svg" />
      </router-link>
    </b-container>
  </div>
</template>

<style scoped>
.global-header {
  padding: 6px 0;
  background-color: rgb(var(--c-primary-rgb));
  position: relative;
  z-index: 10;
}
.global-header-transparent {
  background-color: rgba(var(--c-primary-rgb), 0.75);
}
.main-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  width: 100% !important;
}
.main-2 {
  display: none;
}
.logo {
  width: 25px;
  height: 23px;
}
.logo-user {
  display: none;
}
.alt-logo{
  display: none;
}
.btn-exit:deep(button){
  padding: 0!important;
  background: none!important;
  font-size: 15px;
  font-weight: 400;
  border: none!important;
  box-shadow: none!important;
}
.link {
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: #fff !important;
}
@media (max-width: 1050px) {
  .main-1{
    display: none;
  }
  .main-2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    width: 100%!important;
  }
  .global-header {
    height: 100%;
    position: relative;
    z-index: 10;
  }
  .link{
    display: none;
  }
  .logo-user {
    display: flex;
    width: 25px;
    height: 25px;
  }
  .alt-logo{
    display: flex;
    width: 25px;
    height: 25px;
  }
  .logo{
    display: none;
  }
  .btn-exit-2:deep(button){
    background-image: url('/src/assets/user.svg')!important;
    background-color: transparent!important;
    width: 25px;
    height: 25px;
    border: none;
  }
  .btn-exit-2:deep(button):hover,
  .btn-exit-2:deep(button):focus{
    box-shadow: none!important;
    border: none!important;
  }
}
</style>
