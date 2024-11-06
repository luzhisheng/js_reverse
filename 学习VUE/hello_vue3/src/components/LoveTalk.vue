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

import { useTalkStore } from "@/store/lovetalk"

const talkStore = useTalkStore()
let talkList = reactive(talkStore.talkList)

// 记录改变的数据，实现刷新不丢失数据,草稿,购物车,暂时不着急入库的数据
talkStore.$subscribe((mutate, state) => {
  console.log(mutate)
  console.log(state)
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

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