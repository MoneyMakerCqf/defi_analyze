import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home';
import linechart from "@/components/linechart";
import echart_demo from "@/components/echart_demo";

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
      path: '/charts/line/:name',
      name: 'line-chart',
      component: linechart,
    },
    {
      path: '/charts/topology/:name',
      name: 'topology-chart',
      component: echart_demo,
    }
  ]
})
