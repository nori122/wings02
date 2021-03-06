import { db, auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  username: '',
  uid: '',
  photoUrl: '',
  idToken: {},
  items: [],
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
  getItems({ commit }) {
    setTimeout(() => {
      commit('getItems')
    }, 2000)
  },
}

export const mutations = {
  async setUser(state, user) {
    state.status = 'loggedIn'
    state.username = user.displayName
    state.uid = user.uid
    state.photoUrl = user.photoURL
    state.idToken = await user.getIdToken(true)
    db.collection('users').doc(user.uid).set(
      {
        username: user.displayName,
        uid: user.uid,
        photoUrl: user.photoURL,
      },
      { merge: true }
    )
  },
  logout(state) {
    state.status = 'loggedOut'
    state.username = ''
    state.photoUrl = ''
    state.uid = ''
  },
  getItems(state) {
    console.log('uidは:' + state.uid)
    db.collection('users')
      .doc(state.uid)
      .collection('items')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          state.items.push(doc.data())
        })
      })
      .catch((error) => {
        console.log('error : ' + error)
      })
  },
}
