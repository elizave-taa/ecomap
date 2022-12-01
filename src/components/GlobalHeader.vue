<script>
import {BDropdown, BDropdownItem} from "bootstrap-vue"
import {RouterLink} from "vue-router"
export default {
  components: {BDropdown, BDropdownItem, RouterLink}
}
</script>

<template>
  <div class="global-header">
    <img alt="ecomap" class="logo" src="/src/assets/logo.svg" />
    <a class="link text" href="#">О нашем проекте</a>
    <router-link class="link" to="/articles">Статьи про экологию</router-link>
    <a class="link" href="#">Смотреть карту</a>
    <b-dropdown id="dropdown-right" right text="Контакты" variant="primary" class="contacts">
      <b-dropdown-item href="#">Как с нами связаться?</b-dropdown-item>
      <hr/>
      <b-dropdown-item href="#">Контакт 1</b-dropdown-item>
      <b-dropdown-item href="#">Контакт 2</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<style scoped>
.global-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 150px;
  background-color: rgba(82, 115, 89, 0.75);
  position: relative;
  z-index: 10;
}
.logo {
  width: 25px;
  height: 25px;
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