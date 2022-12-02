<script>
import GlobalHeader from "../components/GlobalHeader.vue";
import {BAvatar, BToast, BButton} from "bootstrap-vue"
export default {
  name: "ProfilePage",
  components: {GlobalHeader, BAvatar, BToast, BButton},
  data() {
    return {
      modalShow: false,
      friends_counter: 0,
      likes_counter: 0,
      user_name: 'Имя Юзера'
    }
  },
}
</script>
<template>
        <div class="left">
          <div class="avatar">
            <b-avatar
                size="9em"
                class="line-image"
                src="/src/assets/add_photo.svg">
            </b-avatar>
            <div class="friends_likes">
              <div class="friends">
                <div class="counter">{{friends_counter}}</div>
                <svg width="30" height="22" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112z"/></svg>
              </div>
              <div class="likes">
                <div class="counter">{{likes_counter}}</div>
                <svg width="25" height="25" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
              </div>
            </div>
          </div>

          <div class="about-me">
            <div>
              <div class="user-name">{{user_name}}</div>
              <div class="rank">Юный защитник природы
                <svg width="18" height="18" viewBox="0 0 512 512"><path fill="currentColor" d="M389.053 126.3A302.909 302.909 0 0 0 280.012 18.15L272 13.516l-8.012 4.634A301.084 301.084 0 0 0 113.4 279.042c0 3.445.06 6.944.177 10.4c1.592 46.856 19.511 86.283 51.82 114.018c24.724 21.225 56.438 34.182 90.607 37.273V496h32V240H256v168.528c-54.064-6.263-107.873-44.455-110.444-120.174c-.106-3.095-.16-6.228-.16-9.312A270.286 270.286 0 0 1 272 50.673a270.286 270.286 0 0 1 126.6 228.369c0 3.084-.054 6.217-.16 9.313c-2.056 60.573-36.907 97.127-78.444 112.536v33.867a156.188 156.188 0 0 0 58.607-31.3c32.309-27.735 50.228-67.162 51.82-114.017c.117-3.456.177-6.955.177-10.4A300.948 300.948 0 0 0 389.053 126.3Z"/></svg>
              </div>
            </div>
            <div class="status">Для иных природа — это дрова, уголь, руда, или дача, или просто пейзаж. Для меня природа — это среда, из которой, как цветы, выросли все наши человеческие таланты.</div>
          </div>
        </div>
</template>

<style scoped>
  .app{
  margin: auto;
  font-family: Inter, sans-serif;
}

  .line-image{
    background-color: #D7D7D7!important;
  border-radius: 8px!important;
  margin-bottom: 20px;
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
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
}

  .avatar{
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .user-name{
    font-size: 25px;
  font-weight: 600;
  line-height: 27px;
}

  .rank{
    font-size: 16px;
  color: #209d31;
  margin-bottom: 20px;
}

  .status{
    font-size: 15px;
  line-height: 20px;
  width: 90%;
}

  .counter {
    font-size: 18px;
  font-weight: 600;
  margin-right: 5px;
}

  .friends_likes {
  width: 60%;
  display: flex;
  justify-content: space-around;
}

  .friends{
  display: flex;
}

  .likes{
  display: flex;
}

</style>