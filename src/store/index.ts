import Vue from 'vue'
import Vuex from 'vuex'
import Deck from '@/store/modules/Deck'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Deck
  }
})
