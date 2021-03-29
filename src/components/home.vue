<template>
  <div style="width: 80%; margin-left: 10%">
    <div style="text-align: center; font-size: 40px">
      Analyze-charts
    </div>
    <div class="outcard" v-for="label in labels" :key="label.name">
      <el-card class="outcard" hadow="always">
        {{label.name}}
        <br><br>
        <el-row :gutter="20" class="card">
          <el-col :span="6" v-for="chart in label.charts" :key="chart.id">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <router-link :to="{ path: chart.id}">
                <div style="background-color: #e5e5e5;">
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
          id: "/charts/1",
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: 'eth&usdt',
          intro: 'eth price',
        },{
          id: "/charts/2",
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: 'btc&usdt',
          intro: 'btc price',
        },{
          id: "/charts/3",
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: 'kava&usdt',
          intro: 'kava price',
        },{
          id: "/charts/4",
          img_src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          path: 'dot&usdt',
          intro: 'dot price',
        }],
      },{
        name: "Blockchain Data",
      },],

    }
  },
  mounted() {
    let axios = require('axios')
    axios({
      method: 'get',
      url: '/home',
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
  line-height: 40px;
  font-size: 17px;
  height: auto;
}
.outcard{
  line-height: 20px;
  font-size: 20px;
  text-align: left;
}
a {
  text-decoration: none;
}

</style>