<script>
import {BButton} from "bootstrap-vue"
import {BTooltip} from "bootstrap-vue"
export default {
  components: {BButton, BTooltip }
}
</script>


<template>
  <div class="icons">


    <b-button id="tooltip-target-1" class="btn glass">
      <img alt="стекло" class="logo" src="/src/assets/glass.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-1" triggers="hover">
      Стекло
    </b-tooltip>

    <b-button id="tooltip-target-2" class="btn plastic">
      <img alt="Пластик" class="logo" src="/src/assets/plastic.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-2" triggers="hover">
      Пластик
    </b-tooltip>

    <b-button id="tooltip-target-3" class="btn paper">
      <img alt="бумага" class="logo" src="/src/assets/paper.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-3" triggers="hover">
      Бумага
    </b-tooltip>

    <b-button id="tooltip-target-4" class="btn battery">
      <img alt="батареи" class="logo" src="/src/assets/battery.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-4" triggers="hover">
      Батареи
    </b-tooltip>
  </div>

  <div class="icons">


    <b-button id="tooltip-target-5" class="btn clothes">
      <img alt="одежда" class="logo" src="/src/assets/clothes.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-5" triggers="hover">
      Одежда
    </b-tooltip>

    <b-button id="tooltip-target-6" class="btn metal">
      <img alt="одежда" class="logo-metal" src="/src/assets/metal.svg" />
    </b-button>
    <b-tooltip target="tooltip-target-6" triggers="hover">
      Металл
    </b-tooltip>

    <b-button id="tooltip-target-7" class="btn dangerous">
      <img alt="опасные отходы" class="logo" src="/src/assets/dangerous.svg " />
    </b-button>
    <b-tooltip target="tooltip-target-7" triggers="hover">
      Опасные отходы
    </b-tooltip>

    <b-button id="tooltip-target-8" class="btn lamps">
      <img alt="лампочки" class="logo" src="/src/assets/lamp.svg " />
    </b-button>
    <b-tooltip target="tooltip-target-8" triggers="hover">
      Лампочки
    </b-tooltip>
  </div>

  <div class="icons">


    <b-button id="tooltip-target-9" class="btn tetra">
      <img alt="тетра пак" class="logo" src="/src/assets/tetra.svg " />
    </b-button>
    <b-tooltip target="tooltip-target-9" triggers="hover">
      Тетра-Пак
    </b-tooltip>

    <b-button id="tooltip-target-10" class="btn technique">
      <img alt="бытовая техника" class="logo-metal" src="/src/assets/technique.svg " />
    </b-button>
    <b-tooltip target="tooltip-target-10" triggers="hover">
      Бытовая техника
    </b-tooltip>

    <b-button id="tooltip-target-11" class="btn lids">
      <img alt="шины" class="logo" src="/src/assets/lids.svg " />
    </b-button>
    <b-tooltip target="tooltip-target-11" triggers="hover">
      Пластиковые крышки
    </b-tooltip>

    <b-button id="tooltip-target-12" class="btn other">
      <img alt="другое" class="logo" src="/src/assets/other.svg " />
    </b-button>
    <b-tooltip target="tooltip-target-12" triggers="hover">
      Другое
    </b-tooltip>
  </div>
</template>

<style scoped>

.logo{
  width: 30px;
  height: 30px;
}

.logo-metal{
  width: 25px;
  height: 25px;
}

.icons{
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

.glass:hover,
.glass:focus
{
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: #aedeb4;
}

.plastic:hover,
.plastic:focus{
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: #e1aed1;
}


.paper:hover,
.paper:focus{
  background: #B0C4F9;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.battery:hover,
.battery:focus{
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: #ce957b;
}

.clothes:hover,
.clothes:focus{
  background: #FCFF72;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.metal:hover,
.metal:focus{
  background: #439F9A;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.dangerous:hover,
.dangerous:focus{
  background: #DB4F4F;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.lamps:hover,
.lamps:focus{
  background: #9C74BC;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.tetra:hover,
.tetra:focus{
  background: #EAD6BE;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.technique:hover,
.technique:focus{
  background: #7E8BAD;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.lids:hover,
.lids:focus{
  background: #B4FF69;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.other:hover,
.other:focus{
  background: #FFD789;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

</style>