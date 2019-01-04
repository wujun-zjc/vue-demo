import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/views/Index/Index'
import Home from '@/views/Home/Home'
import Dynamic from '@/views/Dynamic/Dynamic'
import My from '@/views/My/My'
import Login from '@/views/Login/Login'
import Form from '@/views/Form/Form'
import Demos from '@/views/Demos/Demos'
import Picker from '@/views/Demos/Picker/Picker'
import Switch from '@/views/Demos/Switch/Switch'
import Button from '@/views/Demos/Button/Button'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      component: Index,
      children: [{
          path: '/index/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/index/dynamic',
          name: 'Dynamic',
          component: Dynamic
        },
        {
          path: '/index/my',
          name: 'My',
          component: My
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/demos',
      name: 'Demos',
      component: Demos
    },
    {
      path: '/picker',
      name: 'Picker',
      component: Picker
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '*',
      redirect: '/index/home',
    },
  ]
})
