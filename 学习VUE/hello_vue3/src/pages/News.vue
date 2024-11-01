<template>
  <div class="news">
    <ul>
      <li v-for="g in newList">
        <RouterLink :to="{ name: 'news-details', query: { id: g.id } }">{{ g.name }}</RouterLink>
      </li>
    </ul>
<!--    展示区-->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RouterView, RouterLink} from 'vue-router'
import {reactive, } from 'vue'

const newList = reactive([
  {id:'00001', name: '测试测试测试测试', datetime: 1000},
  {id:'00002', name: '测试测试测试测试', datetime: 1000},
  {id:'00003', name: '测试测试测试测试', datetime: 1000},
  {id:'00004', name: '测试测试测试测试', datetime: 1000},
  {id:'00005', name: '测试测试测试测试', datetime: 1000},
  {id:'00006', name: '测试测试测试测试', datetime: 1000}
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /*list-style: none;*/
  padding-left: 10px;
}

.news ul li::marker {
  color: red; /* 将点的颜色设置为红色 */
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>