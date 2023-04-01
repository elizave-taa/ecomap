<script>
import {
  BContainer,
  BRow,
  BCol,
} from "bootstrap-vue"
import ButtonGeneral from "../components/ButtonGeneral.vue"
import {RouterLink} from "vue-router"
import ConfirmList from "../components/ConfirmList.vue"
import PostAdd from "../components/PostAdd.vue"

export default {
  components: {
    BContainer,
    BRow,
    BCol,
    ButtonGeneral,
    RouterLink,
    ConfirmList,
    PostAdd,
  },
  data() {
    return {
      activeTab: 'points'
    }
  },
  methods: {},
}
</script>

<template>
  <div class="adp-wrapper">
    <b-container class="adp-container">
      <div class="adp-header">
        <div class="adp-tabs">
          <button-general class="adp-left" :class="{'adp-active': activeTab == 'points'}" @click="activeTab = 'points'">
            Список предложенных точек
          </button-general>
          <button-general class="adp-right" :class="{'adp-active': activeTab == 'articles'}"
                          @click="activeTab = 'articles'">
            Добавить статью
          </button-general>
        </div>
      </div>
      <confirm-list v-if="activeTab == 'points'"/>
      <post-add v-if="activeTab == 'articles'"/>
    </b-container>
  </div>
</template>

<style scoped>
.adp-container {
  padding: 30px 0;
  min-height: calc(100vh - 35px);
}

.adp-wrapper {
  background-color: #bcc8c0;
}

.adp-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.adp-tabs {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
}

.adp-left {
  border-radius: 0;
  box-shadow: none;
  padding: 10px 15px;
}

.adp-right {
  border-radius: 0;
  box-shadow: none;
  padding: 10px 15px;
}

.adp-active {
  background-color: rgb(var(--c-primary-light-rgb)) !important;
  cursor: default !important;
}
</style>