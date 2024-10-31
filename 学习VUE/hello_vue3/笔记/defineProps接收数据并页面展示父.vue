<template>
  <main>
    <Person a="haha" :list="PersonList"/>
  </main>
</template>

<script setup lang="ts">
import Person from './components/Person.vue'
import {reactive} from 'vue'
import {type Persons} from '@/types'

let PersonList = reactive<Persons>([
  {id: 'ayf0001', name: '张一', age: 18},
  {id: 'ayf0002', name: '张二', age: 19},
  {id: 'ayf0003', name: '张三', age: 17}
])

</script>

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
