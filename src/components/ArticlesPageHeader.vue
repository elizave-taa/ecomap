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
</template>

<style scoped>
.ap-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
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
</style>