<script>
import SearchInput from "./SearchInput.vue";
export default {
  components: {
    SearchInput
  },
  data() {
    return {
      search: null,
    }
  },
  methods: {},
}
</script>

<template>
  <header class="ap-header">
    <div>
    </div>
    <div class="ap-title-wrapper">
      <h2 class="ap-title">
        Мини-сборник статей об экологии
      </h2>
      <span class="ap-subtitle">
      возможно, это то, что изменит ваше отношение к окружающему миру
    </span>
    </div>
    <div class="ap-search-wrapper">
      <search-input @search="(s) => $emit('search', s)" class="ap-search"/>
    </div>
  </header>
  <div class="mobile-search">
    <search-input @search="(s) => $emit('search', s)" class="ap-search-2"/>
  </div>
</template>

<style scoped>
.ap-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-bottom: 30px;
}
.ap-title-wrapper {
  text-align: center;
}
.ap-title {
  font-weight: 600;
  font-size: 22px;
  color: #371D0E;
  margin-bottom: 8px;
}
.ap-subtitle {
  font-style: italic;
  color: #4E4D4D;
  font-weight: 300;
  font-size: 13px;
}
.ap-search-wrapper {
  justify-self: end;
}
.ap-search {
  max-width: 200px;
}
.mobile-search{
  display: none;
}
@media (max-width: 1025px){
  .ap-header {
    margin-bottom: 5px;
  }
  .ap-title{
    font-size: 20px;
  }
  .ap-subtitle{
    font-size: 16px;
  }
  .mobile-search{
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    justify-content: center;
  }
  .ap-search-wrapper{
    display: none;
  }
  .ap-search-2{
    width: 200px;
  }
}
@media (max-width: 500px){
  .ap-title{
    font-size: 19px;
  }
  .ap-subtitle{
    font-size: 14px;
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>