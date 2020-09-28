<template>
  <div class="search_wrapper">
    <div class="search_input">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text"/> 
      </div>
    </div>
    <div class="search_reault">
      <div class="title">电影/电视剧</div>
      <ul>
        <li>
          <div class="img">
            <img src="../../common/image/huamulan.jpg" alt="">
          </div>
          <div class="info">
            <p><span>花木兰</span><span>8.5</span></p>
            <p>A cool fish</p>
            <p>剧情:喜剧</p>
            <p>2020-9-20</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="../../common/image/huamulan.jpg" alt="">
          </div>
          <div class="info">
            <p><span>花木兰</span><span>8.5</span></p>
            <p>A cool fish</p>
            <p>剧情:喜剧</p>
            <p>2020-9-20</p>
          </div>
        </li>
      </ul>  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style lang="scss" scoped>
.search_wrapper{
  flex: 1;
  overflow: auto;
  .search_input{
    padding:8px 10px;
    background: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .search{
      padding: 0 10px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      background: #fff;
      display: flex;
      margin: 0  20px;
      i{
        font-size: 16px;
        padding: 5px 0;
        margin-top: 2px;
      }
      input{
        font-size: 13px;
        color: #333;
        padding: 4px 0;
        outline: none;
        margin-left: 5px;
        width: 100%;
      }
      
    }
  }
  .search_reault{
    .title{
      font-size: 15px;
      color: #999;
      padding: 9px 15px;
      border-bottom: 1px solid #e6e6e6;
    }
    ul li{
      border-bottom: 1px dashed #c9c9c9;
      padding: 10px 15px;
      box-sizing: border-box;
      display: flex;
      .img{
        width: 60px;
        float: left;
        img{
          width: 100%;
        }
      }
      .info{
        float: left;
        margin-left: 15px;
        flex: 1;
        p{
          height: 22px;
          display: flex;
          line-height: 22px;
          font-size: 12px;
          &:nth-of-type(1){
            span{
              &:nth-of-type(1){
                font-size: 18px;
                flex: 1;
              }
              &:nth-of-type(2){
                font-size: 16px;
                color: #fc7103;
              }
            }
          }
        }
      }
    }
  }
}
</style>