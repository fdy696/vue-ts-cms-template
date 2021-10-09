import { Module } from 'vuex'
import { State } from '../index'
import { loginByAccount, getUserInfo, getUserMenu } from '../../apis/login'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

export interface LoginState {
  token: string
  userInfo: any
  userMenus: any
}

export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: []
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    setUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async loginByAccountAction({ commit }, payload) {
      const loginResult = await loginByAccount(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      commit('setToken', token)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = await getUserInfo(id)
      const userInfo = userInfoResult.data
      commit('setUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await getUserMenu(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('setUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // 4.跳到首页
      router.push('/')
    },

    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('setToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('setUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('setUserMenus', userMenus)
      }
    }
  }
} as Module<LoginState, State>
