<script>
export default {
  props: { testData: Object },
  data() {
    return {
      wasAnswered: false,
      currentQuestionIndex: 0,
      countRightAnswers: 0,
      currentAnswerIndex: -1,
      isFinal: false,
    }
  },
  computed: {
    currentQuestion() {
      return this.testData.questions[this.currentQuestionIndex];
    },
    countQuestions() {
      return this.testData.questions.length;
    }
  },
  methods: {
    nextPage() {
      // Если вопросы еще остались, переключить вопрос и сбросить все
      if (this.countQuestions-1 > this.currentQuestionIndex) {
        this.currentQuestionIndex++;
        this.wasAnswered = false;
        this.currentAnswerIndex = -1;
      } else { // Иначе завершаем тест
        this.isFinal = true;
      }
    },
    chooseAnswer(ind) {
      // Если уже ответили на вопрос, ничего не делать
      if (this.wasAnswered) return;

      // Если ответ верный, увеличить кол-во верных ответов
      if (this.currentQuestion.answers[ind].isRight) {
        this.countRightAnswers++;
      }

      // Ставим после ответа индекс выбранного ответа и поднимаем флаг,
      // означающий, что уже был получен ответ на вопрос
      this.currentAnswerIndex = ind;
      this.wasAnswered = true;
    },
    getAnswerClass(ind) {
      // Если нет ответа, классы выдавать не будем
      if (!this.wasAnswered) return {};

      // Для удобства переменные-флаги
      const isChoosedAnswer = this.currentAnswerIndex === ind;
      const isRight = this.currentQuestion.answers[ind].isRight;

      // Верному ответу поставим модификатор --right, а если выбран неверный,
      // то ему модификатор --misstake
      return {
        'answer--right': isRight,
        'answer--misstake': isChoosedAnswer && !isRight,
      }
    }
  }
}
</script>

<template>
  <div class="test">
    <div class="header">
      <h4 class="heading">
        {{ testData.title }}
      </h4>
      <button class="button" @click="$emit('close')">
        Закрыть
      </button>
    </div>
    <div class="page">

      <div v-if="!isFinal">
        <div class="question">
          <div class="count-q">{{currentQuestion.index}}/{{testData.countQuestions}}</div>
          <div class="text">Вопрос: {{ currentQuestion.question }}</div>
        </div>
        <div
            class="answer"
            :class="getAnswerClass(index)"
            v-for="(ans,index) in currentQuestion.answers"
            @click="chooseAnswer(index)"
        >
          {{ ans.title }}
        </div>
        <div class="explanation" v-if="currentQuestion.explanation != '' && wasAnswered">
          {{currentQuestion.explanation}}
        </div>
        <button class="button" v-if="wasAnswered" @click="nextPage">
          Следующий вопрос
        </button>
      </div>
      <div v-else>
        Вы завершили тестирование и ответили правильно на
        {{ countRightAnswers }}/{{ countQuestions }} вопросов
        <div v-if="countRightAnswers < 3">Вам предстоит еще поучиться!</div>
        <div v-if="countRightAnswers >= 3 && countRightAnswers <= 5">Вы молодец, ваш уровень достаточно хороший</div>
        <div v-if="countRightAnswers >= 6">Отлично! Ecomap гордится вами</div>
      </div>
    </div>
  </div>
</template>

<style>
.test {
  margin: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
}
.question{
  font-size: 20px;
  margin-bottom: 10px;
}
.answer {
  background-color: #eee;
  border: 2px solid #eee;
  padding: 5px 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  cursor: pointer;
}
.answer:hover {
  background-color: #ddd;
}
.answer--right,
.answer--right:hover{
  background-color: lightgreen;
}
.button {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #accbb5;
  justify-content: center;
  padding: 0 15px 0 15px;
  line-height: 35px;
  border: none;
  border-radius: 8px;
}
.button:focus,
.button:hover{
  background-color: #8bb096;
}
.answer--misstake,
.answer--misstake:hover{
  background-color: lightcoral;
}
.heading {
  margin: 0;
  width: 80%;
}
.header {
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
}
.explanation{
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #accbb5;
  border-radius: 8px;
  padding: 10px;
}
@media (max-width: 995px) {
  .heading{
    font-size: 20px;
  }
  .button{
    line-height: 25px;
    font-size: 16px;
  }
}
@media (max-width: 600px) {
  .heading{
    font-size: 18px;
    line-height: 25px;
  }
  .text{
    font-size: 16px;
  }
  .explanation{
    font-size: 14px;
  }
}
@media (max-width: 450px){
  .test{
    padding: 15px;
    margin: 4px;
  }
  .heading{
    font-size: 15px;
    line-height: 20px;
  }
  .text{
    font-size: 14px;
  }
}
</style>