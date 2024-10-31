<template>
  <div class="person">
    <h2>{{ car.price }}-----{{ car.brand }}</h2>
    <button @click="changeCartoRefs">修改汽车价格和名字</button>
    <button @click="changeCartoRef">修改汽车价格和名字</button>
  </div>

</template>

<script setup>
import { reactive, toRefs, toRef } from "vue";

// 创建一个响应式对象 car
let car = reactive({ brand: 'byd', price: 10000000 });

// 使用 toRefs 解构 car 对象的属性
let { brand, price } = toRefs(car);

// 使用 toRef 解构 car 对象的属性
let nl = toRef(car, 'brand');

// 修改汽车信息的方法
function changeCartoRefs() {
  // 修改 brand 和 price 的值，使用 .value 进行更改
  brand.value = 'kdlk';
  price.value = 20000000;
}

function changeCartoRef() {
  // 修改 brand 的值，使用 .value 进行更改
  nl.value = '44444444'
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