<template>
  <div id="app">
      <div class="app_header">
          <comm-header></comm-header>
      </div>
      <div class="app_content">
          <div class="app_nav">
              <side-nav></side-nav>
          </div>
          <div class="app_center">
              <div class="breadcrumb">
                  <el-breadcrumb separator="/">
                      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                      <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>
                  </el-breadcrumb>
              </div>
              <router-view></router-view>
          </div>
          <div class="app_right">
              <h3>
                  客服热线:
              </h3>
              4007366118
              <p>
                <img alt="图片加载失败">
                  在线客服
                  <br>
                  4007366118
              </p>


              <hr>
              <p>
                  <img alt="图片加载失败">
                  APP下载
              </p>
              <p>扫码关注马克巴</p>
              <img alt="图片加载失败">

              <hr>
              <h3>常用工具</h3>
              <div>
                  <img alt="图片加载失败">
                  <img alt="图片加载失败">
                  <img alt="图片加载失败">
                  <img alt="图片加载失败">
                  <img alt="图片加载失败">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import CommHeader from './components/CommHeader.vue';
    import SideNav from './components/SideNav.vue';
    export default {
        name: 'app',
        data () {
    return {
      pathName: this.$route.name,
    }
  },
        components:{
            CommHeader,
            SideNav
        },
  watch: {
    '$route': function(){
      this.pathName = this.$route.name;

    }
  }
    }
</script>

<style>
/*滚动条 start*/
      ::-webkit-scrollbar {
        width: 3px;
        height: 4px;
        background-color: #F5F5F5;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background: #fff ;
      }
      /*定义滑块 内阴影+圆角*/
      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);

      }
      ::-webkit-scrollbar-thumb:hover {
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color:rgba(7, 170, 247, 1);
      }

  #app{
    height: 100%;
    margin: 0;
    display: flex;
    flex-flow: column;
  }


  .app_header{
    position: relative;
    flex: 0 0 auto;
    z-index: 2;
  }
  .app_header .title{
    margin-left: 16px;
    color: #fff;
  }




  .app_content{
    flex: 1;
    display: flex;
    flex-flow: row;
    min-height: 700px;
  }



  .app_nav{
    position: relative;
    flex: 0 0 260px;
    margin:20px;
    margin-right:0;
  }
  .app_center{
    flex: 1;
    min-width:820px;
    min-height: 700px;
    padding:20px;
    margin:20px;
    margin-right:0;
    overflow:auto;
    background-color:#F3F4F8;
  }
  .breadcrumb{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  .app_right{
    position: relative;
    flex: 0 0 200px;
    margin:20px;
    background-color:#F3F4F8;
  }
</style>
