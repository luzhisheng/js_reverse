<script setup lang="ts">
import Person from './components/Person.vue'
import {ref} from "vue";

// 创建一个ren，用于存储ref标记的内容
let ren = ref()

function showLog(){
  console.log(ren.value)
}

</script>

<template>
  <main>
    <Person ref="ren" />
    <button @click="showLog">点ren我输出</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
