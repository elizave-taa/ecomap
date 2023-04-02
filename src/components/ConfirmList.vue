<script>
import axios from "axios";
import {BAvatar} from "bootstrap-vue";
import TypeBadge from "./TypeBadge.vue"
import ButtonGeneral from "./ButtonGeneral.vue";

export default {
  components: {
    BAvatar,
    TypeBadge,
    ButtonGeneral,
  },
  data() {
    return {
      points: [],
    }
  },
  methods: {
    getPoints() {
      axios.get("http://80.90.190.25:5243/api/map", {
        params: {
          isAccepted: false,
          allIncludes: false,
          types: JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0,
        }
      }).then((response) => {
        this.points = response.data.points;
      })
    },

    deletePoint(id) {
      axios.delete(`http://80.90.190.25:5243/api/map/${id}`).then(() => {
        this.getPoints()
      })
    },

    acceptPoint(point) {
      point.isAccepted = true;
      axios.put(`http://80.90.190.25:5243/api/map/${point.id}`, point).then(() => {
        this.getPoints()
      })
    },
  },

  mounted() {
    this.getPoints()
  }
}
</script>

<template>
  <div v-for="point in points" class="cl-point">
    <h5>
      {{ point.title }}
    </h5>
    <h6>
      {{ point.address }}
    </h6>
    <div class="cl-icons">
      <type-badge v-for="type in JSON.parse(point.types)" :point-id="point.id" :type="type"/>
    </div>
    <div>
      <b-avatar
          v-for="image in point.images"
          size="5rem"
          rounded="sm"
          class="cl-image"
          :src="image">
      </b-avatar>
    </div>
    <p class="cl-comment">
      Комментарий: {{point.comment}}
    </p>
    <div class="cl-actions">
      <button-general class="cl-button" @click="acceptPoint(point)">Принять</button-general>
      <button-general class="cl-button" variant="red" @click="deletePoint(point.id)">Отклонить</button-general>
    </div>
  </div>
</template>

<style scoped>
.cl-point {
  background-color: rgb(var(--c-primary-rgb));
  border-radius: 8px;
  color: #fff;
  margin-bottom: 15px;
  padding: 15px;
}

.cl-image {
  margin-right: 10px;
}

.cl-comment {
  margin-top: 5px;
  margin-bottom: 0;
}

.cl-icons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.cl-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.cl-button {
  padding: 8px 20px;
}
</style>