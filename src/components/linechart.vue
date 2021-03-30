<template>
  <div>
    <div style="width: 80%; margin-left: 10%">
      <el-card shadow="always">
        <div class="echart" id="echart-line" :style="{float:'left',width: '100%', height: '500px'}"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return{
      chartname: this.$route.params.name,
      label: ['dex', 'staking', 'tokenization', 'loan', 'aggregate'],
      xData: ['2020-09', '2020-10', '2020-11', '2020-12', '2021-1', '2021-2', '2021-3'],
      yData: [{
          name: 'dex',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },{
          name: 'staking',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },{
          name: 'tokenization',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },{
          name: 'loan',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },{
          name: 'aggregate',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }],
    }
  },
  mounted() {
    let axios = require('axios');
    axios({
      method: 'get',
      url: '/linechart/'+this.$route.params.name,
      params:{
      }
    }).then(res =>{
      if (res.data['code']===200){
        let xAxis = res.data['xAxis'];
        for (let i=0; i<xAxis.length; i++){
          this.xData.push(xAxis[i]);
        }
        let datalist = res.data['data'];
        for (let i=0; i<datalist.length; i++){
          let proj = {
            name: datalist[i].name,
            type: 'line',
            stack: '总额',
            data: [],
          }
          for (let j=0; j<datalist[i].data.length; j++){
            proj.data.push(datalist[i].data[j]);
          }
          this.label.push(proj.name);
          this.yData.push(proj);
        }
      }else{
        alert("数据请求失败")
      }
    })
    this.initChart(this.chartname,this.label,this.xData,this.yData);
  },
  methods: {
    initChart(name,label,xData,yData){
      var chartDom = document.getElementById('echart-line');
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: name
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: label
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
        series: yData
      };
      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>