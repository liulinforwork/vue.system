<template>
    <div class="vou">

        <div class="vou_title">
            <el-card>
                <span style="line-height: 36px;">欢迎来到冲正中心</span>
            </el-card>
        </div>
        <ul class="vou_wp">
            <li>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">通讯订单</span>
                        <el-button style="float: right;" type="primary">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>

            </li>
            <li>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">网络充值</span>
                        <el-button style="float: right;" type="primary">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </li>
            <li>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">生活服务</span>
                        <el-button style="float: right;" type="primary">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </li>
            <li>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">充值卡</span>
                        <el-button style="float: right;" type="primary">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </li>
            <li>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">网络充值</span>
                        <el-button style="float: right;" type="primary">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </li>
            <li>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">生活服务</span>
                        <el-button style="float: right;" type="primary">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </li>
            <li>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">充值卡</span>
                        <el-button style="float: right;" type="primary">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>

<!--<style lang="scss">-->
<style scoped>
    .vou_wp{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .vou_title{
        padding: 18px 0;
        width:100%;
    }
    .vou_wp li{
        float:left;
         margin:20px;
         margin-left:0;
    }
    .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;

  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .box-card {
    width: 250px;
  }
</style>
