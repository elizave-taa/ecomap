<script>
import {BDropdown, BDropdownItem, BContainer} from "bootstrap-vue"
import {RouterLink} from "vue-router"
export default {
  components: {BDropdown, BDropdownItem, RouterLink, BContainer}
}
</script>

<template>
  <div class="global-header">
    <b-container class="main">
    <img alt="ecomap" class="logo" src="/src/assets/logo.svg" />
    <router-link class="link" to="/we">О проекте</router-link>
    <router-link class="link" to="/articles">Статьи про экологию</router-link>
    <router-link class="link" to="/map">Смотреть карту</router-link>
    <router-link class="link" to="/profile">Мой профиль</router-link>

      <img alt="карта" class="alt-logo" src="/src/assets/map-page.svg" />
      <img alt="о нас" class="alt-logo" src="/src/assets/about-us.svg" />
      <img alt="статьи" class="alt-logo" src="/src/assets/articles.svg" />
      <img alt="профиль" class="logo-user" src="/src/assets/user.svg" />
    </b-container>
  </div>

</template>

<style scoped>
.global-header {
  padding: 6px;
  background-color: rgba(82, 115, 89, 0.75);
  position: relative;
  z-index: 10;
}

.main{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  width: 100%!important;
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
.link {
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: #fff !important;
}
@media (max-width: 1050px) {
  .global-header {
    height: 100%;
    background-color: rgba(82, 115, 89, 0.75);
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
}
</style>