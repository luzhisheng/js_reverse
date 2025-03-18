<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">苏州</h2>
    <button @click="showLog">点我输出</button>
  </div>

</template>

<script setup>
import {ref, defineExpose} from "vue";

// 创建一个title2，用于存储ref标记的内容
let title2 = ref()
let a = ref()
let b = ref()
let c = ref()

function showLog(){
  console.log(title2.value)
}
defineExpose({a, b, c})
</script>


<style scoped>
.person {
  background-color: antiquewhite;
  box-shadow: 0 0 10px;
}

button {
  margin: 5px;
}
</style>