import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import CardField from '@/components/CardField.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    'Deck': {
      namespaced: true,
      state: {
        id: '',
        cards: [],
        cardsSuits: ['H', 'D', 'C', 'S'],
        cardsValues: ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3'],
        rotationCard: ''
      },

      actions: {
        addCard: () => true
      },

      getters: {
        getCardByIndex: () => () => '1'
      }
    }
        
  }
})

describe('CardField.vue', () => {
  it('Should render fieldLabel prop in label element', () => {
    const fieldLabel = 'CARD 1'
    const fieldPlaceholder = 'ENTER A CARD'
    const fieldOrder = 1

    const wrapper = shallowMount(CardField, {
      store,
      localVue,
      propsData: { 
        fieldLabel,
        fieldPlaceholder,
        fieldOrder
       }
    })

    expect(wrapper.find('label').text()).toBe(fieldLabel)
  })
})
