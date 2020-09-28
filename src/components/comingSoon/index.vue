<template>
  <div class="movie_wrapper">
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../common/image/xintiao.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>信条</h2>
          <p><span class="person">2296</span>人想看</p>
          <p>主演:约翰·大卫·华盛顿、罗伯特·帕丁森、伊丽莎白·德比齐、迈克尔·凯恩、肯尼思·布拉纳</p>
          <p>2020-9-12上映</p>
        </div>
        <div class="sell">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../common/image/xintiao.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>信条</h2>
          <p><span class="person">2296</span>人想看</p>
          <p>主演:约翰·大卫·华盛顿、罗伯特·帕丁森、伊丽莎白·德比齐、迈克尔·凯恩、肯尼思·布拉纳</p>
          <p>2020-9-12上映</p>
        </div>
        <div class="sell">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../common/image/xintiao.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>信条</h2>
          <p><span class="person">2296</span>人想看</p>
          <p>主演:约翰·大卫·华盛顿、罗伯特·帕丁森、伊丽莎白·德比齐、迈克尔·凯恩、肯尼思·布拉纳</p>
          <p>2020-9-12上映</p>
        </div>
        <div class="sell">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../common/image/xintiao.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>信条</h2>
          <p><span class="person">2296</span>人想看</p>
          <p>主演:约翰·大卫·华盛顿、罗伯特·帕丁森、伊丽莎白·德比齐、迈克尔·凯恩、肯尼思·布拉纳</p>
          <p>2020-9-12上映</p>
        </div>
        <div class="sell">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../common/image/xintiao.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>信条</h2>
          <p><span class="person">2296</span>人想看</p>
          <p>主演:约翰·大卫·华盛顿、罗伯特·帕丁森、伊丽莎白·德比齐、迈克尔·凯恩、肯尼思·布拉纳</p>
          <p>2020-9-12上映</p>
        </div>
        <div class="sell">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../common/image/xintiao.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>信条</h2>
          <p><span class="person">2296</span>人想看</p>
          <p>主演:约翰·大卫·华盛顿、罗伯特·帕丁森、伊丽莎白·德比齐、迈克尔·凯恩、肯尼思·布拉纳</p>
          <p>2020-9-12上映</p>
        </div>
        <div class="sell">
          预售
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ComingSoon'
  }
</script>

<style lang="scss" scoped>
.movie_wrapper{
  flex: 1;
  overflow: auto;
  ul{
    margin: 0 12px;
    overflow: hidden;
    li{
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      padding-bottom: 10px;
      .pic_show{
        width: 64px;
        height: 90px;
        img{
          width: 100%;
        }
      }
      .info_list{
        margin-left: 10px;
        flex: 1;
        position: relative;
        h2{
          font-size: 18px;
          line-height: 26px;
          width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p{
          font-size: 15px;
          color: #666;
          line-height: 22px;
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .grade{
          font-weight: 700;
          color: #faaf00;
          font-size: 16px;
          padding-left: 5px;
        }
      }
      .sell{
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background: #3c9fe6;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
}
</style>