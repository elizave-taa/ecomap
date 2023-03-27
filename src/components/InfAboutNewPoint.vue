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
  BCol
} from "bootstrap-vue"
import ButtonGeneral from "./ButtonGeneral.vue";
import axios from "axios";

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
    BContainer
  },
  data() {
    return {
      address: '',
      others: '',
      comment: '',
      selected: [], // Must be an array reference!
      options: [
        {text: 'Бумага', value: 1},
        {text: 'Стекло', value: 2},
        {text: 'Пластик', value: 3},
        {text: 'Одежда', value: 4},
        {text: 'Тетра Пак', value: 5},
        {text: 'Батареи', value: 6},
        {text: 'Металл', value: 7},
        {text: 'Опасные отходы', value: 8},
        {text: 'Лампочки', value: 9},
        {text: 'Бытовая техника', value: 10},
        {text: 'Пластиковые крышки', value: 11},
        {text: 'Другое', value: 12},
      ],
      images: {
        img1: '/src/assets/add_photo.svg',
        img2: '/src/assets/add_photo.svg',
        img3: '/src/assets/add_photo.svg',
        img4: '/src/assets/add_photo.svg',
      }
    }
  },
  methods: {
    addPhoto(i) {
      this.$refs[`file${i}`].click()
    },
    readFile(file, i) {
      let fr = new FileReader();
      fr.onload = ((file) => {
        return (e) => {
          this.images[`img${i}`] = e.target.result;
        };
      })(file);
      fr.readAsDataURL(file);
    },
    sendImage(formData) {
      axios.post("http://80.90.190.25:5243/api/upload_image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    handleChange(e, i) {
      let file = e.target.files[0];
      if (!file) return;

      this.readFile(file, i);

      let formData = new FormData();
      formData.append("file", file);
      this.sendImage(formData);
    }
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
            <span class="point">Адрес</span>
            <b-form-input class="input" v-model="address"></b-form-input>
          </div>
          <div>
            <span class="point">Виды мусора</span>
            <div class="checkboxes">
              <b-form-checkbox
                  v-for="option in options"
                  v-model="selected"
                  :key="option.value"
                  :value="option.value"
                  name="flavour-3a"
                  class="check-box"
              >
                {{ option.text }}
              </b-form-checkbox>
            </div>
          </div>
          <div class="line">
            <span class="point">Комментарий</span>
            <b-form-textarea
                class="input-comment"
                id="textarea-default"
            ></b-form-textarea>
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
          </div>
          <div class="text-ecomap">
            Спасибо за вашу помощь! Мы рассмотрим вашу точку и пришлем ответ в течение 3 дней.
            С любовью, EcoMap &#10084;
          </div>
          <div class="to-right-bottom">
            <button-general class="inf-button">
              Предложить свою точку
            </button-general>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
  width: 65%;
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

.text-ecomap {
  color: #ffffff;
  font-size: 15px;
  width: 90%;
  margin-bottom: 20px;
  margin-top: 20px;
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
</style>