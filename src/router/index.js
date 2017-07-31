import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Auth from '@/views/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/auth', component: Auth }
  ]
})
