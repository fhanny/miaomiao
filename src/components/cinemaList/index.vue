<template>
  <div class="cinema_wrapper">
    <ul>
      <li>
        <div>
          <span>大地影院(港澳广场店)</span>
          <p><span class="price">22.9</span>元起</p>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区港澳广场3层</span>
          <span>158.5km</span>
        </div>
        <div class="card">
          <p>小吃</p>
          <p>折扣</p>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(港澳广场店)</span>
          <p><span class="price">22.9</span>元起</p>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区港澳广场3层</span>
          <span>158.5km</span>
        </div>
        <div class="card">
          <p>小吃</p>
          <p>折扣</p>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(港澳广场店)</span>
          <p><span class="price">22.9</span>元起</p>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区港澳广场3层</span>
          <span>158.5km</span>
        </div>
        <div class="card">
          <p>小吃</p>
          <p>折扣</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'CinemaList'
  }
</script>

<style lang="scss" scoped>
.cinema_wrapper{
  flex: 1;
  overflow: auto;
  ul{
    padding: 20px;
    li{
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
      div{
        margin-bottom: 10px;
      }
      p{
        font-size: 12px;
        color: #f03d37;
        margin-top: 5px;
        .price{
          font-size: 18px;
        }
      }
      .address{
        font-size: 14px;
        color: #666;
        span{
          &:last-child{
            float: right;
          }
        }
      }
      .card{
        display: flex;
        p{
          padding: 0  3px;
          height: 15px;
          line-height: 15px;
          border-radius: 2px;
          color: #f90;
          border: 1px solid #f90;
          font-size: 14px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>