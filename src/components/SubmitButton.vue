<template>
  <div>
    <button class="button button--blue" type="submit" @click.prevent="submit()"> {{ buttonText }} </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const Deck = namespace('Deck')
const Piles = namespace('Piles')


@Component
export default class SubmitButton extends Vue {
  @Prop(String) readonly buttonText!: String

  @Deck.Action
  public addNewDeck!:() => any
  
  @Deck.Action
  public addId!:(id: Number) => void

  @Piles.Action
  public addNewPile!:(payload) => void

  @Deck.Getter
  public getCards!:() => Object

  public submit() {
    this.addNewDeck().then((response) => {
      const deckId = response.data.deck_id
      this.addId(deckId)
      this.addNewPile(this.getCards)
    })
  }
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'

.button
  width: 100%
  text-align: center
  padding: 20px
  border: none
  border-radius: 20px
  font-size: 2rem
  font-weight: bold
  cursor: pointer

  &--blue
    background-color: $color-blue
    color: $color-dark-yellow

</style>