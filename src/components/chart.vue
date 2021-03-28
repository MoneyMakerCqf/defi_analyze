<template>
  <div>
    {{chartid}}
  </div>
</template>

<script>
export default {
  name: "chart",
  data() {
    return{
      chartid: this.$route.params.chartid,
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>