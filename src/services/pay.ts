import { http } from '@/utils/http'

export const getPayWxPayMiniPayApi = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data
  })
}

export const getPayMockApi = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data
  })
}
