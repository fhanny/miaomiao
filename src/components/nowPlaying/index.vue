<template>
  <div class="movie_wrapper">
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../common/image/huamulan.jpg"/>
        </div>
        <div class="info_list">
          <h2>花木兰</h2>
          <p>观众评<span class="grade">7.2</span></p>
          <p>主演:刘亦菲,甄子丹</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="buy">
          购票
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../common/image/huamulan.jpg"/>
        </div>
        <div class="info_list">
          <h2>花木兰</h2>
          <p>观众评<span class="grade">7.2</span></p>
          <p>主演:刘亦菲,甄子丹</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="buy">
          购票
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../common/image/huamulan.jpg"/>
        </div>
        <div class="info_list">
          <h2>花木兰</h2>
          <p>观众评<span class="grade">7.2</span></p>
          <p>主演:刘亦菲,甄子丹</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="buy">
          购票
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../common/image/huamulan.jpg"/>
        </div>
        <div class="info_list">
          <h2>花木兰</h2>
          <p>观众评<span class="grade">7.2</span></p>
          <p>主演:刘亦菲,甄子丹</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="buy">
          购票
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../common/image/huamulan.jpg"/>
        </div>
        <div class="info_list">
          <h2>花木兰</h2>
          <p>观众评:<span class="grade">7.2</span></p>
          <p>主演: 刘亦菲,甄子丹</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="buy">
          购票
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../common/image/huamulan.jpg"/>
        </div>
        <div class="info_list">
          <h2>花木兰</h2>
          <p>观众评<span class="grade">7.2</span></p>
          <p>主演:刘亦菲,甄子丹</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="buy">
          购票
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NowPlaying'
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
      .buy{
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background: #f03d37;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
}

</style>