<script>
import {BCard } from "bootstrap-vue";

export default {
  components: {
    BCard
  },
  name: "PointCard",
  data() {
    return {
      title: "",
      types: [],
      address: "",
      comment: ""
    }
  },
}
</script>

<template>
  <div class="card">
    <h4 class="ac-title">
      Название точки: {{ title }} <br/>
      Виды мусора:
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