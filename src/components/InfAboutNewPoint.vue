<script>
import {BFormInput, BFormGroup, BFormCheckbox, BFormTextarea, BAvatarGroup, BAvatar} from "bootstrap-vue"
import ButtonGeneral from "./ButtonGeneral.vue";

export default {
  name: "EnterInformation",
  components: {ButtonGeneral, BFormInput, BFormGroup, BFormCheckbox, BFormTextarea, BAvatarGroup, BAvatar },
  data() {
    return {
      address: '',
      others: '',
      comment: '',
      selected: [], // Must be an array reference!
      options: [
        { text: 'Бумага', value: 'бумага' },
        { text: 'Стекло', value: 'стекло' },
        { text: 'Пластик', value: 'пластик' },
        { text: 'Одежда', value: 'одежда' },
        { text: 'Тетра Пак', value: 'тетра пак' }
      ]
    }
  }
}
</script>

<template>
  <div class="parts">
    <div class="left-part">
      <div class="head-line">Введите информацию о точке</div>

      <div class="line">
        <span class="point">Адрес</span>
        <b-form-input class="input" v-model="address"></b-form-input>
      </div>

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

      <div class="line">
        <span class="point">Другие</span>
        <b-form-input class="input" v-model="others"></b-form-input>
      </div>

      <div class="line">
        <span class="point">Комментарий</span>
        <b-form-textarea
            class="input-comment"
            id="textarea-default"
        ></b-form-textarea>
      </div>
    </div>

    <!--Здесь картинки-->
    <div class="right-part">
      <div>
        <div class="head-line">Добавьте фотографии</div>
        <div >
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

      <div>
        <div class="text-ecomap">
          Спасибо за вашу помощь! Мы рассмотрим вашу точку и пришлем ответ в течение 3 дней.
          С любовью, EcoMap &#10084;
        </div>
        <button-general variant="basic">
          <span class="button-text">Предложить свою точку</span>
        </button-general>
      </div>

    </div>

  </div>
</template>

<style scoped>

.parts{
  font-family: Inter, sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(82, 115, 89, 0.75);
  border-radius: 8px;
}

.left-part{
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-part{
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.head-line{
  color: #ffffff;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
}

.point{
  font-size: 16px;
  color: #ffffff;
  line-height: 35px;
}

.input {
  color: #ffffff!important;
  background: none;
  width: 65%;
  font-size: 16px!important;
  height: 30px;
  margin-bottom: 10px;
}

.input-comment {
  color: #ffffff!important;
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

.button-text{
  line-height: 35px;
  font-size: 20px;
  padding: 30px;
}

.line{
  display: flex;
  justify-content: space-between;
}

.line-image{
  margin-right: 25px;
  padding: 20px;
  background-color: rgba(133, 159, 138)!important;
}

.text-ecomap{
  color: #ffffff;
  font-size: 15px;
  width: 90%;
  margin-bottom: 20px;
}

.line-image:hover{
  box-shadow: 2px 2px #523F34;
  cursor: pointer;
}

.line-image:deep(button){
  background-color: white;
  padding: 30px;
}

.check-box:deep(label){
  color: #ffffff;
}
</style>