<template>
    <div class="vou">
        <el-tabs v-model="activeName">
            <el-tab-pane label="第一个给自己" name="first">
                <ul class="vou_wp">
                    <li v-for="item in list">
                        <i class="el-icon-message icon_phone"></i>
                        <div class="vou_title">
                            <h3>{{item.title}}</h3>
                            <span>{{item.description}}</span>
                        </div>
                        <!--<hr class="border">-->
                        <div class="vou_number">
                            <span>热度指数: {{item.count}}</span>
                            <span>价格: {{item.num}}元</span>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="技术点滴" name="second">
                {{test1}}
            </el-tab-pane>
            <el-tab-pane label="情感栏目" name="third">
                {{test2}}
            </el-tab-pane>
            <el-tab-pane label="漂亮的页面" name="fourth">
                漂亮的页面
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
           height: 140px;
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
           .icon_phone{
               font-size: 70px;
               display: inline-block;
               width: 70px;
               height: 70px;
               margin: 10px;
               line-height: 70px;
               text-align: center;
               vertical-align: top;
               color: #FF5F4F;
           }
           .vou_title{
               font-size: 16px;
               display: inline-block;
               width: 50%;
               margin: 10px;
               color: #999B98;
               h3{
                   margin: 0;
                   color: #59595A;
               }
           }
           .vou_number{
               font-size: 14px;
               margin: 15px 10px;
               margin-top: 0;
               padding-top: 15px;
               border-top: 1px solid #F2F2F2;
               display: flex;
               span{
                   flex: 1;
                   color: #FF5F4F;
                   /*margin-right: 10px;*/
                   text-align: center;
               }
           }
           /*&:hover{*/
               /*background-color: #FF5F4F;*/
               /*color: white;*/
           /*}*/
       }
   }
</style>
