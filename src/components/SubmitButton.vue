<template>
  <div>
    <button class="button button--blue" type="submit" @click.prevent="submit()"> {{ buttonText }} </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SubmitButton extends Vue {
  @Prop(String) readonly buttonText!: string

  public submit() {
    console.log('submit')
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