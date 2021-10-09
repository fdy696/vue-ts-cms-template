import { RouteRecordRaw } from 'vue-router'

export const allRoutes: Array<RouteRecordRaw> = [
  {
    path: '/main/analysis/overview',
    name: 'overview',
    component: () =>
      import(
        /* webpackChunkName: "overview" */ '../views/analysis/overview/overview.vue'
      )
  },
  {
    path: '/main/analysis/dashboard',
    name: 'dashboard',
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/analysis/dashboard/dashboard.vue'
      )
  },
  {
    path: '/main/system/user',
    name: 'user',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/system/user/user.vue')
  },
  {
    path: '/main/system/department',
    name: 'department',
    component: () =>
      import(
        /* webpackChunkName: "department" */ '../views/system/department/department.vue'
      )
  },
  {
    path: '/main/system/menu',
    name: 'menu',
    component: () =>
      import(/* webpackChunkName: "menu" */ '../views/system/menu/menu.vue')
  },
  {
    path: '/main/system/role',
    name: 'role',
    component: () =>
      import(/* webpackChunkName: "role" */ '../views/system/role/role.vue')
  },
  {
    path: '/main/product/category',
    name: 'category',
    component: () =>
      import(
        /* webpackChunkName: "category" */ '../views/product/category/category.vue'
      )
  },
  {
    path: '/main/product/goods',
    name: 'goods',
    component: () =>
      import(/* webpackChunkName: "goods" */ '../views/product/goods/goods.vue')
  }
]
