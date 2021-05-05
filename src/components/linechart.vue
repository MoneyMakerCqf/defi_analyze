<template>
  <div>
    <div style="width: 80%; margin-left: 10%">
      <el-card shadow="always" v-loading="loading">
        <div style="font-size: 30px">{{chartname}}</div>
        <div class="echart" id="echart-line" :style="{float:'left',width: '100%', height: '600px'}"></div>
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
      $.getJSON('http://localhost:8282/qm/tx-volume.json', function (graph) {
        let label = [];
        let xData = [];
        let yData = [];
        for (let l in graph.category) {
          let proj = {
            name: l,
            type: 'line',
            data: [],
          }
          for (let i=0; i<graph.category[l].length; i++){
            proj.data.push(graph.category[l][i]);
          }
          label.push(l);
          yData.push(proj);
        }
        for (let i=0; i<graph.date.length; i++){
          xData.push(graph.date[i]);
        }

        var chartDom = document.getElementById('echart-line');
        var myChart = echarts.init(chartDom);
        var option = {
          title: {
            text: name
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            position: function (pos, params, el, elRect, size) {
              var obj = {top: -30};
              obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
              return obj;
            },
            extraCssText: 'width: 220px',
          },
          legend: {
            data: label
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: '80%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData,
          },
          yAxis: {
            type: 'value'
          },
          series: yData,
        };
        option && myChart.setOption(option);
      });
    }
  }
}
</script>

<style scoped>

</style>