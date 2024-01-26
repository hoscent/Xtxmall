import type { OrderCreateParams, OrderPreResult, OrderResult } from '@/types/order'
import { http } from '@/utils/http'

export const getMemberOrderPreApi = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre'
  })
}

export const getMemberOrderPreNowApi = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data
  })
}

export const postMemberOrderApi = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data
  })
}

export const getMemberOrderByIdApi = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: '/member/order/' + id
  })
}
export const getMemberOrderRepurchaseByIdApi = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`
  })
}
