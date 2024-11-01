<template>
  <div class="person">
    <h2>当前求和：{{ num }}</h2>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <button @click="changeImg">点击换图</button>
    <button @click="changeNum">点击求和</button>
  </div>
</template>

<script setup lang="ts">
import { dogList, changeImg } from '@/hooks/useDog'
import { num, changeNum } from '@/hooks/useSum'
</script>


<style scoped>
.person {
  background-color: antiquewhite;
  box-shadow: 0 0 10px;
}

button {
  margin: 5px;
}

img {
  height: 100px;
}
</style>