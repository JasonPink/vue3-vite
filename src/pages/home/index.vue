<template>
  <p>{{ store.msg }}</p>
  <p>{{ msg }}</p>
  <el-transfer :titles="['未选', '已选']" v-model="value" :data="data" />
  <el-button type="primary" @click="confirm">确认导出</el-button>
  <hello-world></hello-world>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { mainStore } from '@/store'
import { ref } from 'vue'
import config from '@/config/index.js'
import { getRepoList, getFileByPath } from '@/api/index.js'
import HelloWorld from '@/components/HelloWorld.vue'

const store = mainStore()
const { msg } = storeToRefs(store)

const generateData = () => {
  const result = config.h5.map((item, index) => ({
    key: index,
    label: item.label
  }))

  return result
}

const confirm = async () => {
  const checkedIndexs = value._rawValue
  const checkedModules = checkedIndexs.map((item) => config.h5[item])
  console.log('image.png', checkedIndexs, checkedModules)
  await getStoreList()
}

const getStoreList = async () => {
  const { data } = await getRepoList()
  const currentRepo = data.find((item) => item.name === 'template-h5')
  console.log('res', data, currentRepo)
  const res = await getFileByPath(
    currentRepo.id,
    'pages/drawing/pages/make.vue'
  )
  console.log('文件', res)
}

const data = ref(generateData())
const value = ref([])
</script>
