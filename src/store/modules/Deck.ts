import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
export default class Deck extends VuexModule {
  public cards: Array<string> = []

  @Mutation
  public ADD_CARD(payload: any): void {
    this.cards.splice(payload.index, 1, payload.newCard)
  }

  @Action({ rawError: true })
  public addCard(payload: any): void {
    this.context.commit('ADD_CARD', payload)
  }

  get getCardByIndex(): Function {
    return (cardIndex: number) => {
      return this.cards[cardIndex]
    }
  }
}