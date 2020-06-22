<template>
  <div class="rotation-card-field">
    <label class="rotation-card-field-label"> {{ fieldLabel }} </label>
    <input class="rotation-card-field-input" type="text" v-model="cardRotationValue" :placeholder="fieldPlaceholder"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { replaceStringCharater, getFirstTwoCharacters, isCardValueCorrectFormat } from '@/utils/index.js'
import CardMixin from '@/mixins/CardMixin'

const Deck = namespace('Deck')

@Component
export default class RotationField extends Mixins(CardMixin) {
  @Prop({ default: 'Enter rotation card' }) readonly fieldPlaceholder!: string

  @Deck.Action
  public addRotationCard!:(payload: any) => void

  @Deck.Getter
  public getRotationCard!: String

  set cardRotationValue(cardValue: String) {
    cardValue = cardValue.toUpperCase()

    if (!isCardValueCorrectFormat(cardValue)) {
      this.addRotationCard(getFirstTwoCharacters(cardValue))
      return
    }

    cardValue = this.formartCardValues(cardValue);

    this.addRotationCard(cardValue)
  }

  get cardRotationValue(): String {
    return this.getRotationCard
  }
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'
@import '@/style/mixins/_default-input'

.rotation-card-field
  width: 100%
  display: flex
  align-items: center

  .rotation-card-field-label
    color: $color-black
    font-size: 2.5rem
    margin-right: 25px
  
  .rotation-card-field-input
    @include default-input()
    max-width: 250px
</style>