import Http from './http'

export default class DeckService {
  private http = new Http()

  async createNewDeck() {
    return this.http.request('deck/new/')
  }
}