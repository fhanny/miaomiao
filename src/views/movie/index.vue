<template>
  <div id="main">
    <Header title="喵喵电影"/>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>合肥</span>
          <i class="iconfont icon-xiala"></i>
        </router-link>
        <div class="hot">
          <router-link tag="div" to="/movie/nowPlaying" class="hot-item active">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot-item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search">
          <i class="iconfont icon-search"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <!-- <NowPlaying/> -->
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'

export default {
  name: 'Movie',
  components: {
    Header,
    TabBar,
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
      align-items: center;
      background: #fff;
      .city_name{
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
        &.router-link-active{
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
          &.router-link-active{
            color: #ef4238;
            border-bottom: 2px solid #ef4238;
          }
        }

      }
      .search{
        margin-right: 20px;
        height: 100%;
        line-height: 45px;
        &.router-link-active{
          color: #ef4238;
          border-bottom: 2px solid #ef4238;
        }
        i{
          font-size: 24px;
          color: #ef4238;
        }
      }
    }
  }
}
</style>