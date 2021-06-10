<template>
  <div>
    <div style="width: 80%; margin-left: 10%">
      <el-card shadow="always" v-loading="loading">
        <div style="font-size: 30px">{{chartname}}</div>
        <div class="echart" id="echart-nightingale" :style="{float:'left',width: '100%', height: '600px'}"></div>
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
            value: graph[name],
            name: name
          }
          Data.push(app);
        }

        var chartDom = document.getElementById('echart-nightingale');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: Data,
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