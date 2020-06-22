import axios from 'axios'

export default class Http {
  private config = {
    url: 'https://deckofcardsapi.com/api/'
  }

  public request(urlRoute) {
    this.config.url += urlRoute
    return axios(this.config)
  }
}