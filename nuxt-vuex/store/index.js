import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: 'Hello Vuex!'
      }
    },
    //  mutations: {
    //   updateMessage: function(state, payload) {
    //     state.message = 'Updated'
    //   }
    // }
    mutations: {
      updateMessage: function(state, payload) {
        state.message = payload
      }
    },
    actions: {
      updateMessageAction(context, payload) {
        context.commit('updateMessage', payload)
      }
    }
  })
}

export default createStore