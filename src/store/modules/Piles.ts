import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import DeckService from '@/services/DeckService'

@Module({
  namespaced: true
})
export default class Piles extends VuexModule {
  private piles = [] as any 

  @Mutation
  public ADD_PILE(payload: any) {
    this.piles.push(payload)
  }

  @Action({ rawError: true })
  public async addNewPile(payload: any) {
    const service = new DeckService()

    return service.addCardsToPile(payload.id, payload.cards)
            .then(response => {
              this.context.commit('ADD_PILE', payload)
            })

  }

  get getPileById(): Function {
    return (pileId: number) => {
      return this.piles.find(pile => pile.id === pileId)
    }
  }
}