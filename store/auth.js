import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  username: '',
  uid: '',
  photoUrl: '',
  idToken: {},
})

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

export const mutations = {
  async setUser(state, user) {
    state.status = 'loggedIn'
    state.username = user.displayName
    state.uid = user.uid
    state.photoUrl = user.photoURL
    state.idToken = await user.getIdToken(true)
  },
  logout(state) {
    state.status = 'loggedOut'
    state.username = ''
    state.photoUrl = ''
    state.uid = ''
  },
}
