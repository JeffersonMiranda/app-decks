<template>
  <div class="card-field">
    <label class="card-field-label" for=""> {{ fieldLabel }} </label>
    <input class="card-field-input" type="text" :placeholder="fieldPlaceholder"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop(String) readonly fieldLabel!: string
  @Prop({ default: 'Enter card' }) readonly fieldPlaceholder!: string
}

</script>

<style lang="sass" scoped>
@import '@/style/_vars'

.card-field
  max-width: 250px
  width: 100%
  display: flex
  flex-direction: column

  .card-field-label
    color: $color-light-grey
    margin-bottom: 5px
  
  .card-field-input
    width: 100%
    padding: 10px 5px
    display: flex
    flex-direction: column
    border-radius: 2px
    border: 1px solid $color-light-grey
    color: $color-light-grey

</style>