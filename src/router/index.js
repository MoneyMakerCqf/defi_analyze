import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import chart from "@/components/chart";

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    //主页
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/charts/:chartid',
      name: 'chart',
      component: chart
    }
  ]
})
