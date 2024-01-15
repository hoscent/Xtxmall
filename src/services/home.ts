import type { PageParams, PageResult } from '@/types/global'
import type { HotItem, BannerItem, CategoryItem, GuessItem } from '@/types/home'
import { http } from '@/utils/http'

export const getHomeBannerApi = (site: number = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite: site
    }
  })
}

export const getHomeCategoryApi = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli'
  })
}

export const getHomeHotApi = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli'
  })
}

export const getHomeGuessGoodsLikeApi = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}
