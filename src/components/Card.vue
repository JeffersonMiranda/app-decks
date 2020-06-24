<template>
  <div class="card">
    <CardBlock :value="value" :suit="suit"/>

    <div class="card-block-bottom">
      <CardBlock :value="value" :suit="suit"/>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import CardBlock from '@/components/CardBlock.vue'

@Component({
  components: {
    CardBlock
  }
})
export default class Card extends Vue {
  @Prop() private readonly suit!: String
  @Prop() private readonly value!: String

  public getFieldLabel(fieldOrder: string) {
    return `CARD ${fieldOrder}`
  }
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'

// @-webkit-keyframes slide
//     100%
//       left: 0

@keyframes slide
    from
      transform: scale(0)
    
    to
      transform: scale(1)

.card 
  width: 120px
  height: 200px
  background-color: $color-white
  border-radius: 10px
  display: flex
  flex-direction: column
  justify-content: space-between
  -webkit-animation: slide 0.5s forwards
  -webkit-animation-delay: 2s
  animation: slide 0.5s forwards

  .card-block-bottom
    transform: rotate(180deg)
</style>
