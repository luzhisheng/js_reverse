<template>
  <div class="person">

  </div>
</template>

<script setup>
import {type PersonInter, type Persons} from '@/types'

// 规范对象类型
let person: PersonInter = {id: 'ayf0001', name: '张三', age: 18}

// 规范列表中对象类型一
let personList: Persons = [
  {id: 'ayf0001', name: '张一', age: 18},
  {id: 'ayf0002', name: '张二', age: 19},
  {id: 'ayf0003', name: '张三', age: 17}
]


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