<template>
  <div id="app">
    <Header title="CARDS"/>
    <div class="content">

      <div class="cards-field-container">
        <CardField v-for="(item, index) in maxItems" :key="index" :fieldLabel="getFieldLabel(index)"/>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import CardField from '@/components/CardField.vue'

@Component({
  components: {
    Header,
    CardField
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
@import '@/style/_vars'

.cards-field-container 
  display: flex
  flex-wrap: wrap
  padding: 50px 40px
  justify-content: space-between
  background-color: $color-light-blue
</style>
