<template>
  <div>
    <div id="main" class="main_container"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
import $ from "jquery"
export default {
  data() {
    return {}
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
// 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
      var option;

      myChart.showLoading();
      $.getJSON(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
        myChart.hideLoading();

        graph.nodes.forEach(function (node) {
          node.label = {
            show: node.symbolSize > 30
          };
        });
        option = {
          title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: [{
            // selectedMode: 'single',
            data: graph.categories.map(function (a) {
              return a.name;
            })
          }],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'none',
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                position: 'right',
                formatter: '{b}'
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              },
              emphasis: {
                focus: 'adjacency',
                lineStyle: {
                  width: 10
                }
              }
            }
          ]
        }
        myChart.setOption(option)
      });
// 绘制图表
      option && myChart.setOption(option);
    },
  },
}
</script>
<style scoped>
.main_container {
  width: 2000px;
  height: 2000px;
  /*margin:0; padding:0;*/
  overflow: hidden;
}
</style>