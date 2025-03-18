<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}-{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCar">修改车</button>
  </div>

</template>

<script setup>
import {reactive, watch} from "vue";

let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马',
  }
})

function changeName() {
  person.name += '~~~'
}

function changeAge() {
  person.age += 1
}

function changeCar() {
  person.car.c1 = "雅迪"
}


//监视某个属性
watch(() => {
  return person.name
}, (nValue, oValue) => {
  console.log(nValue, oValue)
}, {deep: true})

//监视某个对象
watch(() => person.car, (nValue, oValue) => {
  console.log(nValue, oValue)
}, {deep: true})

//监视多个数据
watch([() => person.car, () => person.name], (nValue, oValue) => {
  console.log(nValue, oValue)
}, {deep: true})

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