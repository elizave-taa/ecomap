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
        {text: 'Бумага', value: 'бумага'},
        {text: 'Стекло', value: 'стекло'},
        {text: 'Пластик', value: 'пластик'},
        {text: 'Одежда', value: 'одежда'},
        {text: 'Тетра Пак', value: 'тетра пак'}
      ]
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
            <b-form-group
                v-slot="{ ariaDescribedby }"
            >
              <b-form-checkbox
                  v-for="option in options"
                  v-model="selected"
                  :key="option.value"
                  :value="option.value"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-3a"
                  class="check-box"
              >
                {{ option.text }}
              </b-form-checkbox>
            </b-form-group>
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
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  src="/src/assets/add_photo.svg">
              </b-avatar>
              <b-avatar
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  src="/src/assets/add_photo.svg">
              </b-avatar>
              <b-avatar
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  src="/src/assets/add_photo.svg">
              </b-avatar>
              <b-avatar
                  size="4rem"
                  rounded="sm"
                  class="line-image"
                  src="/src/assets/add_photo.svg">
              </b-avatar>
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
  box-shadow: 2px 2px #523F34;
  cursor: pointer;
}

.line-image:deep(button) {
  background-color: white !important;
  padding: 30px;
}

.check-box:deep(label) {
  color: #ffffff;
}
</style>