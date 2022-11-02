<script>
export default {
  props:{
    title:{
      type: String,
      default: ""
    },
    variant:{
      type: String,
      default:"white"
    }
  },
  name: "InputForm",

}
</script>


<template>
    <input class="input" type="text" :class="variant" :placeholder="title">
</template>


<style scoped>

.input{
  text-align: center;
  padding: 10px 15px 10px 15px;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-bottom: 7px;
  color: white;
  font-size: 18px;
  width: 288px;
}


.input.color{
  background-color: transparent;
  border: 1px solid white !important;

}

.input.white{
  background-color: white;
}

.input:focus{
  border: 2px solid white !important;
}


</style>