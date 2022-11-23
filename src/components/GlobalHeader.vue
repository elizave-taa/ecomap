<script>
import {BDropdown, BDropdownItem} from "bootstrap-vue"
export default {
  components: {BDropdown, BDropdownItem}
}

</script>

<template>
  <div class="global-header">
    <img alt="ecomap" class="logo" src="/src/assets/logo.svg" />
    <a class="link text" href="#">О нашем проекте</a>
    <a class="link" href="#">Статьи про экологию</a>
    <a class="link" href="#">Смотреть карту</a>

    <b-dropdown id="dropdown-right" right text="Right align" variant="primary" class="m-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
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
}
.logo {
  width: 35px;
  height: 35px;
}
.link {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #fff !important;
}

.in-header:hover{
  cursor: pointer;
}
.contacts{
  font-family: Inter, sans-serif;
  color: white;
  font-size: 18px;
  margin-right: 10px;
}

.logo-arrow{
  width: 15px;
}

.in-header{
  align-items: center;
  display: flex;
}

.inf{
 /* position: absolute;
  right: 0;*/
  justify-content: flex-end;
  background-color: rgba(82, 115, 89);
  text-align: left;
  padding: 20px;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #fff !important;
}

</style>