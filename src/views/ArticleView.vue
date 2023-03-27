<script>
import ButtonGeneral from "../components/ButtonGeneral.vue";
export default {
  components: {
    ButtonGeneral,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div class="av-page">
    <div class="av-content">
      <div class="av-header">
        <button-general variant="blue" @click="$router.go(-1)">
          назад
        </button-general>
        <span class="av-info">
          Источник: Plus One <br>
          Автор: Евгения Чернышёва
        </span>
      </div>
      <article class="av-article">
        <p class="av-p">
          1. Уменьшение количества свалок <br>
          Легальные свалки в России занимают около 4 млн га, ежегодно их площадь увеличивается на 300-400 тыс. га. Объемы твердых коммунальных отходов растут такими темпами, что, возможно, уже через шесть лет для них не останется места на полигонах. Сортировка мусора дома позволяет значительно увеличить объемы переработки. Чем больше мусора возвращается в производственный цикл, тем меньше земли требуется для его захоронения.
        </p>
        <p class="av-p">
          2. Забота о природе <br>
          На свалках при гниении мусора в почву и воду попадает фильтрат, который отравляет их. Полигоны — это еще и источники свалочного газа. Его основной компонент — метан, горючий и обладающий сильным парниковым эффектом. При горении мусора происходят выбросы опасных для здоровья человека и окружающей среды веществ, в том числе диоксинов и тяжелых металлов. Развитая система РСО помогает превратить большую часть отходов во вторсырье и предотвратить загрязнение окружающей среды.
        </p>
        <p class="av-p">
          3. Повторное использование ресурсов <br>
          На производство товаров повседневного спроса расходуется множество природных ресурсов: воды, древесины, полезных ископаемых. Раздельно собранные отходы легче превратить во вторсырье, из которого затем можно изготовить новую продукцию. Например, изделия из металла и стекла могут перерабатываться бесконечное количество раз, бумага — от пяти до семи раз, а пластик — один или два раза. При этом переработанный пластик можно смешать с другим сырьем — такой материал вполне пригоден для производства шпал для метрополитена или асфальтового покрытия.
        </p>
        <p class="av-p">
          4. Экономия <br>
          Сортировка мусора позволяет увеличить долю перерабатываемых отходов. Производство продукции из вторсырья обходится дешевле, чем производство из первичных материалов (с учетом затрат на электроэнергию, зарплаты, транспортировку и прочее на всех этапах), и требует меньшего количества ресурсов. Например, на производство алюминиевых банок из вторичного сырья уходит на 95% меньше энергии, чем на изготовление продукции из первичного. Экономия энергии при переработке бумаги составляет около 60%, а стекла — более 30%.
        </p>
      </article>
    </div>
    <div class="av-image">
      <div class="av-circle">
        <div class="av-sub-circle"/>
      </div>
    </div>
  </div>
  <div class="av-second">
    <div class="av-row">
      <img class="av-row-img" src="https://rsbor.ru/assets/templates/rsbor/lib/translations/recyclable_to_burn.jpg" alt="trash">
      <p class="av-row-text ta-right">
        Внедрение системы раздельного сбора также поможет организовать новые рабочие места. По оценкам Greenpeace, в сфере переработки в России может быть создано около 252 тыс. новых рабочих мест. Благодаря РСО наладится работа всей перерабатывающей отрасли: сейчас из-за дефицита сырья многие отечественные заводы остаются недозагруженными и вынуждены покупать отходы за рубежом.
      </p>
    </div>
    <div class="av-row">
      <p class="av-row-text">
        Проблемы сортировки <br>
        Опрос исследовательской компании Magram Market Research показал, что больше половины россиян готовы начать сортировать мусор, как только рядом с их домом появятся контейнеры для РСО. Как подсчитали в Greenpeace, в 2020 году только 18% жителей крупных российских городов имели доступ к инфраструктуре для раздельного сбора отходов. Это вдвое больше по сравнению с 2019 годом, но все еще недостаточно. Еще одна проблема связана с недоверием людей. 53% опрошенных Magram Market Research признались, что сортировать мусор бессмысленно, так как все «сваливается в одну кучу». Еще часть россиян считает, что сортировка требует много времени и доставляет неудобства, а некоторые просто не хотят этим заниматься. Решить проблему поможет просветительская работа: людям нужно объяснять, что мусор действительно перерабатывается и что раздельный сбор — это на самом деле не сложно.
      </p>
      <img class="av-row-img" src="https://icdn.lenta.ru/images/2020/01/13/10/20200113100326181/original_acc79dc438753787d46cca6a7ecd481b.jpg" alt="dump">
    </div>
  </div>
</template>

<style scoped>
.av-page {
  display: flex;
}

.av-image {
  width: 30%;
  background-image: url("https://images.hdqwalls.com/download/mountains-trees-ri-1024x768.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

.av-circle {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background: #95B4B4;
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
  background: #95B4B4;
  border: 5px #fff solid;
}

.av-content {
  background: #95B4B4;
  width: 70%;
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
  width: 70%;
}

.av-p {
  font-size: 14px;
}

.av-second {
  background: #628B94;
  padding: 60px 50px;
}

.av-row {
  display: flex;
  column-gap: 100px;
  align-items: center;
  margin-bottom: 50px;
}

.av-row-img {
  width: 30%;
  height: auto;
}

.av-row-text {
  width: 70%;
  color: #fff;
  font-style: italic;
  font-size: 14px;
}

.av-row-text.ta-right {
  text-align: right;
}
</style>