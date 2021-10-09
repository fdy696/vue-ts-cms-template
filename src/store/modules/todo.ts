import { Module } from 'vuex'
import { State } from '../index'

type Todo = {
  name: string
}

const initialState = {
  todos: [] as Todo[],
  name: 'zs'
}

export type TodoState = typeof initialState

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: Todo[]) {
      state.todos = payload
    }
  }
} as Module<TodoState, State>
