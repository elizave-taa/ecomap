<script>
import GlobalHeader from "../components/GlobalHeader.vue";
import {BAvatar, BToast, BButton} from "bootstrap-vue"
export default {
  name: "ProfilePage",
  components: {GlobalHeader, BAvatar, BToast, BButton},
  data() {
    return {
      modalShow: false
    }
  },
}
</script>

<template>
  <global-header/>
<div class="app">
  <div class="main-container">
    <div class="basic-inf">
      <div class="left">
        <div class="avatar">
            <b-avatar
                size="10em"
              class="line-image"
              src="/src/assets/add_photo.svg">
            </b-avatar>
        </div>

        <div class="about-me">
          <div>
            <div class="user-name">@Имя Юзера</div>
            <div class="rank">Юный защитник природы</div>
          </div>
          <div class="status">Для иных природа — это дрова, уголь, руда, или дача, или просто пейзаж. Для меня природа — это среда, из которой, как цветы, выросли все наши человеческие таланты.</div>
        </div>
      </div>
    </div>

    <div class="activities">

    </div>
  </div>
</div>
</template>

<style scoped>
.app{
  margin: auto;
}

.line-image{
  background-color: #D7D7D7!important;
  border-radius: 8px!important;
}

.main-container{
  background-color: #F0FAF2;
  display: flex;
  height: 20vw;
}
.basic-inf{
  background-color: blue;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
}

.about-me{
  width: 65%;
  align-items: flex-start;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left{
  width: 80%;
  height: 85%;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.avatar{
  width: 35%;
  height: 85%;
  text-align: center;
}
.activities{
  background-color: blueviolet;
  width: 50%;
}

.user-name{
  font-size: 35px;
  font-weight: 600;
  line-height: 33px;
}

.rank{
  font-size: 20px;
  color: #209d31;
  margin-bottom: 25px;
}

.status{
  font-size: 20px;
  line-height: 23px;
  width: 90%;
}
</style>