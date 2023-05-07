<script>
import tests from "/src/helpers/tests.js";
import Test from "./Test.vue";
import {useUserStore} from "../PiniaStore.js";
import {ModalPlugin, BModal, BButton } from 'bootstrap-vue'
export default {
  components: { BModal, ModalPlugin, BButton, Test },
  name: "TestStatistic",
  methods: {
    showModal() {
      this.$refs['modal-1'].show();
    },
  },
  data() {
    return {
      count: 0,
      tests: tests,
      pickedTest: null,
      userStore: useUserStore()
    }
  },
  computed: {
    user() {
      return this.userStore.user
    },
    userName(){ return this.user?.name}
  },
}
</script>

<template>
  <div class="point-num">
      <div class="description">
        <div class ="text">Пройдено тестов: </div>
        <div>
          <b-button class="btn" @click="showModal()">
            <img src="/src/assets/tests.svg" class="image">
            <div class="count"> {{count}}/3</div>
          </b-button>
        </div>
        <b-modal ref="modal-1"  size="lg" centered hide-footer hide-header class="modal-window">
          <div v-if="!pickedTest">
            <div class="image-container">
              <img alt="ecomap" class="logo" src="/src/assets/test.jpg" />
              <div class="centered"><div class="head">Здравствуйте, {{userName}}!</div>Давайте вместе будем учиться и узнавать новое</div>
            </div>
            <div class="head">Cписок тестов</div>
            <button class="test-list" v-for="test in tests" style="margin-right: 10px;" @click="pickedTest = test">
              {{test.title}}
            </button>
          </div>
          <div v-if="pickedTest">
            <Test
                :key="pickedTest.id"
                :test-data="pickedTest"
                @close="pickedTest = null"
            />
          </div>
        </b-modal>
      </div>
    </div>
</template>

<style scoped>

.point-num{
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.description{
  height: 70%;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo{
  width: 100%;
}
.btn,
.btn:hover,
.btn:focus{
  background: none!important;
  border: none!important;
  box-shadow: none!important;
}
.image-container {
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 10px;
}
.centered {
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 15px;
}
.text{
  width: 80%;
  line-height: 25px;
}
.image{
  width: 70%;
  height: 60px;
}
.test-list{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #accbb5;
  padding: 10px;
  width: 80%;
  border: none;
  border-radius: 8px;
  text-align: left;
}
.test-list:focus,
.test-list:hover{
  background-color: #8bb096;
}
.head{
  font-size: 25px;
  margin-bottom: 15px;
}
.count{
  font-size: 50px;
  line-height: 45px;
  align-items: center;
  color: #AF7911;
}
@media (max-width: 995px) {
  .point-num{
    max-height: 200px;
  }
  .description{
    height: 70%;
  }
  .head{
    font-size: 23px;
  }
  .test-list{
    font-size: 13px;
  }
}
@media (max-width: 768px) {
  .point-num{
    height: 170px;
    padding: 0;
  }
  .count{
    font-size: 40px;
  }
  .description{
    height: 90%;
  }
  .image{
    display: none;
  }
}
@media (max-width: 580px){
  .centered{
    width: 300px;
    height: 60px;
    font-size: 12px;
  }
  .head{
    font-size: 20px;
  }
  .test-list{
    width: 90%;
  }
}
@media (max-width: 580px){
  .centered{
    width: 250px;
    height: 45px;
    font-size: 10px;
  }
  .head {
    font-size: 15px;
    margin-bottom: 5px;
  }
  .test-list{
    font-size: 12px;
    width: 95%;
  }
}
</style>