<template>
  <div>
    <Header title="我的喵喵"/>
    <Login/>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
import Login from '@/components/login'
export default {
  name:'Home',
  components: {
    Header,
    TabBar,
    Login
  }
}
</script>

<style lang="scss" scoped>

</style>
