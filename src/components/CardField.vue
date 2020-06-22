<template>
  <div class="card-field">
    <label class="card-field-label" for=""> {{ fieldLabel }} </label>
    <input class="card-field-input" type="text" :placeholder="fieldPlaceholder"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CardField extends Vue {
  @Prop(String) readonly fieldLabel!: string
  @Prop({ default: 'Enter card' }) readonly fieldPlaceholder!: string
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