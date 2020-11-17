import { db } from '~/plugins/firebase'

export const state = () => ({
  // uid: 'gKtboZ8EgvZoUUKzN943KP2gFfg1',
  items: [],
})

export const mutations = {
  addItem(state, item) {
    state.items.push(item)
  },
}

export const actions = {
  getItems({ commit }) {
    db.collection('users')
      .doc('x0vqofjro5emEvqxfPFWFeQ4RsV2')
      .collection('items')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          commit('addItem', doc.data())
        })
      })
      .catch((error) => {
        console.log('error : ' + error)
      })
  },
}

export const getters = {
  getTodos(state) {
    return state.items
  },
}
