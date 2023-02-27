<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button>12345</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import apis from '@/api'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    getUser () {
      const params = {
        id: 27,
        type: 'id'
      }
      apis.getUserInfo(params).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style lang="less" scoped>

</style>
