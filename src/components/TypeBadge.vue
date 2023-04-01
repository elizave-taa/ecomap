<script>
import {BTooltip} from "bootstrap-vue";

export default {
  components: {
    BTooltip
  },
  props: {
    type: [String, Number],
    pointId: [String, Number],
  },

  data() {
    return {
      types: [
        {text: 'Бумага', icon: 'paper.svg'},
        {text: 'Стекло', icon: 'glass.svg'},
        {text: 'Пластик', icon: 'plastic.svg'},
        {text: 'Одежда', icon: 'clothes.svg'},
        {text: 'Тетра Пак', icon: 'tetra.svg'},
        {text: 'Батареи', icon: 'battery.svg'},
        {text: 'Металл', icon: 'metal.svg'},
        {text: 'Опасные отходы', icon: 'dangerous.svg'},
        {text: 'Лампочки', icon: 'lamps.svg'},
        {text: 'Бытовая техника', icon: 'technique.svg'},
        {text: 'Шины', icon: 'shini.svg'},
        {text: 'Другое', icon: 'other.svg'},
      ]
    }
  },

  computed: {
    currentType() {
      let typeInd = +this.type;
      if (typeInd < 0 || typeInd > 11)
        return null;
      return this.types[typeInd];
    },
    currentId() {
      return `${this.pointId}-${this.type}`
    }
  },
}
</script>

<template>
  <div v-if="currentType">
    <img :src="'/src/assets/map/' + currentType.icon" :id="currentId" class="tb-icon">
    <b-tooltip :target="currentId" triggers="hover">
      {{currentType.text}}
    </b-tooltip>
  </div>
</template>

<style scoped>
.tb-icon {
  width: 40px;
  height: auto;

}
</style>