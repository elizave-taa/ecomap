<script>
import {
  BContainer,
  BRow,
  BCol,
} from "bootstrap-vue"
import ButtonGeneral from "../components/ButtonGeneral.vue"
import {RouterLink} from "vue-router"

export default {
  components: {
    BContainer,
    BRow,
    BCol,
    ButtonGeneral,
    RouterLink,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div class="adp-wrapper">
    <b-container class="adp-container">
      <b-row>
        <b-col>
          <button-general>
            Список предложенных точек
          </button-general>
        </b-col>
        <b-col>
          <router-link to="/admin/post/add">
            <button-general>
              Добавить статью
            </button-general>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.adp-container {
  padding: 30px 0;
  height: calc(100vh - 25px);

}
.adp-wrapper {
  background-color: #2d512d;
}
</style>