import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
export default class Deck extends VuexModule {
  public cards: Array<string> = []
  public cardsSuits: Array<string> = ['H', 'D', 'C', 'S']
  public cardsValues: Array<string> = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3']
  public rotationCard: String = ''

  @Mutation
  public ADD_CARD(payload: any): void {
    this.cards.splice(payload.index, 1, payload.newCard)
  }

  @Mutation
  public ADD_ROTATION_CARD(payload: any): void {
    this.rotationCard = payload
  }

  @Action({ rawError: true })
  public addCard(payload: any): void {
    this.context.commit('ADD_CARD', payload)
  }

  @Action({ rawError: true })
  public addRotationCard(payload: any): void {
    this.context.commit('ADD_ROTATION_CARD', payload)
  }

  get getCardByIndex(): Function {
    return (cardIndex: number) => {
      return this.cards[cardIndex]
    }
  }

  get getRotationCard(): String {
    return this.rotationCard
  }

  get getCardsSuits(): Array<string> {
    return this.cardsSuits
  }

  get getCardsValues(): Array<string> {
    return this.cardsValues
  }
}