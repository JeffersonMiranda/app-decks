<template>
  <div id="app">
    <Header title="CARDS"/>
    <div class="app-content">

      <div class="cards-field-container">
        <CardField v-for="(item, index) in maxItems" :key="index" :fieldLabel="getFieldLabel(index)"/>
      </div>

      <div class="rotation-card-container">
        <RotationField fieldLabel="Rotation Card"/>
      </div>

      <div class="submit-button-container">
        <SubmitButton buttonText="Submit" />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import CardField from '@/components/CardField.vue'
import RotationField from '@/components/RotationField.vue'
import SubmitButton from '@/components/SubmitButton.vue'

@Component({
  components: {
    Header,
    CardField,
    RotationField,
    SubmitButton
  }
})
export default class NewDeck extends Vue {
  private maxItems: Number = 10

  public getFieldLabel(fieldOrder: string) {
    return `CARD ${fieldOrder}`
  }
}

</script>

<style lang="sass" scoped>
@import '@/style/_variables'

.app-content
  background-color: $color-light-blue
  flex: 1 1 auto

  .cards-field-container 
    display: flex
    flex-wrap: wrap
    padding: 50px 40px
    justify-content: space-between

  .rotation-card-container
    max-width: 650px
    margin: 50px auto auto
    display: flex
    justify-content: center

  .submit-button-container
    max-width: 200px
    margin: auto
    position: absolute
    bottom: 100px
    left: 0
    right: 0
</style>
