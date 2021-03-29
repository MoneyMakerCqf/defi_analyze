<template>
  <div id="navi">
    <el-row :gutter="10" type="flex" style="height: 100%">
      <el-col :span="3">
        <router-link to='/' class="el-col">
          <el-image
            style="width: 50px; height: 50px;"
            :src="require('../assets/logo.png')"
            :fit="fit">
          </el-image>
          <p style="color:#000000;">Defi-Analyze</p>
        </router-link>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data () {
    return {
      fit: "contain"
    };
  },
  methods: {

  }
}
</script>

<style scoped>
#navi {
  height: 60px;
}
.el-col {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
