
<script>
export default {
  props: {
  variant:{
    type: String,
    default:"basic"
  }
  },
  data() {
    return {
    }
  }

}


</script>

<template>
<button class="login-general" :class="variant" @click="$emit('click')">
  <slot/>
</button>
</template>


<style scoped>
.login-general{
  font-weight: 400;
  align-items: center;
  border-radius: 8px;
  border-color: transparent;
  color: white;
}
.login-general.limpid{
  background-color: rgba(82, 115, 89, 0.75);
}

.login-general.basic{
  background-color: rgba(133, 159, 138);
}

.login-general.dark{
 background-color: rgba(61, 97, 68);
}

.login-general.blue{
  background-color: #518590;
}

.login-general.blue:hover{
  background-color: #3a6974;
  cursor: pointer;
}

.login-general:hover{
  background-color: rgba(82, 115, 89);
  cursor: pointer;
}
</style>