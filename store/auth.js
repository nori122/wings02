import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  username: '',
  idToken: {},
})

export const mutations = {
  async setUser(state, user) {
    state.status = 'loggedIn'
    state.username = user.displayName
    state.idToken = await user.getIdToken(true)
  },
  logout(state) {
    state.status = 'loggedOut'
    state.username = ''
  },
}

export const getters = {
  //  isLoggedInというプロパティを準備して、state.statusがログイン状態ならtrue, そうじゃなければfalseを返す。
  isLoggedIn: (state) => state.status === 'loggedIn',
}

export const actions = {
  getUser({ commit }, user) {
    commit('setUser', user)
  },
  logout({ commit }) {
    auth.signOut().then(() => {
      commit('logout')
    })
  },
}
