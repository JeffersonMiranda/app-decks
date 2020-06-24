<template>
  <div class="deck-information">
    <h1 class="deck-information-title"> {{ title }} </h1>
    <span class="deck-information-value"> {{ value }} </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NewDeck extends Vue {
  @Prop() private readonly title!: String
  @Prop() private readonly value!: String
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'

.deck-information
  display: flex
  align-items: center
  margin-top: 20px 
  
  &-title
    font-size: 30px
    margin: 0 10px 0 0

  &-value
    color: #353535

</style>
