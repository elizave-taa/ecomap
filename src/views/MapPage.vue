<script>
import GlobalHeader from "/src/components/GlobalHeader.vue";
import KindsOfTrash from "/src/components/KindsOfTrash.vue";
import ButtonGeneral from "/src/components/ButtonGeneral.vue";
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import {BFormCheckbox} from "bootstrap-vue";
export default {
  components: {GlobalHeader, KindsOfTrash, ButtonGeneral, BFormCheckbox, yandexMap, ymapMarker},
  data() {
    return {
      checked1: false,
      checked2: false,
      settings: {
        apiKey: '2b56651c-9a27-46cb-8ec3-aaa9f5771ca2', // Индивидуальный ключ API
        lang: 'ru_RU', // Используемый язык
        coordorder: 'latlong', // Порядок задания географических координат
        debug: false, // Режим отладки
        version: '2.1' // Версия Я.Карт
      },
    }
  }
}
</script>

<template>
  <div class="map-page">

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
          <router-link class="link" to="/point">
            <div class="btn-text">Предложить свою точку</div>
          </router-link>
        </button-general>
      </div>
    </div>
    <div class="map">
      <yandex-map :settings="settings" :coords="[47.24, 39.73]" zoom="12.4">
        +++<my-component slot="balloon"></my-component>
      </yandex-map>
    </div>
  </div>
</template>

<style scoped>

.map-page{
  width: 100vw;
  height: 94vh;
  display: flex;
}
.left-nav {
  font-family: Inter, sans-serif;
  width: 25%;
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

.all-selected {
  font-weight: 500;
  font-size: 14px;
  color: #341A0C;
  width: 90%;
  margin-top: 15px;
  border-radius: 8px;
}

.btn-text{
  font-size: 16px;
  padding: 5px;
  line-height: 20px;
  color: #ffffff!important;
  text-decoration: none!important;
}

router-link:hover{
  color: #ffffff!important;
  text-decoration: none!important;
}

.btn {
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);
}

.map{
  width: 100%;
  height: 100%;
}
</style>