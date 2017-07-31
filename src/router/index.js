import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Auth from '@/views/Auth'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/auth', component: Auth },
    { path: '/board/:id', name: 'board', component: Board, props: true }
  ]
})
