<template>
  <div id="nav">
    <router-link to='/' style="width: 25%">
      <div class="div_logo">
        <el-image
          style="width: 50px; height: 50px;"
          :src="require('../assets/logo.png')"
          :fit="fit">
        </el-image>
        <p class="p_logo">DeFi Analysis</p>
      </div>
    </router-link>

    <router-link to='/' style="width: fit-content">
      <p class="p_link">Home</p>
    </router-link>

    <router-link to='/about' style="width: fit-content">
      <p class="p_link">About us</p>
    </router-link>

    <a href='https://github.com/MoneyMakerCqf/defi_analyze/tree/main' style="width: fit-content" target="_blank">
      <div class="div_logo">
        <el-image
            style="width: 60px; height: 60px;"
            :src="require('../assets/github_tag.png')"
            :fit="fit">
        </el-image>
      </div>
    </a>
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
};
</script>

<style scoped>
#nav {
  display: grid;
  grid-template-columns: 70%;
  grid-auto-flow: column;
  gap: 0.5em;
  margin-left: 1%;
}
.div_logo {
  display: flex;
  align-items: center;
  height: 60px;
  margin-left: 5%;
}
.p_logo {
  color: #303030;
  font-size: 25px;
  display: inline;
}
.p_link {
  position: relative;
  color: #303030;
  font-size: 25px;
  transition: color .3s ease;
  display: inline-block;
  margin-block-start: 0;
  margin-block-end: 0;
}
.p_link::after {
  --scale: 0;
  --x: 0;
  content: '';
  height: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #4c81c9;
  -webkit-transform: scaleX(var(--scale));
  transform: scaleX(var(--scale));
  -webkit-transform-origin: var(--x) 50%;
  transform-origin: var(--x) 50%;
  transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
}
.p_link:hover {
  color: #4c81c9;
}
.p_link:hover::after{
  --scale: 1;
}
</style>
