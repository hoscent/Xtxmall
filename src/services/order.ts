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

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdApi = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`
  })
}
