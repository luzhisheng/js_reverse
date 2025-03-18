<template>
  <div class="person">
    <h2>当前求和：{{sum}}</h2>
    <button @click="changeSum">点击我sum+1</button>
  </div>

</template>

<script setup>
import { ref, watch } from "vue";
let sum = ref(0)

//方法
function changeSum(){
  sum.value += 1
}

//监视ref定义的数据,当你使用 watch 监听一个响应式的数据或 ref 时，它返回一个函数，这个函数被称为停止函数（stop function）。调用这个函数可以停止对该响应式数据的监听。
const stopWatch = watch(sum, (nValue, oValue)=>{
  console.log(nValue, oValue)
  if(nValue >= 10){
    stopWatch()
  }
})
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