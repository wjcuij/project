import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/pulice/header'
import partner from '@/components/partner'
import recruit from '@/components/recruit'
import introduce from '@/components/introduce'
import benefit from '@/components/benefit'
import lease from '@/components/lease'
import residence from '@/components/residence'
/**index.js */
Vue.use(Router)

export default new Router({
  mode: 'history', routes: [
    {
      path: '/',
      name: 'partner',
      component: partner, 
      children:[
        {
          path: '/',
          name: 'header',
          component: header
        }
      ]     
    },
    {
      path: '/introduce',
      name: '',
      component: introduce,
      children:[
        {
          path: '/introduce',
          name: 'header',
          component: header
        }
      ]
    },
    {
      path: '/lease',
      name: '',
      component: lease,
      // children:[
      //   {
      //     path: '/lease',
      //     name: 'header',
      //     component: header
      //   }
      // ]
    },
    {
      path: '/recruit',
      name: '',
      component: recruit,
      children:[
        {
          path: '/recruit',
          name: 'header',
          component: header
        }
      ]
    },
    {
      path:'/benefit',
      name:'',
      component:benefit,
      children:[
        {
          path:'/benefit',
          name:'',
          components:{
            default:header
          }
        }
      ]
    },
    {
      path:'/residence',
      name:'',
      component:residence
    }
  ]
})
