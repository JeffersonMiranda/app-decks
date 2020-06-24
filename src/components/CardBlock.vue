<template>
  <div class="card-block">
    <span class="card-block-value"> {{ value }} </span>
    <img class="card-block-suit" :src="getSuitImage()">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CardBlock extends Vue {
  @Prop() private readonly suit!: String
  @Prop() private readonly value!: String

  private publicPath = process.env.BASE_URL

  public getSuitImage(): string {
    return `${this.publicPath}suits/${this.suit}.png`
  }
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'

.card-block
  display: flex
  padding: 10px

  .card-block-value
    font-size: 30px
    margin-right: 10px

  .card-block-suit
    max-width: 20px
</style>
