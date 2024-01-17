import type { AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const postMemberAddressApi = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data
  })
}
