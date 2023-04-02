<script>
import {
  BFormInput,
  BFormGroup,
  BFormCheckbox,
  BFormTextarea,
  BAvatarGroup,
  BAvatar,
  BContainer,
  BRow,
  BCol,
  BModal,
} from "bootstrap-vue"
import ButtonGeneral from "./ButtonGeneral.vue";
import axios from "axios";
import { loadYmap } from "vue-yandex-maps"

export default {
  name: "EnterInformation",
  components: {
    ButtonGeneral,
    BFormInput,
    BFormGroup,
    BFormCheckbox,
    BFormTextarea,
    BAvatarGroup,
    BAvatar,
    BRow,
    BCol,
    BContainer,
    BModal,
  },
  data() {
    return {
      title: '',
      address: '',
      comment: '',
      types: [], // Must be an array reference!
      options: [
        {text: 'Бумага', value: 0},
        {text: 'Стекло', value: 1},
        {text: 'Пластик', value: 2},
        {text: 'Одежда', value: 3},
        {text: 'Тетра Пак', value: 4},
        {text: 'Батареи', value: 5},
        {text: 'Металл', value: 6},
        {text: 'Опасные отходы', value: 7},
        {text: 'Лампочки', value: 8},
        {text: 'Бытовая техника', value: 9},
        {text: 'Шины', value: 10},
        {text: 'Другое', value: 11},
      ],
      icons: [
        'paper.svg',
        'glass.svg',
        'plastic.svg',
        'clothes.svg',
        'tetra.svg',
        'battery.svg',
        'metal.svg',
        'dangerous.svg',
        'lamps.svg',
        'technique.svg',
        'shini.svg',
        'other.svg',
        'multi-point.svg',
      ],
      images: {
        img1: '/src/assets/add_photo.svg',
        img2: '/src/assets/add_photo.svg',
        img3: '/src/assets/add_photo.svg',
        img4: '/src/assets/add_photo.svg',
      },
      pointX: null,
      pointY: null,
    }
  },

  computed: {
    pointIcon() {
      if (this.types.length == 0) return null;
      if (this.types.length > 1) return this.icons[this.icons.length - 1];
      return this.icons[this.types[0]];
    },

    pointImages() {
      return Object.values(this.images).filter((img) => img != '/src/assets/add_photo.svg');
    },
  },

  methods: {
    addPhoto(i) {
      this.$refs[`file${i}`].click()
    },

    sendImage(formData, i) {
      axios.post("http://80.90.190.25:5243/api/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization": "daa1321becebd9767f1b9bee75506c5b0b6190e029c1bf203654db830b8b7d55"
        },
      }).then((response) => {
        let link = response.data.link;
        this.images[`img${i}`] = link;
      });
    },

    createPoint() {
      let point = {
        title: this.title,
        iconImageHref: this.pointIcon,
        address: this.address,
        pointX: this.pointX,
        pointY: this.pointY,
        types: JSON.stringify(this.types),
        images: this.pointImages,
        comment: this.comment,
      }

      axios.post("http://80.90.190.25:5243/api/map", point, {
        headers: {
          "authorization": "daa1321becebd9767f1b9bee75506c5b0b6190e029c1bf203654db830b8b7d55"
        },
      }).then(() => {
        this.$refs['modal-1'].show();
        this.clearForm();
      });
    },

    clearForm() {
      this.title = null;
      this.address = null;
      this.pointX = null;
      this.pointY = null;
      this.types = [];
      this.images = {
        img1: '/src/assets/add_photo.svg',
        img2: '/src/assets/add_photo.svg',
        img3: '/src/assets/add_photo.svg',
        img4: '/src/assets/add_photo.svg',
      };
      this.comment = null;
    },

    handleChange(e, i) {
      let file = e.target.files[0];
      if (!file) return;

      let formData = new FormData();
      formData.append("file", file);
      this.sendImage(formData, i);
    }
  },

  async mounted() {
    await loadYmap({
      apiKey: '2b56651c-9a27-46cb-8ec3-aaa9f5771ca2', // Индивидуальный ключ API
      lang: 'ru_RU', // Используемый язык
      coordorder: 'latlong', // Порядок задания географических координат
      debug: false, // Режим отладки
      version: '2.1' // Версия Я.Карт
    });
    let suggestView = new ymaps.SuggestView("address-input");
    suggestView.events.add('select', (event) => {
      let address = event.get('item').value;
      ymaps.geocode(address).then((res) => {
        let firstGeoObject = res.geoObjects.get(0);
        this.address = firstGeoObject.properties._data.text;
        let coords = firstGeoObject.geometry.getCoordinates();
        this.pointX = coords[0];
        this.pointY = coords[1];
      });
    });
  }
}
</script>

<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" class="inf-col">
          <div class="head-line">Введите информацию о точке</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="inf-col">
          <div class="line">
            <span class="point">Название точки</span>
            <b-form-input class="input" v-model="title"></b-form-input>
          </div>
          <div class="line">
            <span class="point">Адрес</span>
            <b-form-input class="input" v-model="address" id="address-input"></b-form-input>
          </div>
          <div>
            <span class="point">Виды мусора</span>
            <div class="checkboxes">
              <b-form-checkbox
                  v-for="option in options"
                  v-model="types"
                  :key="option.value"
                  :value="option.value"
                  name="flavour-3a"
                  class="check-box"
              >
                {{ option.text }}
              </b-form-checkbox>
            </div>
          </div>
        </b-col>
        <b-col md="6" class="inf-col inf-col-flex">
          <div>
            <div class="head-line">Добавьте фотографии</div>
            <div>
              <b-avatar
                  button
                  @click="addPhoto(1)"
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  :src="images.img1">
              </b-avatar>
              <b-avatar
                  button
                  @click="addPhoto(2)"
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  :src="images.img2">
              </b-avatar>
              <b-avatar
                  button
                  @click="addPhoto(3)"
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  :src="images.img3">
              </b-avatar>
              <b-avatar
                  button
                  @click="addPhoto(4)"
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  :src="images.img4">
              </b-avatar>
              <input id="file-input" type="file" style="display: none" name="name" ref="file1" @change="handleChange($event, 1)"/>
              <input id="file-input" type="file" style="display: none" name="name" ref="file2" @change="handleChange($event, 2)"/>
              <input id="file-input" type="file" style="display: none" name="name" ref="file3" @change="handleChange($event, 3)"/>
              <input id="file-input" type="file" style="display: none" name="name" ref="file4" @change="handleChange($event, 4)"/>
            </div>
            <div class="comment-block">
              <div class="point">Комментарий</div>
              <b-form-textarea
                  v-model="comment"
                  class="input-comment"
                  id="textarea-default"
              ></b-form-textarea>
            </div>
          </div>

          <div class="to-right-bottom">
            <button-general class="inf-button" @click="createPoint">
              Предложить свою точку
            </button-general>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-modal ref="modal-1" title="Спасибо за вашу помощь!" busy>
      <p class="my-4">Мы рассмотрим вашу точку и пришлем ответ в течение 3 дней.
        С любовью, EcoMap &#10084;</p>
      <template #modal-footer>
        <button-general class="modal-button" @click="$refs['modal-1'].hide();">
          ОК
        </button-general>
      </template>
    </b-modal>
  </div>
</template>

<style scoped>
.inf-col-flex {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.inf-button {
  padding: 12px 22px;
  font-size: 18px;
  font-weight: 500;
}

.inf-col {
  padding: 0 50px;
}

.to-right-bottom {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: auto;
}

.head-line {
  color: #ffffff;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
}

.point {
  font-size: 16px;
  color: #ffffff;
  line-height: 35px;
}

.input {
  color: #ffffff !important;
  background: none;
  width: 65%;
  font-size: 16px !important;
  height: 30px;
  margin-bottom: 10px;
}

.input-comment {
  color: #ffffff !important;
  background: none;
  width: 100%;
}

.input-comment:focus {
  background: none;
  border: #ffffff 2px solid;
  box-shadow: none;
}

.input:focus {
  background: none;
  border: #ffffff 2px solid;
  box-shadow: none;
}

.line {
  display: flex;
  justify-content: space-between;
}

.line-image {
  margin-right: 25px;
  padding: 20px;
  background-color: rgb(var(--c-primary-light-rgb)) !important;
}

.line-image:hover {
  box-shadow: none;
  cursor: pointer;
}

.line-image:deep(button) {
  background-color: white !important;
  padding: 30px;
}

.check-box:deep(label) {
  color: #ffffff;
}

.checkboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
}
.comment-block {
  margin-top: 20px;
  margin-bottom: 15px;
}
.modal-button {
  padding: 10px 20px;
}
</style>