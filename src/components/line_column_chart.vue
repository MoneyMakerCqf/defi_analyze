<template>
  <div>
    <div style="width: 80%; margin-left: 10%">
      <el-card shadow="always" v-loading="loading">
        <div style="font-size: 30px">{{chartname}}</div>
        <div class="echart" id="echart-line-column" :style="{float:'left',width: '100%', height: '600px'}"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import $ from "jquery";

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
      $.getJSON('http://localhost:8282/qm/'+ this.chartname + '.json', function (graph) {
        // 数据处理读入
        let xData = [];
        let yData_in = [];
        let yData_out = [];
        let yData_largest = [];
        for (let i=0; i<graph.length; i++){
          xData.push(graph[i].name);
          yData_in.push(graph[i].in);
          yData_out.push(graph[i].out);
          yData_largest.push(graph[i].largest/1.0E+17);
        }

        var chartDom = document.getElementById('echart-line-column');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false, emphasis:{iconStyle: {textPadding: 10}}},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data: ['in', 'out', 'largest']
          },
          xAxis: [
            {
              type: 'category',
              data: xData,
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '调用/被调用(次数)',
              min: 0,
              max: 70,
              interval: 7,
              axisLabel: {
                formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '最大值',
              min: 0,
              max: 1000,
              interval: 100,
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: 'in',
              type: 'bar',
              data: yData_in,
            },
            {
              name: 'out',
              type: 'bar',
              data: yData_out
            },
            {
              name: 'largest',
              type: 'bar',
              yAxisIndex: 1,
              data: yData_largest
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