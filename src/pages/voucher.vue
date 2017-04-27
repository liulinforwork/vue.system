<template>
    <div class="vou">
        <el-tabs v-model="activeName">
            <el-tab-pane label="技能get" name="first">
                {{list}}
                <div class="block">
                    <!--<ul class="vou_wp">-->
                        <!--<li>-->
                            <!--<i class="el-icon-message icon_phone"></i>-->
                            <!--<div class="vou_text">-->
                                <!--<h3>通讯账单</h3>-->
                                <!--<span>话费、流量、固话、宽带</span>-->
                            <!--</div>-->
                            <!--<hr class="border">-->
                            <!--<div class="vou_zhangdan">-->
                                <!--<span>总笔数: 1340</span>-->
                                <!--<span>总金额: 56586.00元</span>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<i class="el-icon-message icon_phone"></i>-->
                            <!--<div class="vou_text">-->
                                <!--<h3>网络充值</h3>-->
                                <!--<span>QQ、网游、支付宝</span>-->
                            <!--</div>-->
                            <!--<hr class="border">-->
                            <!--<div class="vou_zhangdan">-->
                                <!--<span>总笔数: 1340</span>-->
                                <!--<span>总金额: 56586.00元</span>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<i class="el-icon-message icon_phone"></i>-->
                            <!--<div class="vou_text">-->
                                <!--<h3>生活服务</h3>-->
                                <!--<span>话费、流量、固话、宽带</span>-->
                            <!--</div>-->
                            <!--<hr class="border">-->
                            <!--<div class="vou_zhangdan">-->
                                <!--<span>总笔数: 1340</span>-->
                                <!--<span>总金额: 56586.00元</span>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<i class="el-icon-message icon_phone"></i>-->
                            <!--<div class="vou_text">-->
                                <!--<h3>充值卡</h3>-->
                                <!--<span>话费充值卡、中石油加油卡</span>-->
                            <!--</div>-->
                            <!--<hr class="border">-->
                            <!--<div class="vou_zhangdan">-->
                                <!--<span>总笔数: 1340</span>-->
                                <!--<span>总金额: 56586.00元</span>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<i class="el-icon-message icon_phone"></i>-->
                            <!--<div class="vou_text">-->
                                <!--<h3>信用卡还款</h3>-->
                                <!--<span>话费、流量、固话、宽带</span>-->
                            <!--</div>-->
                            <!--<hr class="border">-->
                            <!--<div class="vou_zhangdan">-->
                                <!--<span>总笔数: 1340</span>-->
                                <!--<span>总金额: 56586.00元</span>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<i class="el-icon-message icon_phone"></i>-->
                            <!--<div class="vou_text">-->
                                <!--<h3>业务办理</h3>-->
                                <!--<span>话费、流量、固话、宽带</span>-->
                            <!--</div>-->
                            <!--<hr class="border">-->
                            <!--<div class="vou_zhangdan">-->
                                <!--<span>总笔数: 1340</span>-->
                                <!--<span>总金额: 56586.00元</span>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<i class="el-icon-message icon_phone"></i>-->
                            <!--<div class="vou_text">-->
                                <!--<h3>商旅服务</h3>-->
                                <!--<span>火车、汽车、飞机</span>-->
                            <!--</div>-->
                            <!--<hr class="border">-->
                            <!--<div class="vou_zhangdan">-->
                                <!--<span>总笔数: 1340</span>-->
                                <!--<span>总金额: 56586.00元</span>-->
                            <!--</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                </div>
            </el-tab-pane>
            <el-tab-pane label="动态数据一" name="second">
                {{test1}}
            </el-tab-pane>
            <el-tab-pane label="动态数据二" name="third">
                {{test2}}
            </el-tab-pane>
            <el-tab-pane label="静态页面" name="fourth">
                静态页面
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import data from './data.json';
    export default{
        data(){
            return{
                activeName: 'first',
                list:"",
                test1:"",
                test2:""
            }
        },
        mounted:function(){
            var that = this;
            this.list = data.list;

            this.$ajax.get('/index/getList').then(function (res) {
                if(res.data.data.code == 200){
                    console.log(res.data.data)
                    that.test1 = res.data.data;
                }
            });
            this.$ajax.get('/index/getImgList').then(function (res) {
                if(res.data.data.code == 200){
                    console.log(res.data.data)
                    that.test2 = res.data.data;
                }
            });
        },
        methods: {
        }
    }
</script>

<style lang="scss">
   div.el-tabs__header{
       padding: 20px 10px;
       background-color: white;
       border-bottom: none;
       div.el-tabs__active-bar{
           background-color: #FF5F4F;
       }
       div.el-tabs__item.is-active{
           color: #FF5F4F;
       }
    }
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
           -moz-box-shadow:0 0 3px #A3A3A3;
           -webkit-box-shadow:0 0 3px #A3A3A3;
           box-shadow:0 0 3px #A3A3A3;
           cursor: pointer;
           transition: all .3s;
           padding: 1%;
           vertical-align: middle;
           background-color: white;
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
</style>
