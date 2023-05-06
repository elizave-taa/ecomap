<script>
import GlobalHeader from "/src/components/GlobalHeader.vue";
import KindsOfTrash from "/src/components/KindsOfTrash.vue";
import ButtonGeneral from "/src/components/ButtonGeneral.vue";
import TypeBadge from "../components/TypeBadge.vue";
import {YandexMap, YandexMarker, YandexCollection} from 'vue-yandex-maps/dist/vue-yandex-maps.esm.js'
import {BFormCheckbox, BSidebar, BAvatar, SidebarPlugin} from "bootstrap-vue";
import axios from "axios";
import {useUserStore} from "../PiniaStore.js";

export default {
  components: {
    GlobalHeader,
    KindsOfTrash,
    ButtonGeneral,
    TypeBadge,
    BFormCheckbox,
    YandexMarker,
    YandexMap,
    YandexCollection,
    BSidebar,
    BAvatar,
    SidebarPlugin
  },
  data() {
    return {
      checked1: true,
      checked2: false,
      settings: {
        apiKey: '2b56651c-9a27-46cb-8ec3-aaa9f5771ca2', // Индивидуальный ключ API
        lang: 'ru_RU', // Используемый язык
        coordorder: 'latlong', // Порядок задания географических координат
        debug: false, // Режим отладки
        version: '2.1' // Версия Я.Карт
      },
      points: [],
      collectionKey: 5555,
      map: null,
      types: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      sidebarOpened: false,
      pointClicked: null,
      userStore: useUserStore(),
    }
  },

  methods: {
    getPoints(types) {
      axios.get("map", {
        params: {
          isAccepted: true,
          allIncludes: this.checked2,
          types: JSON.stringify(types),
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0,
        }
      }).then((response) => {
        this.points = response.data.points;
        this.$nextTick().then(() => {
          this.collectionKey++;
        })
      })
    },

    getMarkerOptions(point) {
      return {
        iconImageHref: '/src/assets/map/' + point.icon,
        iconLayout: "default#image",
        iconImageOffset: [-13, -13],
        iconImageSize: [30, 30]
      }
    },

    getMarkerProperties(point) {
      let {types} = point;
      if (typeof types == "string")
        types = JSON.parse(types);
      if (!Array.isArray(types))
        return {};
      let hint = types.reduce((accumulator, currentValue) => {
        return accumulator + ', ' + this.getTypeName(currentValue);
      }, '')
      hint = hint.slice(2);
      return {hintContent: this.capitalizeFirstLetter(hint)};
    },

    getTypeName(type) {
      type = +type;
      switch (type) {
        case 0:
          return 'бумага';
        case 1:
          return 'стекло';
        case 2:
          return 'пластик';
        case 3:
          return 'одежда';
        case 4:
          return 'тетра пак';
        case 5:
          return 'батареи';
        case 6:
          return 'металл';
        case 7:
          return 'опасные отходы';
        case 8:
          return 'лампочки';
        case 9:
          return 'бытовая техника';
        case 10:
          return 'шины';
        case 11:
          return 'другое';
        default:
          return 'другое';
      }
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    handleMapCreate(map) {
      this.map = map;
    },

    changeTypes(types) {
      this.types = types;
    },

    openMarker(point) {
      this.sidebarOpened = true;
      this.pointClicked = point;
    },

    editPoint({ id }) {
      this.$router.push({name: 'edit-point', params: { id }})
    },

    deletePoint({ id }) {
      axios.delete(`map/${id}`).then(() => {
        this.getPoints(this.types);
        this.pointClicked = null;
        this.sidebarOpened = false;
      })
    },

  },
  watch: {
    types() {
      this.getPoints(this.types);
      if (this.types.length == 0)
        this.checked1 = false;
      else if (this.types.length == 12)
        this.checked1 = true;
    },

    checked2() {
      this.getPoints(this.types)
    },
  },
  mounted() {
    this.getPoints(this.types);
  },
}
</script>

<template>
  <div class="map-page">
    <div class="left-nav">
      <div class="choose-kind">
        <p>Какой вид мусора вы хотите выбросить?</p>
        <kinds-of-trash @reload="changeTypes" :all="checked1"/>
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
      <div class="mp-btn-wrapper">
        <button-general class="mp-btn">
          <router-link class="mp-btn-link" to="/point">
            Предложить свою точку
          </router-link>
        </button-general>
      </div>
    </div>
    <div class="map">
      <yandex-map class="ymap" :settings="settings" :coordinates="[47.24, 39.73]" :zoom="13" @created="handleMapCreate">
        <yandex-collection :key="collectionKey">
          <yandex-marker v-for="point in points" :coordinates="[point.pointX, point.pointY]" :marker-id="point.id"
                         :options="getMarkerOptions(point)" :properties="getMarkerProperties(point)" :key="point.id"
                         @click="openMarker(point)">
          </yandex-marker>
        </yandex-collection>
      </yandex-map>
    </div>
    <b-sidebar v-model="sidebarOpened" right width="340px">
      <div v-if="pointClicked" class="mp-point">
        <h5>
          {{ pointClicked.title }}
        </h5>
        <h6 class="mp-address">
          {{ pointClicked.address }}
        </h6>
        <div class="mp-icons">
          <type-badge v-for="type in JSON.parse(pointClicked.types)" :point-id="pointClicked.id" :type="type"/>
        </div>
        <div class="mp-images">
          <b-avatar
              v-for="image in pointClicked.images"
              size="8rem"
              rounded="sm"
              :src="image">
          </b-avatar>
        </div>
        <p class="mp-comment">
          Комментарий: {{ pointClicked.comment }}
        </p>
        <div class="mp-admin" v-if="userStore.user?.is_admin">
          <button-general class="mp-button" @click="editPoint(pointClicked)">Редактировать</button-general>
          <button-general class="mp-button" variant="red" @click="deletePoint(pointClicked)">Удалить</button-general>
        </div>
      </div>
    </b-sidebar>
  </div>
  <!--<div class="side-bar">
    <b-button aria-controls="id" aria-expanded="false">Переключить боковую панель</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div>
        <p>
          123456
        </p>
      </div>
    </b-sidebar>
  </div> -->
</template>

<style scoped>
.map-page {
  width: 100vw;
  height: 94vh;
  display: flex;
}

.left-nav {
  font-family: Inter, sans-serif;
  width: 320px;
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

.mp-btn-wrapper {
  width: 90%;
}

.mp-btn {
  width: 100%;
}

.mp-btn-link {
  font-size: 16px;
  padding: 11px 0;
  display: inline-block;
  line-height: 20px;
  color: #ffffff !important;
  text-decoration: none !important;
}

.map {
  width: 100%;
  height: 100%;
}

.ymap {
  width: 100%;
  height: 100%;
}

.mp-point {
  padding: 10px 20px;
  color: #000;
}

.mp-images {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 15px 0;
}

.mp-address {
  margin: 15px 0;
}

.mp-comment {
  margin: 0;
  color: #000;
  font-size: 15px;
  text-align: left;
}

.mp-icons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.mp-button {
  padding: 8px 20px;
}

.mp-admin {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

@media (max-width: 800px){
  .left-nav{
    display: none;
  }
  .map{
    width: 100%;
    height: 100%;
  }
  .ymap{
    width: 100%;
    height: 100%;
  }
}
</style>