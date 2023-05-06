<script>
import {BAvatar, BButton, BPopover, BFormFile, BModal, FormFilePlugin} from "bootstrap-vue"
import{useUserStore} from "../PiniaStore.js";
import InfAboutRanks from "../components/InfAboutRanks.vue";
import axios from "axios";
import {getCookie, setCookie} from "../helpers/cookie.js";
export default {
  components: {InfAboutRanks, BAvatar, BButton, BPopover, BFormFile, BModal, FormFilePlugin, axios},
  created() {
    this.images.img1 = this.userAvatar;
  },
  data() {
    return {
      modalShow: false,
      friends_counter: 0,
      rank: 'Юный защитник природы',
      images: {
        img1: null,
      },
      userStore: useUserStore(),
      formData: null
    }
  },
  computed: {
    user() {
      return this.userStore.user
    },
    userNickname() { return this.user?.nickname },
    userAge() { return this.user?.age },
    userName() { return this.user?.name },
    userAvatar() {return this.user?.avatar}
  },
  methods: {
    rating() {
      if (this.user?.rate <= 30)
        return "Юный защитник природы"
      else if (this.user?.rate >= 50 && this.user?.rate < 90)
        return 'Опытный эколог';
      else if (this.user?.rate >= 90 && this.user?.rate < 170)
        return 'Ярый борец за экологию';
      else if (this.user?.rate >= 170 && this.user?.rate < 300)
        return 'Грета Тумберг';
      else if (this.user?.rate >= 300)
        return'Вы - сама природа';
    },
    cancel(){
      this.images[`img1`] = null;
      //this.userAvatar = '/src/assets/user.svg';
    },
    showModal1() {
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    },
    showModal2() {
      this.$root.$emit('bv::show::modal', 'modal-2', '#btnShow')
    },
    putImage(link){
      axios.put("profile", {avatar: link}
      ).then((response) =>{
        console.log(response.data)}).catch((error) => {
        this.wasError = true;
        console.log(error)});
    },
    sendImage(formData) {
      if(this.formData != null) {
        axios.post("images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => {
          let link = response.data.link;
          this.images[`img1`] = link;
          //this.userAvatar = link;
          this.putImage(link);
        });
      }
    },
    readFile(file) {
      let fr = new FileReader();
      fr.onload = ((file) => {
        return (e) => {
          this.images[`img1`] = e.target.result;
          //this.userAvatar = e.target.result;
        };
      })(file);
      fr.readAsDataURL(file);
    },
    handleChange(e) {
      let file = e.target.files[0];
      if (!file) return;
      this.readFile(file);
      this.formData = new FormData();
      this.formData.append("file", file);
    }
  }
}
</script>
<template>
        <div class="left">
          <div class="avatar">
            <b-button id="popover-3" class="avatar-btn">
                <b-avatar
                    rounded="sm"
                    size="8em"
                    class="line-image"
                    :src="images.img1">
                </b-avatar>
            </b-button>
            <b-popover
                placement="bottom"
                target="popover-3"
                triggers="focus">
              <b-button @click="showModal1()" class="edit-btn">Изменить фото</b-button>
              <b-button @click="showModal2()" class="edit-btn">Открыть фото</b-button>
              <b-button class="remove-btn" @click="cancel()">Удалить фото</b-button>
            </b-popover>

            <b-modal id="modal-1" title="Выберите картинку для вашей новой аватарки"  @close="cancel()" @cancel="cancel()" @ok="sendImage(this.formData)">
              <b-form-file accept=".jpg, .png, .jpeg"
                           ref="file1"
                            @change="handleChange($event)"
              ></b-form-file>
            </b-modal>
            <b-modal id="modal-2" centered class="modal-window" ok-only >
              <b-avatar
                  rounded="sm"
                  size="20em"
                  class="line-image"
                  :src="images.img1">
              </b-avatar>
            </b-modal>
            <div class="friends_likes">
              <div class="friends">
                <div class="counter">{{friends_counter}}</div>
                <svg width="30" height="22" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112z"/></svg>
              </div>
            </div>
          </div>
          <div class="about-me">
              <div class="user-name"> @{{userNickname}}</div>
                <b-button id="popover-2" class="rank-btn">
                  <div class="rank">{{rating()}}</div>
                </b-button>
                <b-popover
                    placement="bottom"
                    target="popover-2"
                    triggers="hover focus"
                > <inf-about-ranks/> </b-popover>
              <div class="status">
                {{userName}}, {{userAge}} лет
              </div>
            <div class="friends_likes-2">
              <div class="friends">
                <div class="counter">{{friends_counter}}</div>
                <svg width="30" height="22" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112z"/></svg>
              </div>
            </div>
          </div>
          </div>
</template>

<style scoped>
  .about-me{
    height: 85%;
    width: 60%;
}
  .left{
    display: flex;
    justify-content: space-around;
    width: 43%;
    height: 100%;
    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
    background-color: #ffffff;
    align-items: center;
    border-radius: 8px;
}
  #modal-2{
    width: 40px!important;
  }
.avatar-btn{
  padding: 0!important;
  }
.edit-btn{
  background-color: #668D6E;
  border: none!important;
  width: 140px;
  margin-bottom: 5px;
}
.remove-btn{
  border: none;
  background-color: #ce957b;
  width: 140px;
}
  .line-image{
    padding: 0;
  }
  .avatar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 85%;
}
  .friends_likes-2{
    display: none;
  }
  .user-name{
  font-size: 30px;
    margin-right: 15px;
}
  .rank{
color: #1c7430;
    display: flex;
}
  .rank:hover{
    cursor: pointer;
  }
  .status{
font-size: 15px;
    margin-top: 20px;
}
  .counter {
  margin-right: 5px;
}
  .counter:hover {
    cursor: pointer;
  }
  .friends_likes {
    display: flex;
    justify-content: space-around;
}
  .friends{
    display: flex;
}
  .rank-btn,
  .rank-btn:hover,
  .rank-btn:focus{
    padding: 0;
    background-color: #ffffff!important;
    border-color: transparent!important;
    text-decoration: none;
    box-shadow: none!important;
    margin-right: 3px;
    height: 20px!important;
  }
  @media (max-width: 995px) {
  .user-name{
    font-size: 23px;
  }
  .about-me{
    width: 50%;
  }
  .rank{
    font-size: 15px;
  }
  .left{
    max-height: 200px;
  }
  }
  @media (max-width: 768px) {
    .left{
      height: 150px;
      width: 100%;
      margin-bottom: 15px;
    }
    .user-name{
      font-size: 23px;
    }
    .about-me{
      width: 50%;
      height: 90%;
    }
    .rank{
      font-size: 15px;
    }
    .friends_likes{
      display: none;
    }
    .friends_likes-2{
      display: flex;
    }
    .status{
      font-size: 15px;
      margin-top: 5px;
      margin-bottom: 15px;
    }
  }
</style>