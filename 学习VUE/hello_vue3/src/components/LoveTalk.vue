<template>
  <div class="talk">
    <button @click="getTitle">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'

let talkList = reactive([
  {id: 'dasfada001', title: '111ue3入门到实战，最新版vue3+TypeScript前端开发教程'},
  {id: 'dasfada002', title: '333ue3入门到实战，最新版vue3+TypeScript前端开发教程'},
  {id: 'dasfada003', title: '222ue3入门到实战，最新版vue3+TypeScript前端开发教程'}
])


async function getTitle(){
  let res = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
  let content = res.data.content
  talkList.unshift({id: uuidv4(), title: content})
}

</script>

<style scoped>
.talk {
  background: #64967E;
  padding: 20px;
  border-radius: 10px;
}

</style>