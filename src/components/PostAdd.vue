<script>
import {BContainer, BRow, BCol, BFormGroup, BFormInput, BFormSelect, BAvatar, BModal} from "bootstrap-vue"
import ButtonGeneral from "./ButtonGeneral.vue";
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";

export default {
  components: {
    BModal,
    ButtonGeneral,
    BContainer,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormSelect,
    ckeditor: CKEditor.component,
    BAvatar,
  },
  data() {
    return {
      name: null,
      editor: ClassicEditor,
      editorData: '',
      image: '/src/assets/add_photo.svg',
      template: 1,
    }
  },

  methods: {
    addPhoto() {
      this.$refs.file.click()
    },

    sendImage(formData) {
      axios.post("images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        let link = response.data.link;
        this.image = link;
      });
    },

    handleChange(e) {
      let file = e.target.files[0];
      if (!file) return;

      let formData = new FormData();
      formData.append("file", file);
      this.sendImage(formData);
    },

    clearForm() {
      this.name = null;
      this.editorData = '';
      this.image = '/src/assets/add_photo.svg';
      this.template = 1;
    },

    addArticle() {
      let payload = {
        title: this.name,
        content: this.editorData,
        image: this.image,
        template: this.template,
      }

      axios.post("article", payload).then(() => {
        this.$refs['modal-1'].show();
        this.clearForm();
      });
    },
  }
}
</script>

<template>
  <div class="pa-wrapper">
    <b-container>
      <div class="pa-page">
        <div class="pa-form">
          <b-container>
            <b-row>
              <b-col class="pa-col">
                <b-form-group
                    class="pa-group"
                    label="Название"
                    label-for="input-name"
                >
                  <b-form-input class="pa-input" id="input-name" v-model="name"/>
                </b-form-group>
                <div>
                  <label class="pa-content">Содержимое статьи</label>
                  <ckeditor :editor="editor" v-model="editorData" class="pa-editor"/>
                </div>
                <div class="pa-row">
                  <b-form-group
                      class="pa-image-group"
                      label="Изображение"
                  >
                    <b-avatar
                        size="10rem"
                        rounded="sm"
                        :src="image"
                        class="pa-image"
                        @click="addPhoto"
                        button
                    />
                    <input id="file-input" type="file" style="display: none" name="name" ref="file"
                           @change="handleChange"/>
                  </b-form-group>
                  <div>
                    <label class="pa-content">Цвет фона статьи</label>
                    <div class="pa-colors">
                      <div class="pa-color-green" :class="{'pa-color-active': template == 1}" @click="template = 1"></div>
                      <div class="pa-color-blue" :class="{'pa-color-active': template == 2}" @click="template = 2"></div>
                      <div class="pa-color-yellow" :class="{'pa-color-active': template == 3}" @click="template = 3"></div>
                      <div class="pa-color-pink" :class="{'pa-color-active': template == 4}" @click="template = 4"></div>
                    </div>
                  </div>
                </div>
                <div class="pa-actions">
                  <button-general class="pa-button" @click="addArticle">Добавить статью</button-general>
                </div>
                <b-modal ref="modal-1" busy hide-header>
                  <p class="my-4">Статья успешно добавлена</p>
                  <template #modal-footer>
                    <button-general class="modal-button" @click="$refs['modal-1'].hide();">
                      ОК
                    </button-general>
                  </template>
                </b-modal>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.pa-page {
  font-family: Inter, sans-serif;
}

.pa-form {
  background-color: rgb(var(--c-primary-rgb));
  border-radius: 8px;
  padding: 35px 0;
}

.pa-group {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}

.pa-group:deep(div) {
  width: 100%;
  margin-left: 40px;
}

.pa-group:deep(label), .pa-image-group:deep(legend), .pa-content {
  color: #fff;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 500;
}

.pa-input {
  background: none !important;
  border-radius: 6px;
  color: #fff !important;
  font-size: 14px;
  width: 100%;
}

.pa-input:deep(option) {
  background: #859F8A;
}

.pa-col {
  padding: 0 50px;
}

.pa-image {
  padding: 20px;
  background-color: rgb(var(--c-primary-light-rgb)) !important;
}

.pa-content {
  margin-bottom: 5px;
}

.pa-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.pa-colors {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.pa-color-green,
.pa-color-blue,
.pa-color-yellow,
.pa-color-pink {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.pa-color-green {
  background-color: #859F8A;
}

.pa-color-blue {
  background-color: #9AADBF;
}

.pa-color-yellow {
  background-color: #E5D8C3;
}

.pa-color-pink {
  background-color: #DEC2CE;
}

.pa-color-active {
  cursor: default;
}

.pa-color-active.pa-color-green {
  box-shadow: 0 0 20px 10px rgba(133, 159, 138, 0.5);
}

.pa-color-active.pa-color-blue {
  box-shadow: 0 0 20px 10px rgba(154, 173, 191, 0.5);
}

.pa-color-active.pa-color-yellow {
  box-shadow: 0 0 20px 10px rgba(229, 216, 195, 0.5);
}

.pa-color-active.pa-color-pink {
  box-shadow: 0 0 20px 10px rgba(222, 194, 206, 0.5);
}

.pa-actions {
  display: flex;
  justify-content: flex-end;
}

.pa-button {
  padding: 8px 20px;
}

.modal-button {
  padding: 10px 20px;
}
</style>