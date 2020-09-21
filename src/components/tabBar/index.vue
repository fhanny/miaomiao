<template>
  <div class="footer">
    <ul>
      <router-link to="/movie" tag="li" class="tab">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link to="/cinema" tag="li" class="tab">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
      </router-link>
      <router-link to="/home" tag="li" class="tab">
        <i class="iconfont icon-renbudaiwaiquan"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
  ul{
    display: flex;
    text-align: center;
    align-items: center;
    height: 50px;
    .tab {
      flex: 1;
      height: 40px;
      &.router-link-active{
        color: #f03d37;
      }
      i{
        font-size: 20px;
      }
      p{
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}


</style>