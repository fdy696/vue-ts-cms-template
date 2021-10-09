import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import todo, { TodoState } from './modules/todo'
import login, { LoginState } from './modules/login'
export type State = {
  counter: string
  todo?: TodoState
  login?: LoginState
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: { todo, login }
})
