<template>
  <div class="rotation-card-field">
    <label class="rotation-card-field-label" for=""> {{ fieldLabel }} </label>
    <input class="rotation-card-field-input" type="text" :placeholder="fieldPlaceholder"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class RotationField extends Vue {
  @Prop(String) readonly fieldLabel!: string
  @Prop({ default: 'Enter rotation card' }) readonly fieldPlaceholder!: string
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
    font-size: 2.5rem;
    margin-right: 25px;
  
  .rotation-card-field-input
    @include default-input()
    max-width: 250px;
</style>