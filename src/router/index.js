import Vue from 'vue'
import Router from 'vue-router'

const TimeLine = () => import('@/components/Time')
const UI = () => import('@/components/UI')
const myChart = () => import('@/components/myChart')

Vue.use(Router)

export default new Router({
    mode: "history",
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/',
            name: 'Security',
            component: {
                render(c) { return c('router-view') }
            },
            children: [
                {
                    path: '/time',
                    name: 'Time',
                    component: TimeLine,
                    meta: { title: 'TimeLine' }
                    
                },
                {
                    path: '/chart',
                    name: 'myChart',
                    component: myChart,
                    meta: { title: 'myChart' }
                    
                },
                {
                    path: '/crud',
                    name: 'UI',
                    component: UI,
                    meta: { title: 'UI' }
                    
                },
            ]
        }
    ],
})

