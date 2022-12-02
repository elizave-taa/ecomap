<script>
import GlobalHeader from "/src/components/GlobalHeader.vue";
import KindsOfTrash from "/src/components/KindsOfTrash.vue";
import ButtonGeneral from "/src/components/ButtonGeneral.vue";
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import {BFormCheckbox} from "bootstrap-vue";
export default {
  components: {GlobalHeader, KindsOfTrash, ButtonGeneral, BFormCheckbox, yandexMap, ymapMarker },
  data() {
    return {
      checked1: false,
      checked2: false
    }
  }
}
</script>

<template>
  <div class="map-page">
    <global-header class="head"/>

    <div class="left-nav">
      <div class="choose-kind">
        <p>Какой вид мусора вы хотите выбросить?</p>
        <kinds-of-trash/>
        <div class="all-selected">
            <div>
              <b-form-checkbox v-model="checked1" name="check-button" switch>
                <div class="show">Все точки</div>
              </b-form-checkbox>
              <b-form-checkbox v-model="checked2" name="check-button" switch>
                <div class="show">Точки, которые принимают все выбранное</div>
              </b-form-checkbox>
            </div>
        </div>
      </div>
      <div>
        <button-general class="btn" variant="limpid">
          <span>Предложить новую точку</span>
        </button-general>
      </div>
    </div>
  </div>

</template>

<style scoped>

.left-nav {
  color: #341A0C;
  font-family: Inter, sans-serif;
  width: 23%;
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.choose-kind {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-weight: 500;
  width: 85%;
  font-size: 19px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
  color: #341A0C;
}

span {
  font-size: 16px;
  padding: 10px;
  line-height: 25px;
}

.all-selected {
  font-weight: 500;
  font-size: 14px;
  color: #341A0C;
  width: 80%;
  margin-top: 15px;
  border-radius: 8px;
}

.btn {
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);
}

.head {
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);
}
</style>