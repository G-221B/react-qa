import * as type from './constants'

export const changeUserAccount = (newVal) => ({
  type: type.CHANGE_USER_ACCOUNT,
  newVal
})
export const changeUserId = (newVal) => ({
  type: type.CHANGE_USER_ID,
  newVal
})