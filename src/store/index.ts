import { createStore } from 'vuex'

export default createStore({
  strict: import.meta.env.NODE_ENV !== 'production',
  state: {
    isSidebarMinimized: false,
    userName: 'Admin'
  },
  mutations: {
    updateSidebarCollapsedState(state, isSidebarMinimized) {
      state.isSidebarMinimized = isSidebarMinimized
    },
    changeUserName(state, newUserName) {
      state.userName = newUserName
    }
  },
  actions: {
  },
  modules: {
  }
})
