<template>
  <div class="count">
    <h2>当前求和:{{ sum }} 放大10倍 {{ bigSum }}</h2>
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
import {useCountStore} from '@/store/count'
import {storeToRefs} from "pinia"

const countStore = useCountStore()

// 只负责转换 pinia 数据，变成响应式
const {sum, bigSum} = storeToRefs(countStore)

console.log(bigSum)

let n = ref(1)

function add() {
  countStore.increment(n.value)
}

function minus() {
  countStore.reduce(n.value)
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