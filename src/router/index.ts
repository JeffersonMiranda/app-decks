import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import App from '@/App.vue'
import NewDeck from '@/views/NewDeck.vue'
import Deck from '@/views/Deck.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/deck/new', 
    name: 'Home',
    component: App,
    children: [
      {
        path: '/deck/new',
        name: 'newDeck',
        component: NewDeck
      },
      {
        path: '/deck/:deckId',
        name: 'deck',
        component: Deck,
        props: true
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
