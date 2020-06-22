<template>
  <div class="card-field">
    <label class="card-field-label"> {{ fieldLabel }} </label>
    <input class="card-field-input" type="text" v-model="cardValue" :placeholder="fieldPlaceholder"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Mixins } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { replaceStringCharater, getFirstTwoCharacters, isCardValueCorrectFormat, removeInvalidCharacters } from '@/utils/index.js'
import CardMixin from '@/mixins/CardMixin'

const Deck = namespace('Deck')

@Component
export default class CardField extends Mixins(CardMixin) {
  @Prop(String) readonly fieldLabel!: String
  @Prop({ default: 'Enter card' }) readonly fieldPlaceholder!: Number
  @Prop(Number) readonly fieldOrder!: Number

  @Deck.Action
  public addCard!:(payload: any) => void

  public addEmptyCard() {
    this.addCard({ newCard: '', index: this.fieldOrder });
  }

  @Deck.Getter
  public getCardByIndex!:(index: Number) => String

  set cardValue(cardValue: String) {
    cardValue = cardValue.toUpperCase()

    if (!isCardValueCorrectFormat(cardValue)) {
      this.addCard({ newCard: getFirstTwoCharacters(cardValue), index: this.fieldOrder })
      return
    }

    cardValue = this.formartCardValues(cardValue)

    this.addCard({ newCard: cardValue, index: this.fieldOrder })
  }

  get cardValue(): String {
    return this.getCardByIndex(this.fieldOrder)
  }

  created() {
    this.addEmptyCard();
  }
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'
@import '@/style/mixins/_default-input'

.card-field
  max-width: 250px
  width: 100%
  display: flex
  flex-direction: column

  .card-field-label
    color: $color-light-grey
    margin-bottom: 5px
  
  .card-field-input
    @include default-input()
</style>