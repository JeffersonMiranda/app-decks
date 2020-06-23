import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
export default class Piles extends VuexModule {
  private piles = [] as any 

  @Mutation
  public ADD_PILE(payload: any) {
    this.piles.push(payload)
  }

  @Action({ rawError: true })
  public addNewPile(payload: any) {
    this.context.commit('ADD_PILE', payload)
  }

  get getDeckById(): Function {
    return (pileId: number) => {
      return this.piles.find(pile => pile.id === pileId)
    }
  }
}