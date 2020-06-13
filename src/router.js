import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/space/Home.vue'
import Space from './components/space/Space.vue'
import Dynamic from './components/space/Dynamic.vue'
import Setting from './components/space/Setting.vue'
import ShopCar from './components/space/ShopCar.vue'
import Master from './components/master/Master.vue'
import Login from './components/login/Login.vue'
import Tougao from './components/tougao/Tougao.vue'
import Video from './components/videoPlay/Video.vue'
import Peripheral from './components/peripheral/Peripheral.vue'
import Tieba from './components/tieba/Tieba.vue'


Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            redirect:'/master'
        },
        {
             path: '/space',
             name: 'space',
            redirect: '/space/home',
            component: Space,
            children: [{
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'dynamic',
                    name: 'dynamic',
                    component: Dynamic
                },
                {
                    path: 'shopcar',
                    name: 'shopcar',
                    component: ShopCar
                },
                {
                    path: 'setting',
                    name: 'setting',
                    component: Setting
                },
                
            ]
        },
        {
            path:'/master',
            name:'/master',
            component: Master,
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/tougao',
            component: Tougao
        },
        {
            path:'/video',
            component: Video
        },
        {
            path:'/peripheral',
            component: Peripheral
        },
        
        {
            path: '/tieba',
            name: 'tieba',
            component: Tieba
        },



    ]
})
router.beforeEach((to, from, next) => {
    if (to.path === "/login") return next()
    const tokenStr = window.sessionStorage.getItem("user")
    if (to.path === "/tougao"&&!tokenStr) return next("/login")
    next()
})
export default router