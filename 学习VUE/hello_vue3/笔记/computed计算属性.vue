<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{fullName}}</span>
    <button @click="changeFullName">修改全名</button>
  </div>

</template>

<script setup>
import { ref, computed } from "vue";
let firstName = ref('涨')
let lastName = ref('三')

// 只读的计算属性
// let fullName = computed(()=>{
//   return firstName.value + lastName.value
// })

// 可读可写计算属性
let fullName = computed({
  get(){
    return firstName.value + lastName.value
  },
  set(val){
    console.log(val)
    firstName.value = 'dddddd'
  }
})

function changeFullName(){
  fullName.value = 'dddddd'
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