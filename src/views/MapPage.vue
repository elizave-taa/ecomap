<script>
import GlobalHeader from "/src/components/GlobalHeader.vue";
import KindsOfTrash from "/src/components/KindsOfTrash.vue";
import ButtonGeneral from "/src/components/ButtonGeneral.vue";
import TypeBadge from "../components/TypeBadge.vue";
import {YandexMap, YandexMarker, YandexCollection, loadYmap} from 'vue-yandex-maps/dist/vue-yandex-maps.esm.js'
import {BFormCheckbox, BSidebar, BAvatar, SidebarPlugin, BButton} from "bootstrap-vue";
import axios from "axios";
import {useUserStore} from "../PiniaStore.js";

let mapInstance = null;

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
      sidebar1Opened: false,
      pointClicked: null,
      userStore: useUserStore(),
      favourites: [],
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

    async handleMapCreate(map) {
      mapInstance = map;

      await loadYmap();

      const sidebarBtn = new ymaps.control.Button({
        data: {
          content: 'Выбрать категорию'
        },
        options: {
          layout: ymaps.templateLayoutFactory.createClass(
              "<button class='mobile-sidebar-button'>" +
              "{{ data.content }}" +
              "</button>"
          ),
          maxWidth: 150
        },
      });
      const sidebarBtn1 = new ymaps.control.Button({
        data: {
          content: 'Предложить точку'
        },
        options: {
          layout: ymaps.templateLayoutFactory.createClass(
              "<button class='mobile-sidebar-button'>" +
              "{{ data.content }}" +
              "</button>"
          ),
          maxWidth: 150
        },
      });
      sidebarBtn1.events.add('click', () => {
        this.$router.push({name: 'new-point'})
      });
      sidebarBtn.events.add('click', () => {
        this.sidebar1Opened = true
      });
      mapInstance.controls.add(sidebarBtn, { float: 'none', position: { bottom: 80, left: 18 } });
      mapInstance.controls.add(sidebarBtn1, { float: 'none', position: { bottom: 80, right: 18 } });
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

      loadFavs() {
        axios.get("profile/favs", { params: {
                search: null,
                limit: 999,
                page: 1,
                allIncludes: false,
                types: JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
                isAccepted: true,
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 0, } }).then((response) => {
            this.favourites = response.data.points;
        })
      },

      addInFav(id) {
        axios.get("map/fav/" + id).then(() => {
            this.loadFavs();
        })
      },

      removeFromFav(id) {
          axios.get("map/unfav/" + id).then(() => {
              this.loadFavs();
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
    this.loadFavs();
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
          <div style="margin-top: 10px;">
              <button-general @click="addInFav(pointClicked.id)" class="mp-button" v-if="!favourites.some((p) => +p.id === +pointClicked.id)">
                  Добавить в избранное
              </button-general>
              <button-general @click="removeFromFav(pointClicked.id)" class="mp-button" v-else>
                  Удалить из избранных
              </button-general>
          </div>
        <div class="mp-admin" v-if="userStore.user?.is_admin">
          <button-general class="mp-button" @click="editPoint(pointClicked)">Редактировать</button-general>
          <button-general class="mp-button" variant="red" @click="deletePoint(pointClicked)">Удалить</button-general>
        </div>
      </div>
    </b-sidebar>

    <b-sidebar v-model="sidebar1Opened" left width="340px">
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
        <b-button @click="sidebar1Opened = !sidebar1Opened" class="ready-btn">Готово</b-button>
      </div>
    </b-sidebar>
  </div>
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

.ready-btn {
  background-color: #668D6E;
  padding: 0 20px 0 20px;
  border-radius: 8px;
  color: #ffffff;
  margin-top: 30px;
  line-height: 30px;
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

@media (max-width: 930px){
  .left-nav {
    display: none;
  }
  .map {
    width: 100%;
    height: 100%;
  }
  .ymap {
    width: 100%;
    height: 100%;
  }
}
</style>

<style>
.mobile-sidebar-button {
  border-radius: 8px!important;
  background-color: #668D6E!important;
  border: none!important;
  color: #ffffff;
  line-height: 30px;
  display: none;
}

@media (max-width: 930px) {
  .mobile-sidebar-button {
    border-radius: 8px !important;
    background-color: #668D6E !important;
    border: none !important;
    display: flex;
  }
}
</style>