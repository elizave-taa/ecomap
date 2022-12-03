<script>
import {BCarousel, BCarouselSlide} from "bootstrap-vue"
export default {
  components: {BCarousel, BCarouselSlide },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}

</script>

<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="7000"
        controls
        indicators
        background="#56755C"
        img-width="1024"
        img-height="243"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          caption="О чем приложение Ecomap?"
          text="В нашей стране зачастую нет привычки отправлять мусор на переработку. Приложением EcoMap мы хотим напомнить людям о такой глобальной проблеме, как плохая экология, вдохновить на новый, современный образ жизни, который поможет почувствовать себя в гаромонии с окружающим миром"
          img-src="https://www.cvents.ch/media/event/image/l/e/leipzig_leadership_summit_2019-header.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.hotellagrotta.it/cms2016/wp-content/uploads/2016/07/settimana-in-montagna-sulle-dolomiti.jpg">
        <h3>Привет, мир! Давайте вместе поможем планете</h3>
      </b-carousel-slide>


      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="/src/assets/slide.png"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Наша цель:" img-blank img-alt=".">
        <p>
          Мы верим, что если дать людям доступ к быстрому поиску ближайших точек переработки мусора, большее количество человек начнут правильно утилизировать мусор, тем самым, внося вклад в сохранение природы.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>

  <div class="container">
    <div class="head-line">Наши преимущества:</div>
    <div class="advantages">
      <div class="point">
        <img class="image" src="/src/assets/point1.png">
        <div class="description">Удобная интерактивная карта</div>
      </div>
      <div class="point">
        <img class="image" src="/src/assets/point2.png">
        <div class="description">Приятный интерфейс</div>
      </div>
      <div class="point">
        <img class="image" src="/src/assets/point3.png">
        <div class="description">Возможность добавить свою точку</div>
      </div>
      <div class="point">
        <img class="image" src="/src/assets/point4.png">
        <div class="description">Блог об экологии</div>
      </div>
      <div class="point">
        <img class="image" src="/src/assets/point5.png">
        <div class="description">Получение рейтинга за добрые дела</div>
      </div>
    </div>
  </div>
  <div class="image-container">
    <img src="src/assets/background.png" alt="Snow" class="background">
    <div class="centered">Раздельный сбор:
      <p>1.Сокращает рост свалок.
      В год житель России производит 400 килограмм отходов
        (трудно представить, какой это большой объем!).</p>
      <p>2. Улучшает экологическую ситуацию и сохраняет здоровье
      Такая система уменьшает влияние на окружающую среду, сокращает вредные
      выбросы и восстанавливает природную систему. Следовательно, экология
      улучшается, что положительно вляет на иммунитет и здоровье населения.</p>
      <p>3. Решает проблему промышленных отходов
      Подробнее об этом можно прочесть в статье из нашего сборника</p></div>
  </div>

</template>

<style scoped>

.container{
  font-family: Inter, sans-serif;
  width: 90%;
  align-items: center;
  text-align: center;
}

.head-line {
  font-size: 25px;
  margin: 20px;
}

.point {
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.advantages {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.description{
  font-size: 13px;
  width: 100px;
  text-align: center;
  font-weight: 600;
}

.image {
 width: 110px;
  height: 110px;
  margin-bottom: 10px;
}

.background {
  background-size: cover;
  width: 100%;
  height: 500px;
}

.image-container {
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 19px;
}
</style>