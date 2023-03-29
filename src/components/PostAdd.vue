<script>
import { BContainer, BRow, BCol, BFormGroup, BFormInput, BFormSelect } from "bootstrap-vue"
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  components: {
    BContainer, BRow, BCol, BFormGroup, BFormInput, BFormSelect, ckeditor: CKEditor.component
  },
  data() {
    return {
      name: null,
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
    }
  },
}
</script>

<template>
  <div class="rp-wrapper">
    <b-container>
      <div class="reg-page">
        <div class="top-menu">
          <button class="back-btn" @click="$router.go(-1)">
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"/></svg>
            Назад
          </button>
        </div>
        <div class="reg-form">
          <b-container>
            <b-row>
              <b-col class="reg-col">
                <b-form-group
                    class="reg-group"
                    label="Название"
                    label-for="input-name"
                >
                  <b-form-input class="reg-input" id="input-name" v-model="name"/>
                </b-form-group>
                <ckeditor :editor="editor" v-model="editorData"/>
              </b-col>
              <b-col class="reg-col">
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.rp-wrapper {
  background-image: url('/src/assets/map.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin-top: -37px;
  padding: 67px;
}

.reg-page {
  font-family: Inter,sans-serif;
}
.reg-form {
  background-color: rgba(var(--c-primary-rgb), 0.75);
  border-radius: 8px;
  padding: 35px 0;
}
.reg-group {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}
.reg-group:deep(div) {
  width: 100%;
}
.reg-group:deep(label) {
  color: #fff;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 500;
}
.reg-input {
  background: none !important;
  border-radius: 6px;
  color: #fff !important;
  font-size: 14px;
  width: 100%;
  margin-left: 40px;
}
.reg-input:deep(option) {
  background: #859F8A;
}
.reg-col {
  padding: 0 50px;
}
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.back-btn {
  background: none;
  border: none;
  padding: 0;
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  column-gap: 5px;
}
</style>