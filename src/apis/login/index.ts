import request from '../request'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/:id', // 用法: /users/1
  UserMenus = '/role/:id/menu' // 用法: role/1/menu
}

export function loginByAccount(account: IAccount) {
  return request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserInfo(id: number) {
  return request.get<IDataType>({
    url: LoginAPI.LoginUserInfo.replace(':id', id + ''),
    showLoading: false
  })
}

export function getUserMenu(id: number) {
  return request.get<IDataType>({
    url: LoginAPI.UserMenus.replace(':id', id + ''),
    showLoading: false
  })
}
