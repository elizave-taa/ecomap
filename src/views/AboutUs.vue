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
    <div class="image-container">
      <img src="/src/assets/background.png" loading="lazy" alt="Snow" class="background">
      <div class="centered"><div class="head">О чем приложение Ecomap?</div>
        В нашей стране зачастую нет привычки отправлять мусор на переработку. Мы верим, что если дать людям
        доступ к быстрому поиску ближайших точек, больше
        человек начнут правильно утилизировать мусор. </div>
    </div>
    <b-carousel
        class="header"
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
        <img loading="lazy" class="image" src="/src/assets/point1.png">
        <div class="description">Удобная интерактивная карта</div>
      </div>
      <div class="point">
        <img loading="lazy" class="image" src="/src/assets/point2.png">
        <div class="description">Приятный интерфейс</div>
      </div>
      <div class="point">
        <img loading="lazy" class="image" src="/src/assets/point3.png">
        <div class="description">Возможность добавить свою точку</div>
      </div>
      <div class="point">
        <img loading="lazy" class="image" src="/src/assets/point4.png">
        <div class="description">Блог об экологии</div>
      </div>
      <div class="point">
        <img loading="lazy" class="image" src="/src/assets/point5.png">
        <div class="description">Получение рейтинга за добрые дела</div>
      </div>
    </div>
  </div>

    <div class="container-2">
      <div class="head-line">Наши преимущества:</div>
      <div class="advantages">
        <div class="point">
          <img loading="lazy" class="image" src="/src/assets/point1.png">
          <div class="description">Удобная интерактивная карта</div>
        </div>
        <div class="point">
          <img loading="lazy" class="image" src="/src/assets/point2.png">
          <div class="description">Приятный интерфейс</div>
        </div>
        <div class="point">
          <img loading="lazy" class="image" src="/src/assets/point3.png">
          <div class="description">Возможность добавить точку</div>
        </div>
      </div>
    </div>
      <div class="container-2">
        <div class="advantages-2">
          <div class="point">
            <img loading="lazy" class="image" src="/src/assets/point4.png">
            <div class="description">Блог об экологии</div>
          </div>
          <div class="point">
            <img loading="lazy" class="image" src="/src/assets/point5.png">
            <div class="description">Получение рейтинга</div>
          </div>
        </div>

  </div>
  <div class="inf">
    <div class="info-field">
      <b>Раздельный сбор:</b> <br>
      <hr>
      <p >Сокращает рост свалок
        В год житель России производит 400 килограмм отходов
        (трудно представить, какой это большой объем!). Раздельный сбор
        позволяет перерабатывать до 90% отходов, образующихся у людей. </p>
      <p>
        Такая система уменьшает влияние на окружающую среду, сокращает вредные
        выбросы и восстанавливает природную систему. Следовательно, экология
        улучшается, что положительно вляет на иммунитет и здоровье населения.</p>
      <p> Решает проблему промышленных отходов</p>
      <hr>
      И конечно же, многие другие достоинства. Присоединяйтесь к eco-community с приложением EcoMap!&#10084;
    </div>
  </div>

</template>

<style scoped>
template{
  align-items: center;
}
.container{
  font-family: Inter, sans-serif;
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.head{
  font-size: 25px;
}
.head-line {
  font-size: 25px;
  margin: 20px;
}
.point {
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-2{
  display: none;
}
.advantages {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 35px;
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
  display: none;
}
.image-container {
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
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
.inf{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.info-field{
  background-color: #c3e8c3;
  border-radius: 8px;
  width: 93%;
  padding: 14px;
}

@media (max-width: 990px) {
.header{
  display: none;
}
  .background {
    display: flex;
    background-size: cover;
    width: 100%;
    height: 200px;
  }
  .advantages {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .image {
    width: 90px;
    height: 90px;
  }
}


@media (max-width: 770px) {
  .header {
    display: none;
  }
  .background {
    display: flex;
    background-size: cover;
    width: 100%;
  }
  .centered{
    font-size: 15px;
  }
  .head {
    font-size: 18px;
  }
  .container {
    display: none;
  }
  .container-2{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .advantages-2{
    display: flex;
    width: 60%;
    justify-content: space-around;
    margin-bottom: 25px;
  }
  .head-line{
    font-size: 22px;
  }
}

@media (max-width: 560px) {
 .head{
   font-size: 18px;
 }
  .description{
    font-size: 9px;
  }
  .image{
    width: 75px;
    height: 75px;
  }
  .description{
    font-size: 14px;
  }
  .head{
    font-size: 17px;
  }
}
@media (max-width: 480px) {
  .head{
    font-size: 16px;
  }
  .head-line{
    font-size: 20px;
  }
}
</style>