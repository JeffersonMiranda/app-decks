import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import DeckService from '@/services/DeckService'

@Module({
  namespaced: true
})
export default class Deck extends VuexModule {
  public id!: Number
  public cards: Array<string> = []
  public cardsSuits: Array<string> = ['H', 'D', 'C', 'S']
  public cardsValues: Array<string> = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3']
  public rotationCard: String = ''

  @Mutation
  public ADD_ID(payload: any): void {
    this.id = payload
  }

  @Mutation
  public ADD_CARD(payload: any): void {
    this.cards.splice(payload.index, 1, payload.newCard)
  }

  @Mutation
  public ADD_ROTATION_CARD(payload: any): void {
    this.rotationCard = payload
  }

  @Action({ rawError: true })
  public addId(payload: any): void {
    this.context.commit('ADD_ID', payload)
  }

  @Action({ rawError: true })
  public addCard(payload: any): void {
    this.context.commit('ADD_CARD', payload)
  }

  @Action({ rawError: true })
  public addRotationCard(payload: any): void {
    this.context.commit('ADD_ROTATION_CARD', payload)
  }

  @Action({ rawError: true })
  public addNewDeck() {
    const service = new DeckService()

    return service.createNewDeck()
  }

  get getCardByIndex(): Function {
    return (cardIndex: number) => {
      return this.cards[cardIndex]
    }
  }

  get getRotationCard(): String {
    return this.rotationCard
  }

  get getCardsSuits(): Array<String> {
    return this.cardsSuits
  }

  get getCardsValues(): Array<String> {
    return this.cardsValues
  }

  get getCards(): Object {
    return { cards: this.cards, rotationCard: this.rotationCard }
  }
}