<template>
  <div id="main">
    <Header title="喵喵电影"/>
    <div id="content">
      <div class="movie_menu">
        <div class="city_name">
          <span>合肥</span>
          <i class="iconfont"></i>
        </div>
        <div class="hot">
          <div class="hot-item">正在热映</div>
          <div class="hot-item">即将上映</div>
        </div>
        <div class="search">
          <i class="iconfont"></i>
        </div>
      </div>
      <!-- <keep-alive>
        <router-view/>
      </keep-alive> -->
      <NowPlaying/>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
import NowPlaying from '@/components/nowPlaying'
export default {
  name: 'Movie',
  components: {
    Header,
    TabBar,
    NowPlaying
  }

}
</script>

<style lang="scss" scoped>
#main{
  display: flex;
  height: 100%;
  flex-direction: column;
  #content{
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    .movie_menu{
      width: 100%;
      height: 45px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      justify-content: space-between;
      .city_name{
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
        &.active{
          color: #ef4238;
          border-bottom: 2px #ef4238 solid;
        }
      }
      .hot{
        display: flex;
        height: 100%;
        line-height: 45px;
        .hot-item{
          font-size: 15px;
          color: #666;
          width: 80px;
          text-align: center;
          margin: 0 12px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>