import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import Login from '@/components/login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
