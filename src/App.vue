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
              <!--<div class="breadcrumb">-->
                  <!--<el-breadcrumb separator="/">-->
                      <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
                      <!--<el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>-->
                  <!--</el-breadcrumb>-->
              <!--</div>-->
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
      <div class="app_footer">欢迎来到commit之家、</div>
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

<style lang="scss" scoped>
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
        .app_header{
            position: relative;
            flex: 0 0 auto;
            /*width: 100%;*/
            min-width:820px;
            z-index: 2;
            .title{
                margin-left: 16px;
                color: #fff;
            }
        }
        .app_content{
            display: flex;
            flex: 1;
            flex-flow: row;
            height: 100%;
            .app_nav{
                position: relative;
                flex: 0 0 260px;
                height: 100%;
            }
            .app_center{
                flex: 1;
                min-width:820px;
                height: 730px;
                padding:20px;
                overflow:auto;
                background-color:#F3F4F8;
            }
            .breadcrumb{
                padding-bottom: 20px;
            }
            .app_right{
                position: relative;
                flex: 0 0 200px;
                background-color:white;
            }
        }
        .app_footer{
            width: 100%;
            min-width:100%;
            background-color: white;
            height: 80px;
            text-align: center;
            line-height: 80px;
            /*box-shadow: 0 0 5px;*/
            /*padding: 20px;*/
        }
    }
</style>
