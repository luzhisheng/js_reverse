<template>
  <div class="person">
    <h2>{{ a }}</h2>
    <h2>{{ list }}</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} -- {{ item.age }} -- {{ item.id }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from 'vue'
import {type Persons} from '@/types'

// 接收a，并且将a保存起来. 接收list
const props = defineProps<{
  a: string; // 假设 a 是字符串类型
  list: Persons; // list 的类型为 Persons 自定义类型
}>()

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