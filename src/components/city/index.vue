<template>
  <div class="city_wrapper">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>鞍山</li>
            <li>安阳</li>
            <li>安庆</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
          </ul>
        </div>
        <div>
          <h2>C</h2>
          <ul>
            <li>成都</li>
            <li>成都</li>
            <li>成都</li>
            <li>成都</li>
          </ul>
        </div>
        <div>
          <h2>D</h2>
          <ul>
            <li>东莞</li>
            <li>东莞</li>
            <li>东莞</li>
            <li>东莞</li>
          </ul>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'City'
  }
</script>

<style lang="scss" scoped>
.city_wrapper{
  position: relative;
  width: 100%;
  display: flex;
  .city_list{
    flex: 1;
    overflow: auto;
    background: #fff5f0;
    &::-webkit-scrollbar{
      background-color: transparent;
      width: 0;
    }
    .city_hot{
      margin-top: 10px;
      h2{
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul{
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        li{
          width: 30%;
          height: 33px;
          background: #fff;
          margin-top: 15px;
          line-height: 33px;
          text-align: center;
          border:1px solid #e6e6e6;
          border-radius: 5px;
          box-sizing: border-box;
        }
      }
    }
    .city_sort{
      margin-top: 20px;
      div{
        /* margin-top: 20px; */
        h2{
          padding-left: 15px;
          line-height: 30px;
          font-size: 14px;
          background: #f0f0f0;
          font-weight: normal;
        }
        ul{
          li{
            line-height: 35px;
            height: 35px;
            padding-left:15px ;
            border-bottom: 1px solid #e6e6e6;
            &:last-child{
              border: none;
            }
          }
        }
      }
    }
    .city_index{
      width: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      position: absolute;
      right: 5px;
      top: 30%;
      transform: translateY(-50%);
      padding: 200px 0;
      z-index: 50;
      li{
        padding: 4px;
        line-height: 1;

      }
    }
  }
}
</style>