import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const postMemberAddressApi = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data
  })
}

export const getMemberAddressApi = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address'
  })
}

export const getMemberAddressByIdApi = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`
  })
}

export const putMemberAddressByIdApi = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data
  })
}
