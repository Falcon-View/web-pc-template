<template>
  <div>
    <div>{{ loading }}</div>
    <div v-if="loading">
      <loading-tool></loading-tool>
    </div>
    <div v-else>
      <NuxtLayout name="custom">
        <div class="article mb-10" @click="useB()">文章测试页面</div>
        <button class="mb-10" @click="getByArea()">发送请求</button>
        <div class="article">{{ obj.userID }}</div>
        <div class="article">{{ obj.id }}</div>
        <div class="article">{{ obj.title }}</div>
        <div class="article">{{ obj.body }}</div>
        <button>
          <nuxt-link to="/test" style="text-decoration: none;"
            >访问 test 页面</nuxt-link
          >
        </button>
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import $test from '@/axios-api/api/test'
import { reactive, watch } from 'vue'
import { useLoadingStoreWithOut as useLoadingStore } from '@/store/modules/loading'
import { storeToRefs } from 'pinia'

definePageMeta({
  layout: false,
})

interface Obj {
  userID?: number
  id?: number
  title?: string
  body?: string
}
const obj: Obj = reactive({
  userID: null,
  id: null,
  title: '',
  body: '',
})
const getByArea = async () => {
  const res = await $test.get15DaysWeatherByArea({ id: 5 })
  obj.userID = res[0].userId
  obj.id = res[0].id
  obj.title = res[0].title
  obj.body = res[0].body
}
// loadingStore.open()
const loadingStore = useLoadingStore()
// const loadingStore1 = useLoadingStore()
const { loading } = storeToRefs(loadingStore)
// const { loading: load } = storeToRefs(loadingStore1)
// loadingStore1.open()

watch(loading, (newValue, oldValue) => {
  console.log(newValue, oldValue, 'loading新旧值')
})
// console.log(loading.value, load.value, 77777777)
// onMounted(() => getByArea())
</script>

<style scoped lang="scss">
:deep(.article) {
  color: blue;
  font-size: 30px;
}
</style>
