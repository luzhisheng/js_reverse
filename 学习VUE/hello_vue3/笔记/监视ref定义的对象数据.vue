<template>
  <div class="person">
    <h2>{{ me.name }}</h2>
    <h2>{{ me.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeAll">同时修改名字年龄</button>
  </div>

</template>

<script setup>
import { ref, watch } from "vue";
let me = ref({name: '比亚迪', age: 100})

//方法
function changeName(){
  me.value.name = "丰田"
}

function changeAge(){
  me.value.age = 101
}

function changeAll(){
  me.value = {name: '特斯拉', age: 200}
}

//监视ref定义的对象数据
const stopWatch = watch(me, (nValue, oValue)=>{
  console.log(nValue, oValue)
  if(nValue >= 10){
    stopWatch()
  }
}, {deep:true})
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