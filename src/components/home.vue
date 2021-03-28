<template>
  <div>
    <div style="text-align: center; font-size: 30px">
      Analyze-charts
    </div>
    <div id="home">
      <div class="block" v-for="chart in charts" :key="chart.id">
        <router-link :to="{ path: chart.id}">
          {{chart.intro}}
          <el-image
              v-if="chart.img_src"
              :src="chart.img_src"
              :fit="fit">
          </el-image>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      fit: "fill",
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
      }],
    }
  },
  mounted() {
    this.$axios({
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
          this.charts.push(chart);
        }
      }
    });
  }
}
</script>

<style scoped>
#home{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 30px;
}
.block{
  flex: 1;
  width: 30%;
  min-width: 30%;
  max-width: 30%;
  text-align: center;
}
.after-add {
  height: 0;
  padding: 0;
  margin: 0;
}
</style>