<script setup>
import { ref } from 'vue'
import { mainStore } from '@/store'
const store = mainStore()

defineProps({
  msg: String
})

const count = ref(0)

const modify = () => {
  // store.$patch({
  //   age: store.age + 1,
  //   name: store.name + '1'
  // })
  // store.$patch((state) => {
  //   state.age += 2
  //   state.name += '1'
  // })
  store.changeState()
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="modify">count is {{ count }}</button>
    <p>
      {{ store.msg }}
    </p>
    <p>
      {{ store.age }}
    </p>
    <p>
      {{ store.name }}
    </p>
    <p>
      {{ store.getNameAge }}
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
