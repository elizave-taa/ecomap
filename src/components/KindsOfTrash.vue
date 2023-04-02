<script>
import {BButton, BTooltip} from "bootstrap-vue"

export default {
  props: {
    all: Boolean
  },
  components: {
    BButton,
    BTooltip
  },

  data() {
    return {
      types: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
  },

  watch: {
    all() {
      if (this.all && this.types.length < 12)
        this.types = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      else if (this.types.length > 0)
        this.types = []
      this.$emit("reload", this.types);
    }
  },

  methods: {
    toggleType(type) {
      this.types = this.types.includes(type) ? this.types.filter(i => i !== type) : [ ...this.types, type ];
      this.$emit("reload", this.types);
    }
  }
}
</script>


<template>
  <div class="icons">
    <b-button id="tooltip-target-1" class="btn glass" :class="{'pressed': types.includes(1)}" @click="toggleType(1)">
      <img alt="стекло" class="logo" src="/src/assets/glass.svg"/>
    </b-button>
    <b-tooltip target="tooltip-target-1" triggers="hover">
      Стекло
    </b-tooltip>

    <b-button id="tooltip-target-2" class="btn plastic" :class="{'pressed': types.includes(2)}" @click="toggleType(2)">
      <img alt="Пластик" class="logo" src="/src/assets/plastic.svg"/>
    </b-button>
    <b-tooltip target="tooltip-target-2" triggers="hover">
      Пластик
    </b-tooltip>

    <b-button id="tooltip-target-3" class="btn paper" :class="{'pressed': types.includes(0)}" @click="toggleType(0)">
      <img alt="бумага" class="logo" src="/src/assets/paper.svg"/>
    </b-button>
    <b-tooltip target="tooltip-target-3" triggers="hover">
      Бумага
    </b-tooltip>

    <b-button id="tooltip-target-4" class="btn battery" :class="{'pressed': types.includes(5)}" @click="toggleType(5)">
      <img alt="батареи" class="logo" src="/src/assets/battery.svg"/>
    </b-button>
    <b-tooltip target="tooltip-target-4" triggers="hover">
      Батареи
    </b-tooltip>
  </div>

  <div class="icons">
    <b-button id="tooltip-target-5" class="btn clothes" :class="{'pressed': types.includes(3)}" @click="toggleType(3)">
      <img alt="одежда" class="logo" src="/src/assets/clothes.svg"/>
    </b-button>
    <b-tooltip target="tooltip-target-5" triggers="hover">
      Одежда
    </b-tooltip>

    <b-button id="tooltip-target-6" class="btn metal" :class="{'pressed': types.includes(6)}" @click="toggleType(6)">
      <img alt="металл" class="logo-metal" src="/src/assets/metal.svg"/>
    </b-button>
    <b-tooltip target="tooltip-target-6" triggers="hover">
      Металл
    </b-tooltip>

    <b-button id="tooltip-target-7" class="btn dangerous" :class="{'pressed': types.includes(7)}" @click="toggleType(7)">
      <img alt="опасные отходы" class="logo" src="/src/assets/dangerous.svg "/>
    </b-button>
    <b-tooltip target="tooltip-target-7" triggers="hover">
      Опасные отходы
    </b-tooltip>

    <b-button id="tooltip-target-8" class="btn lamps" :class="{'pressed': types.includes(8)}" @click="toggleType(8)">
      <img alt="лампочки" class="logo" src="/src/assets/lamp.svg "/>
    </b-button>
    <b-tooltip target="tooltip-target-8" triggers="hover">
      Лампочки
    </b-tooltip>
  </div>

  <div class="icons">
    <b-button id="tooltip-target-9" class="btn tetra" :class="{'pressed': types.includes(4)}" @click="toggleType(4)">
      <img alt="тетра пак" class="logo" src="/src/assets/tetra.svg "/>
    </b-button>
    <b-tooltip target="tooltip-target-9" triggers="hover">
      Тетра-Пак
    </b-tooltip>

    <b-button id="tooltip-target-10" class="btn technique" :class="{'pressed': types.includes(9)}" @click="toggleType(9)">
      <img alt="бытовая техника" class="logo-metal" src="/src/assets/technique.svg "/>
    </b-button>
    <b-tooltip target="tooltip-target-10" triggers="hover">
      Бытовая техника
    </b-tooltip>

    <b-button id="tooltip-target-11" class="btn lids" :class="{'pressed': types.includes(10)}" @click="toggleType(10)">
      <img alt="шины" class="logo" src="/src/assets/lids.svg "/>
    </b-button>
    <b-tooltip target="tooltip-target-11" triggers="hover">
      Шины
    </b-tooltip>

    <b-button id="tooltip-target-12" class="btn other" :class="{'pressed': types.includes(11)}" @click="toggleType(11)">
      <img alt="другое" class="logo" src="/src/assets/other.svg "/>
    </b-button>
    <b-tooltip target="tooltip-target-12" triggers="hover">
      Другое
    </b-tooltip>
  </div>
</template>

<style scoped>

.logo {
  width: 30px;
  height: 30px;
}

.logo-metal {
  width: 25px;
  height: 25px;
}

.icons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 85%;
}

.btn {
  width: 45px;
  height: 45px;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  background-color: #656565;
}

.glass.pressed {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: #aedeb4;
}

.plastic.pressed {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: #e1aed1;
}

.paper.pressed {
  background: #B0C4F9;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.battery.pressed {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: #ce957b;
}

.clothes.pressed {
  background: #FCFF72;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.metal.pressed {
  background: #439F9A;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.dangerous.pressed {
  background: #DB4F4F;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.lamps.pressed {
  background: #9C74BC;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.tetra.pressed {
  background: #EAD6BE;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.technique.pressed {
  background: #7E8BAD;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.lids.pressed {
  background: #B4FF69;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.other.pressed {
  background: #FFD789;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
</style>