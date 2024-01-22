import { http } from '@/utils/http'

export const postMemberCartApi = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data
  })
}
