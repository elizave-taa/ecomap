<script>
import {BCard } from "bootstrap-vue";
import TypeBadge from "./TypeBadge.vue";

export default {
  components: {
    BCard, TypeBadge
  },
  name: "PointCard",
    props: {
      point: Object,
    },
  data() {
    return {
      title: this.point.title,
      types: this.point.types,
      address: this.point.address,
      comment: this.point.comment
    }
  },
}
</script>

<template>
  <div class="card">
    <h4 class="ac-title">
      Название точки: {{ title }} <br/>
      <div>
          Виды мусора:
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <type-badge v-for="type in types" :point-id="point.id" :type="type" />
          </div>
      </div>
      <br/>
      Адрес: {{address}} <br/>
      Комментарий: {{ comment }}
    </h4>

  </div>
</template>

<style scoped>
.card{
  padding: 10px;
  background-color: #efe7cd;
  max-width: 300px;
}
.ac-title{
  font-size: 15px;
  line-height: 30px;
}
</style>