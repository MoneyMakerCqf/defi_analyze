<template>
  <div id="navi">
    <el-row :gutter="20" type="flex" style="height: 100%">
      <el-col :span="6">
        <p> Copyright by Sustech-DeFi-Analyze-Group </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
name: "foot"
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

el-col:hover{
  color: #6495ed;
}
</style>