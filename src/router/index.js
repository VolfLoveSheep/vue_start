import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HomeContainer from '@/pages/home'
import MenberContainer from '@/pages/member'
import SearchContainer from '@/pages/search'
import ShopcarContainer from '@/pages/shopcar'
import NewListContainer from '@/pages/news'
import NewsInforContainer from '@/pages/newsInfor'
import PhotoListforContainer from '@/pages/photos'
import PhotosInforContainer from '@/pages/photosInfor'

import shopsListContainer from '@/pages/shops'
import shopsInfoContainer from '@/pages/shopsInfo'

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home',component: HomeContainer },
    { path: '/member',component: MenberContainer },
    { path: '/search',component: SearchContainer },
    { path: '/shopcar',component: ShopcarContainer },
    { path: '/home/newList',component:  NewListContainer },
    { path: '/home/newsInfor/:id',component:  NewsInforContainer },
    { path: '/home/photoList',component:  PhotoListforContainer },
    { path: '/home/photosInfor/:id',component:  PhotosInforContainer },
    { path: '/home/shopsList',component:  shopsListContainer },
    { path: '/home/shopsInfo/:id',component:  shopsInfoContainer },
  ],
  linkActiveClass:'mui-active'
})
