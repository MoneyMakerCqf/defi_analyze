<template>
  <div>
    <div style="width: 80%; margin-left: 10%">
      <el-card shadow="always" v-loading="loading">
        <div style="font-size: 30px">{{chartname}}</div>
        <div class="echart" id="echart-topology" :style="{float:'left',width: '100%', height: '1200px'}"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts"
import $ from "jquery"
export default {
  data() {
    return {
      chartname: this.$route.params.name,
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {

      var myChart = echarts.init(document.getElementById("echart-topology"));
      var ROOT_PATH = 'http://localhost:8282/qm/';
      var option;

      myChart.showLoading();
      $.getJSON(ROOT_PATH + 'app-relation.json', function (graph) {
        myChart.hideLoading();
        for (var i = 0; i < graph.nodes.length; i++){

          graph.nodes[i].symbolSize = 1.6 * Math.log(graph.nodes[i].value);
        }
        graph.nodes.forEach(function (node) {
          node.label = {
            show: node.symbolSize > 30
          };
        });
        option = {
          title: {
            text: 'Topological Graph',
            subtext: 'Force layout',
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
              name: 'Topological Graph',
              type: 'graph',
              layout: 'force',
              force: {
                repulsion: 90,
                gravity: 0.3,
                edgeLength: 40
              },
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

      option && myChart.setOption(option);

      myChart.on("click", function (params) {
            if(params.dataType ==='node')
              window.open('https://etherscan.io/' + encodeURIComponent(params.name));
          }
      );

    },
  },
}
</script>
<style scoped>

</style>