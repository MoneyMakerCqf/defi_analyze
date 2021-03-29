<template>
  <div id="app">
    <el-container>
      <el-header>
        <Navigation/>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    Navigation,
  },

}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.el-header, .el-footer {
  background-color: #e9eefc;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 80px;
}

body > .el-container {
  margin-bottom: 40px;
}


</style>
