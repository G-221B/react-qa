import * as type from './constants'

export const changeCode = (newVal) => ({
  type: type.CHANGE_CODE,
  newVal
})

export const changeUserCode = (newVal) => ({
  type: type.CHANGE_USER_CODE,
  newVal
})

export const changeAccount = (newVal) => ({
  type: type.CHANGE_ACCOUNT,
  newVal
})

export const changePassword = (newVal) => ({
  type: type.CHANGE_PASSWORD,
  newVal
})