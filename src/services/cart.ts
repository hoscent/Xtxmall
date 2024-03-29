import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

export const postMemberCartApi = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data
  })
}

export const getMemberCartApi = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart'
  })
}

export const deleteMemberCartApi = (data: { ids: string[] }) => {
  return http<CartItem[]>({
    method: 'DELETE',
    url: '/member/cart',
    data
  })
}

export const putMemberCartBySkuIdApi = (
  SkuId: string,
  data: { selected?: boolean; count?: number }
) => {
  return http<CartItem[]>({
    method: 'PUT',
    url: `/member/cart/${SkuId}`,
    data
  })
}

export const putMemberCartCheckAllApi = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data
  })
}
