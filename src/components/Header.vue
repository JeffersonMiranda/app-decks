<template>
  <div class="header">
    <h1 class="header-title"> {{ title }} </h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop(String) readonly title!: string
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'

.header
  min-height: 150px
  display: flex
  justify-content: center
  align-items: center
  background-color: $color-green

  &-title
    font-size: 4rem
    color: $color-yellow

</style>