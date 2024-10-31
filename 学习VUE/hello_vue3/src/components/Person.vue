<template>
  <div class="person">
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <button @click="changeImg">点击换图</button>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import axios from "axios";
let dogList = reactive([
    'https://images.dog.ceo/breeds/spaniel-irish/n02102973_2902.jpg'
])

async function changeImg() {
  try{
    let res = await axios.get("https://dog.ceo/api/breeds/image/random")
    dogList.push(res.data.message)
  } catch (e) {
    alert(e)
  }
}

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