<template>
  <div>
    <div style="width: 80%; margin-left: 10%">
      <el-card shadow="always" v-loading="loading">
        <div style="font-size: 30px">{{chartname}}</div>
        <div class="echart" id="echart-simple-pie" :style="{float:'left',width: '100%', height: '600px'}"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import * as echarts from "echarts";

export default {
  data() {
    return{
      chartname: this.$route.params.name,
      loading: false,
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart(){
      $.getJSON('http://10.20.0.57/'+ this.chartname +'.json', function (graph) {
        var Data = [];
        for (let name in graph){
          let app = {
            value: Math.log(graph[name]+1),
            name: name
          }
          Data.push(app);
        }

        var chartDom = document.getElementById('echart-simple-pie');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item'
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: Data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                focus: 'data'
              }
            }
          ]
        };

        option && myChart.setOption(option);
      });
    }
  }
}
</script>

<style scoped>

</style>