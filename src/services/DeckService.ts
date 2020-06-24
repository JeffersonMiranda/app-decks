import Http from './http'

export default class DeckService {
  private http = new Http()

  async createNewDeck() {
    return this.http.request('deck/new/')
  }
  async addCardsToPile(deckId: String, cards: Array<String>) {
    const cardsSeparatedByComma = cards.join(',')

    return this.http.request(`deck/${deckId}/pile/cardsPile/add/?cards=${cardsSeparatedByComma}`)
  }
}