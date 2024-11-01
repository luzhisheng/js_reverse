<template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.id }}</li>
    <li>内容：{{ query.id }}</li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
let route = useRoute()
let {query} = toRefs(route)
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>