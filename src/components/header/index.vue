<template>
  <div class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title:{
        type: String,
        default:'喵喵电影'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: relative;
    h1 {
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      font-weight: normal;
    }
  }
 
</style>