<template>
  <div id="app">
    <Header title="CARDS"/>
    <div class="content">

      <div class="cards-field-container">
        <CardField v-for="(item, index) in maxItems" :key="index" :fieldLabel="getFieldLabel(index)"/>
      </div>

      <div class="rotation-card-container">
        <RotationField fieldLabel="Rotation Card"/>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import CardField from '@/components/CardField.vue'
import RotationField from '@/components/RotationField.vue'

@Component({
  components: {
    Header,
    CardField,
    RotationField
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

.content
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
</style>
