<template>
  <div class="count">
    <h2>当前求和:{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let sum = ref(1)
let n = ref(1)

function add(){
  sum.value += n.value
}
function minus(){
  sum.value -= n.value
}
</script>

<style scoped>
.count {
  background: #ffc268;
  padding: 20px;
  border-radius: 10px;
}

button {
  margin: 10px;
}
</style>