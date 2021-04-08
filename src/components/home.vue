<template>
  <div style="width: 90%; margin-left: 5%">
    <div style="text-align: left; font-size: 40px">
      Defi Charts & Statistics
    </div>
    <div class="outcard" v-for="label in labels" :key="label.name">
      <el-card class="outcard" hadow="always" >
        {{label.name}}
        <br><br>
        <el-row :gutter="20">
          <el-col :span="6" v-for="chart in label.charts" :key="chart.id">
            <el-card  class="card" shadow="hover" :body-style="{ padding: '0px' }">
              <router-link :to="{ path: chart.path}">
                <div style="background-color: #f4f4f4;">
                  <div style="margin-left: 10px">
                    {{chart.intro}}
                  </div>
                </div>
                <el-image
                    v-if="chart.img_src"
                    :src="chart.img_src"
                    :fit="fit">
                </el-image>
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      fit: "fill",
      labels: [{
        name: "Market Data",
        charts: [{
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: '/charts/line/eth&usdt',
          intro: 'eth price',
        },{
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: '/charts/line/btc&usdt',
          intro: 'btc price',
        },{
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: '/charts/line/kava&usdt',
          intro: 'kava price',
        },{
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: '/charts/line/dot&usdt',
          intro: 'dot price',
        }],
      },{
        name: "Blockchain Data",
        charts: [{
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: '/charts/topology/:name',
          intro: 'defi topologic graph',
        },{
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: 'btc&usdt',
          intro: 'btc price',
        },],
      },],

    }
  },
  mounted() {
    let axios = require('axios')
    axios({
      method: 'get',
      url: '/',
      params: {
      },
    }).then(res => {
      if (res.data['code']===200){
        let datalist = res.data['data'];
        for (let i = 0; i < datalist.length; i++) {
          let chart = {
            id: '/charts/' + datalist[i].id,
            img_src: datalist[i].img_src,
            path: datalist[i].path,
            intro: datalist[i].intro
          }
          this.labels.charts.push(chart);
        }
      }
    });
  }
}
</script>


<style scoped>
.card {
  border-radius: 10px;
  line-height: 40px;
  font-size: 17px;
  height: auto;
}
.outcard{
  border-radius: 10px;
  line-height: 20px;
  font-size: 20px;
  text-align: left;
}

</style>