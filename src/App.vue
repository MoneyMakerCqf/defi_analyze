<template>
  <div id="app" class="body" v-bind:style="{ width: browser_maxwidth }" >
    <el-container>
      <el-header>
        <Navigation/>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        <foot/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import foot from './components/foot'

export default {
  name: 'App',
  data() {
    return{
      browser_maxwidth: window.screen.width,
    }
  },
  components: {
    Navigation,
    foot,
  },
}
</script>

<style>
@import "./assets/font.css";
body {
  margin: 0;
  padding: 0;
  font-family: myfont;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1500px;
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

a {
  text-decoration: none;
  color: #3399ff;
}
a:hover{
  color: #006ad7;
}


</style>