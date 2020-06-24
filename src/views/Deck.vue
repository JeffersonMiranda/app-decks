<template>
  <div id="app">
    <Header title="Ordered Piles"/>
    <div class="app-content">

      <div class="cards-container">
        <Card v-for="(card, index) in deck.cards" :key="index" :value="getCardValue(card)" :suit="getCardSuit(card)"/>
      </div>

      <div class="deck-information-container">
        <DeckInformation title="High Card" value="2S" />
        <DeckInformation title="Full House Combo" value="None" />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import DeckInformation from '@/components/DeckInformation.vue'

const Piles = namespace('Piles')

@Component({
  components: {
    Header,
    Card,
    DeckInformation
  }
})
export default class Deck extends Vue {
  @Prop() private readonly deckId!: String

  private deck = []

  @Piles.Getter
  public getPileById!:(deckId: Number) => any

  public getDeckById(deckId) {
    return this.getPileById(deckId)
  }

  public getCardValue(card) {
    return card.substr(0, 1)
  }

  public getCardSuit(card) {
    const secondCardCharacter:String = card.substr(1, 1).toLowerCase()
      
    switch (secondCardCharacter) {
      case 'h':
        return 'heart'
        break;
      case 's':
        return 'spade'
        break;
      case 'd':
        return 'diamond'
        break;
      case 'c':
        return 'club'
        break;
      default:
        break;
    }
  }

  created() {
    this.deck = this.getDeckById(this.deckId)
  }
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'

.app-content
  background-color: $color-light-blue
  flex: 1 1 auto

  .cards-container
    background-color: #dedcdc
    border: 1px solid $color-black
    display: flex
    flex-wrap: wrap
    padding: 50px 0
    max-width: 850px
    min-height: 400px
    margin: 40px auto auto

    .card
      margin: 0 0 30px 45px

  .deck-information-container
    display: flex
    flex-direction: column
    align-items: center

</style>
