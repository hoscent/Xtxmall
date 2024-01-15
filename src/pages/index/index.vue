<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import type { HotItem, BannerItem, CategoryItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

const bannerList = ref<BannerItem[]>([])
const getBanner = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getCategory = async () => {
  const res = await getHomeCategoryApi()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
const getHot = async () => {
  const res = await getHomeHotApi()
  hotList.value = res.result
}

const { guessRef, onScrollLower } = useGuessList()

const isTriggered = ref(false)
const onRefresher = async () => {
  isTriggered.value = true
  guessRef.value?.resetHot()
  onScrollLower()
  await Promise.all([getBanner(), getCategory(), getHot()])
  isTriggered.value = false
}

const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getBanner(), getCategory(), getHot()])
  onScrollLower()
  isLoading.value = false
})
</script>

<template>
  <CustomNavbar />
  <scroll-view
    :refresher-enabled="true"
    @refresherrefresh="onRefresher"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrollLower"
    class="scroll-view"
    :scroll-y="true"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}

.scroll-view {
  flex: 1;
}
</style>
