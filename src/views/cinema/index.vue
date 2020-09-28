<template>
  <div class="main">
    <Header title="喵喵影院"/>
      <div id="content">
        <div class="cinema_menu">
          <div class="city">
            <span>全城</span>
            <i class="iconfont icon-xiala"></i>
          </div>
          <div class="brand">
            <span>品牌</span>
            <i class="iconfont icon-xiala"></i>
          </div>
          <div class="feature">
            <span>特色</span>
            <i class="iconfont icon-xiala"></i>
          </div>
        </div>
        <CinemaList/>
      </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
import CinemaList from '@/components/cinemaList'
export default {
  name: 'Cinema',
  components:{
    Header,
    TabBar,
    CinemaList
  }
}
</script>

<style lang="scss" scoped>
#content{
  .cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    i{
      margin-left: 5px;
      padding-top: 6px;
    }
  }
}
</style>