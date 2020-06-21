<template>
  <div id="app">
    <NewDeck/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import NewDeck from '@/views/NewDeck.vue'

@Component({
  components: {
    NewDeck
  }
})
export default class App extends Vue {}

</script>

<style lang="sass">
@import '@/style/_vars'

html, body
  margin: 0
  height: 100%

#app
  margin: 0
  height: 100%
  display: flex
  flex-flow: column
</style>
