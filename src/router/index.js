import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import projects from './projects'
import settings from './settings'
import standards from './standards'
import forms from './forms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...projects(),
    ...settings(),
    ...standards(),
    ...forms()
  ]
})
