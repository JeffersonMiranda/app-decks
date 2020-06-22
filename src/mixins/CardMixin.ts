import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { replaceStringCharater, getFirstTwoCharacters, isCardValueCorrectFormat, removeInvalidCharacters } from '@/utils/index.js'

const Deck = namespace('Deck')

@Component
export default class CardMixin extends Vue {
  @Prop(String) readonly fieldLabel!: String

  @Deck.Getter
  public getCardsSuits!: Array<String>

  @Deck.Getter
  public getCardsValues!: Array<String>


  public formartCardValues(cardValue: String): String {
    const firstCharacterPosition = 0
    const secondCharacterPosition = 1

    const firstCharacter = cardValue.charAt(firstCharacterPosition)
    const secondCharacter = cardValue.charAt(secondCharacterPosition)

    cardValue = removeInvalidCharacters(cardValue, firstCharacter, this.getCardsValues, firstCharacterPosition)
    return removeInvalidCharacters(cardValue, secondCharacterPosition, this.getCardsSuits, secondCharacterPosition)
  }
}