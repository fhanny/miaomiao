<template>
  <div id='content'>
    <div class="login_wrapper">
      <div>
        <input type="text" class="userName" placeholder="账户/手机号/Email">
      </div>
      <div>
        <input type="password" class="password" placeholder="请输入密码">
      </div>
      <div>
        <input type="button" value="登录" class="login">
      </div>
      <div class="login_link">
        <a href="#">立即注册</a>
        <a href="#">找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Login'
  }
</script>

<style lang="scss" scoped>
#content{
  width: 100%;
  .login_wrapper{
    width: 300px;
    margin: 0 auto;
    margin-top: 50%;
    .userName,.password{
      width: 100%;
      height: 40px;
      border: none;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      /* padding-left: 10px; */
      outline: none;
      font-size: 18px;
    }
    .login{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #e54847;
      border-radius: 5px;
      border: none;
      display: block;
      color: #fff;
      font-size: 20px;
      margin-top: 20px;
    }
    .login_link{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      a{
        margin: 0 5px;
        font-size: 14px;
        color: #e54847;

      }
    }
  }
  
}
</style>