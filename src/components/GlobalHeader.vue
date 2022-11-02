<script>
export default {
  props: {
    model: Object
  },
  data() {
    return {
      isOpen: false,
      emails: ['chueva.elizaveta03@gmail.com', 'chueva@sfedu.ru', 'Почта 3']
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },

  }
}

</script>

<template>
  <div class="global-header">
    <img alt="ecomap" class="logo" src="/src/assets/logo.svg" />
    <a class="link text" href="#">О нашем проекте</a>
    <a class="link" href="#">Статьи про экологию</a>
    <a class="link" href="#">Смотреть карту</a>

    <span class="in-header" @click="toggle">
    <div class="contacts" >Контакты</div>
    <span v-if="isOpen"><img alt="close" class="logo-arrow" src="/src/assets/arrow.svg" /></span>
    <span v-if="!isOpen"><img alt="open" class="logo-arrow" src="/src/assets/arrow_down.svg" /></span>
  </span>
  </div>

  <div class="inf" v-if="isOpen">
    <h3>Как с нами связаться?</h3>
    <p class="email" v-for="el in emails">
      - {{ el }}
    </p>
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