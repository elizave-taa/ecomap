<script>
import ButtonGeneral from "../components/ButtonGeneral.vue";
import axios from "axios";

export default {
  components: {
    ButtonGeneral,
  },

  props: {
    id: [String, Number],
  },

  data() {
    return {
      article: null,
    }
  },

  methods: {
    getArticle() {
      axios.get(`http://80.90.190.25:5243/api/article/${this.id}`).then(response => {
        this.article = response.data
      })
    }
  },

  computed: {
    buttonVariant() {
      if (!this.article)
        return null;
      switch (+this.article.template) {
        case 1:
          return 'basic';
        case 2:
          return 'blue';
        case 3:
          return 'yellow';
        case 4:
          return 'pink';
      }
    },

    imageSrc() {
      if (!this.article)
        return null;
      switch (+this.article.template) {
        case 1:
          return '/src/assets/article/article-1.png';
        case 2:
          return '/src/assets/article/article-2.png';
        case 3:
          return '/src/assets/article/article-3.jpg';
        case 4:
          return '/src/assets/article/article-4.jpg';
      }
    },

    circleBackground() {
      if (!this.article)
        return null;
      switch (+this.article.template) {
        case 1:
          return 'rgb(var(--c-button-rgb))';
        case 2:
          return 'rgb(var(--c-button-blue-rgb))';
        case 3:
          return 'rgb(var(--c-button-yellow-rgb))';
        case 4:
          return 'rgb(var(--c-button-pink-rgb))';
      }
    }
  },

  mounted() {
    this.getArticle()
  }
}
</script>

<template>
  <div class="av-page" v-if="article">
    <div class="av-content" :class="`av-content-variant-${article.template}`">
      <div class="av-header">
        <button-general :variant="buttonVariant" @click="$router.go(-1)" class="av-back">
          Назад
        </button-general>
        <!--        <span class="av-info">-->
        <!--          Источник: Plus One <br>-->
        <!--          Автор: Евгения Чернышёва-->
        <!--        </span>-->
      </div>
      <h4 class="av-title">
        {{ article.title }}
      </h4>
      <article class="av-article" v-html="article.content">

      </article>
    </div>
    <div class="av-image" :style="{'background-image': `url(${imageSrc})`}">
      <div class="av-circle" :style="{'background-color': circleBackground}">
        <div class="av-sub-circle" :style="{'background-color': circleBackground}"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.av-page {
  display: flex;
}

.av-image {
  width: 30%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.av-circle {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-60%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.av-sub-circle {
  width: 65px;
  height: 65px;
  border-radius: 100%;
  border: 5px #fff solid;
}

.av-content {
  background: #95B4B4;
  width: 70%;
  min-height: 100vh;
}

.av-content-variant-1 {
  background-color: #859F8A;
}

.av-content-variant-2 {
  background-color: #9AADBF;
}

.av-content-variant-3 {
  background-color: #E5D8C3;
}

.av-content-variant-4 {
  background-color: #DEC2CE;
}

.av-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
  padding-left: 15px;
  padding-top: 15px;
}

.av-info {
  color: #fff;
  padding-right: 20px;
}

.av-article {
  border-top: 1px #000 solid;
  padding-top: 20px;
  margin-left: 40px;
  padding-bottom: 60px;
  width: 85%;
}

.av-title {
  margin-left: 40px;
  font-size: 20px;
}

.av-back {
  padding: 5px 10px;
}
</style>