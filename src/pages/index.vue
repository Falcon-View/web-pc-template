<template>
  <div>
    <div class="abc" @click="useA()">{{ loading }}</div>
    <button>
      <nuxt-link to="/article">访问 article 页面</nuxt-link>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLoadingStoreWithOut as useLoadingStore } from '@/store/modules/loading'
import { storeToRefs } from 'pinia'
const loadingStore = useLoadingStore()
const { loading } = storeToRefs(loadingStore)
// loadingStore.open()
</script>

<style scoped lang="scss">
.abc {
  color: red;
  font-size: 50px;
}
</style>
