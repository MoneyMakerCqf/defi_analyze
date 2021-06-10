<template>
  <div>
    <div style="width: 80%; margin-left: 10%">
      <el-card shadow="always" v-loading="loading">
        <div style="font-size: 30px">{{chartname}}</div>
        <div class="echart" id="echart-pie" :style="{float:'left',width: '100%', height: '600px'}"></div>
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
      $.getJSON('http://localhost:8282/qm/'+ this.chartname +'.json', function (graph) {
        var Data = [];
        for (let name in graph){
          let app = {
            value: graph[name],
            name: name
          }
          Data.push(app);
        }

        var chartDom = document.getElementById('echart-pie');
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
            top: '5%',
            left: 'center'
          },
          series: [
            {
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                },
                focus: 'data'
              },
              labelLine: {
                show: false
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