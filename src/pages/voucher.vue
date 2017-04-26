<template>
    <div class="vou">
        <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
        <el-tabs v-model="activeName">
            <el-tab-pane label="用户管理" name="first">
                <div class="block">
                    <ul class="vou_wp">
                        <li>
                            <i class="el-icon-message icon_phone"></i>
                            <div class="vou_text">
                                <h3>通讯账单</h3>
                                <span>话费、流量、固话、宽带</span>
                            </div>
                            <hr class="border">
                            <div class="vou_zhangdan">
                                <span>总笔数: 1340</span>
                                <span>总金额: 56586.00元</span>
                            </div>
                        </li>
                        <li>
                            <i class="el-icon-message icon_phone"></i>
                            <div class="vou_text">
                                <h3>网络充值</h3>
                                <span>QQ、网游、支付宝</span>
                            </div>
                            <hr class="border">
                            <div class="vou_zhangdan">
                                <span>总笔数: 1340</span>
                                <span>总金额: 56586.00元</span>
                            </div>
                        </li>
                        <li>
                            <i class="el-icon-message icon_phone"></i>
                            <div class="vou_text">
                                <h3>生活服务</h3>
                                <span>话费、流量、固话、宽带</span>
                            </div>
                            <hr class="border">
                            <div class="vou_zhangdan">
                                <span>总笔数: 1340</span>
                                <span>总金额: 56586.00元</span>
                            </div>
                        </li>
                        <li>
                            <i class="el-icon-message icon_phone"></i>
                            <div class="vou_text">
                                <h3>充值卡</h3>
                                <span>话费充值卡、中石油加油卡</span>
                            </div>
                            <hr class="border">
                            <div class="vou_zhangdan">
                                <span>总笔数: 1340</span>
                                <span>总金额: 56586.00元</span>
                            </div>
                        </li>
                        <li>
                            <i class="el-icon-message icon_phone"></i>
                            <div class="vou_text">
                                <h3>信用卡还款</h3>
                                <span>话费、流量、固话、宽带</span>
                            </div>
                            <hr class="border">
                            <div class="vou_zhangdan">
                                <span>总笔数: 1340</span>
                                <span>总金额: 56586.00元</span>
                            </div>
                        </li>
                        <li>
                            <i class="el-icon-message icon_phone"></i>
                            <div class="vou_text">
                                <h3>业务办理</h3>
                                <span>话费、流量、固话、宽带</span>
                            </div>
                            <hr class="border">
                            <div class="vou_zhangdan">
                                <span>总笔数: 1340</span>
                                <span>总金额: 56586.00元</span>
                            </div>
                        </li>
                        <li>
                            <i class="el-icon-message icon_phone"></i>
                            <div class="vou_text">
                                <h3>商旅服务</h3>
                                <span>火车、汽车、飞机</span>
                            </div>
                            <hr class="border">
                            <div class="vou_zhangdan">
                                <span>总笔数: 1340</span>
                                <span>总金额: 56586.00元</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
                <div @click="getTestInfo">配置管理</div>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
                <div @click="getTestInfo2">角色管理</div>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
                定时任务补偿
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                activeName: 'second'
            }
        },
        methods: {
          getTestInfo () {
              this.$ajax.get('/index/getList').then(function (res) {
                if(res.data.data.code ==1000){
                     console.log(res.data.data)
                    }
                });
          },
          getTestInfo2 () {
              this.$ajax.get('/index/getImgList').then(function (res) {
                if(res.data.data.code ==1000){
                     console.log(res.data.data)
                    }
                });
          }
        }
    }
</script>

<style lang="scss" scoped>

    .vou_wp{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-size: 0;
        margin-top: 20px;
        li{
            width: 22%;
            height: 150px;
            margin: 20px .5%;
            margin-top: 5px;
            display: inline-block;
            -moz-box-shadow:0px 0px 10px #A3A3A3; -webkit-box-shadow:0px 0px 10px #A3A3A3; box-shadow:0px 0px 10px #A3A3A3;
            cursor: pointer;
            transition: all .3s;
            padding: 1%;
            vertical-align: middle;
            .border{
                color: #A3A3A3;
                background-color: #A3A3A3;
                outline: none;
                margin: 0;
                border: none;
                height: 1px;
            }
            .icon_phone{
                font-size: 50px;
                display: inline-block;
                width: 70px;
                height: 70px;
                margin: 10px;
                line-height: 70px;
                text-align: center;
                vertical-align: top;
                color: #FF5F4F;
            }
            .vou_text{
                font-size: 16px;
                display: inline-block;
                width: 50%;
                margin: 10px;
                h3{
                    margin: 0;
                    color: #59595A;
                }
                color: #999B98;
            }
            .vou_zhangdan{
                font-size: 14px;
                margin: 20px 10px;
                span{
                    color: #FF5F4F;
                    margin-right: 10px;
                }
            }
            &:hover{
                background-color: #FF5F4F;
                color: white;
            }
        }
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
        width: 200px;
        height:150px;
    }
</style>
