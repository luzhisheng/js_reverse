<template>
  <div class="person">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ address }}</h2>
    <h2>{{ car.price }}-----{{ car.brand }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeCar">修改汽车价格和名字</button>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeGame">修改第一个游戏的样式</button>
  </div>

</template>

<!--语法糖写法-->
<script setup>
// 响应式--基本数据类型
import {ref} from "vue";
// 响应式--对象数据类型
import {reactive} from "vue";

let name = ref('ayf')
let age = ref(19)
let tel = '143334132144'
let address = '北京昌平区'
let car = reactive({brand: 'byd', price: 10000000})

let games = reactive([
  {id: 'ayf002', name: '王者荣耀'},
  {id: 'ayf001', name: '原神'},
  {id: 'ayf003', name: '三国志'},
])

console.log(name)

function changeName() {
  name.value = 'dddd'
}

function changeAge() {
  age.value += 1
}

function showTel() {
  alert(tel)
}

function changeGame() {
  games[0].name = '王者荣耀国际版'
}

function changeCar() {
  games[0].name = '王者荣耀国际版'
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
</style>