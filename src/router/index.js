import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home';
import linechart from "@/components/linechart";
import topology_chart from "@/components/topology_chart";
import line_column_chart from "@/components/line_column_chart";
import pie_chart from "@/components/pie_chart";
import nightingale_chart from "@/components/nightingale_chart";
import simple_pie_chart from "@/components/simple_pie_chart";

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
      component: topology_chart,
    },
    {
      path: '/charts/line-column/:name',
      name: 'line-column-chart',
      component: line_column_chart,
    },
    {
      path: '/charts/pie/:name',
      name: 'pie-chart',
      component: pie_chart,
    },
    {
      path: '/charts/nightingale/:name',
      name: 'nightingale-chart',
      component: nightingale_chart,
    },
    {
      path: '/charts/simplepie/:name',
      name: 'simplepie-chart',
      component: simple_pie_chart,
    },
  ]
})
