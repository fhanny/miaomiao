<template>
  <div>
    <Header title="我的喵喵"/>
    hello home
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
export default {
  name:'Home',
  components: {
    Header,
    TabBar
  }
}
</script>

<style lang="scss" scoped>

</style>