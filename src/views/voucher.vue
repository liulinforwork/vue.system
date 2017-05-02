<template>
    <div class="vou">
        <el-tabs v-model="activeName">
            <el-tab-pane label="第一个给自己" name="first">
                <ul class="vou_wp">
                    <li v-for="item in list">
                        <i :class="item.imgUrl" class="vou_icon"></i>
                        <div class="vou_title">
                            <h3>{{item.title}}</h3>
                            <span>{{item.description}}</span>
                        </div>
                        <!--<hr class="border">-->
                        <div class="vou_number">
                            <span>热度指数:<i>{{item.count}}</i></span>
                            <span>价格:<i>{{item.num}}</i>元</span>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="技术点滴" name="second">
                <ul class="vou_selected">
                    <li v-for="item in test1">
                        <div class="selected_title">
                            <!--<h3>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码(工作中遇到此需求)</h3>-->
                            <h3>{{item.name}}</h3>
                            <ul class="selected_status">
                                <li>发布于1分钟前</li>
                                <li>浏览：1</li>
                                <li>类型：原创-随笔</li>
                                <li>分类：类库框架</li>
                            </ul>
                        </div>
                        <p>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码，你可以很容易地将它集成在任何的网页上使用。FlowPlayer提供了良好的用户体验，支持预加载、长时间播放，播放列表，全屏播放模式等，还能支持HTTP以及流媒体传输。　　Flowplayer是一款开源软件，在该页面你同时可以下载到源代码。所以FlowPlayer也是一个f ...</p>
                    </li>
                    <!--{{test1}}-->
                </ul>
                <com-page></com-page>
            </el-tab-pane>
            <el-tab-pane label="情感栏目" name="third">
                <ul class="vou_selected">
                    <li v-for="item in test1">
                        <div class="selected_title">
                            <h3>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码(工作中遇到此需求)</h3>
                            <ul class="selected_status">
                                <li>发布于1分钟前</li>
                                <li>浏览：1</li>
                                <li>类型：原创-随笔</li>
                                <li>分类：类库框架</li>
                            </ul>
                        </div>
                        <p>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码，你可以很容易地将它集成在任何的网页上使用。FlowPlayer提供了良好的用户体验，支持预加载、长时间播放，播放列表，全屏播放模式等，还能支持HTTP以及流媒体传输。　　Flowplayer是一款开源软件，在该页面你同时可以下载到源代码。所以FlowPlayer也是一个f ...</p>
                    </li>
                    <!--<li>-->
                        <!--<div class="selected_title">-->
                            <!--<h3>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码(工作中遇到此需求)</h3>-->
                            <!--<ul class="selected_status">-->
                                <!--<li>发布于1分钟前</li>-->
                                <!--<li>浏览：1</li>-->
                                <!--<li>类型：原创-随笔</li>-->
                                <!--<li>分类：类库框架</li>-->
                            <!--</ul>-->
                        <!--</div>-->
                        <!--<p>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码，你可以很容易地将它集成在任何的网页上使用。FlowPlayer提供了良好的用户体验，支持预加载、长时间播放，播放列表，全屏播放模式等，还能支持HTTP以及流媒体传输。　　Flowplayer是一款开源软件，在该页面你同时可以下载到源代码。所以FlowPlayer也是一个f ...</p>-->
                    <!--</li>-->
                    <!--<li>-->
                    <!--<div class="selected_title">-->
                        <!--<h3>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码(工作中遇到此需求)</h3>-->
                        <!--<ul class="selected_status">-->
                            <!--<li>发布于1分钟前</li>-->
                            <!--<li>浏览：1</li>-->
                            <!--<li>类型：原创-随笔</li>-->
                            <!--<li>分类：类库框架</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                    <!--<p>FlowPlayer是一个用Flash开发的在Web上的网页flash播放器代码，你可以很容易地将它集成在任何的网页上使用。FlowPlayer提供了良好的用户体验，支持预加载、长时间播放，播放列表，全屏播放模式等，还能支持HTTP以及流媒体传输。　　Flowplayer是一款开源软件，在该页面你同时可以下载到源代码。所以FlowPlayer也是一个f ...</p>-->
                <!--</li>-->
                    <!--{{test2}}-->
                </ul>
                <com-page></com-page>
            </el-tab-pane>
            <el-tab-pane label="漂亮的页面" name="fourth">
                漂亮的页面
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import data from './data.json';
    import ComPage from '../components/page.vue';
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
                if(res.data.code == 200){
                    that.test1 = res.data.data;
                    console.log(that.test1+"速度")
                }
            });
            this.$ajax.get('/index/getImgList').then(function (res) {
                if(res.data.data.code == 200){
                    that.test2 = res.data.data;
                }
            });
        },
        methods: {
        },
        components:{
            ComPage
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
            .vou_icon{
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
                margin:0 0 15px 0;
                padding-top: 15px;
                border-top: 1px solid #F2F2F2;
                display: flex;
                span{
                    flex: 1;
                    text-align: center;
                    i{
                        color: #FF5F4F;
                        font-style: normal;
                    }
                }
            }
            &:hover span{
                color: white;
            }
            &:hover span i{
                color: white;
            }
            &:hover i{
                color: white;
            }
            &:hover h3{
                color: white;
            }
            &:hover{
                background-color: #FF5F4F;
            }
        }
    }
    .vou_selected{
        list-style-type: none;
        margin: 0;
        padding: 0;
        &>li{
            background-color: white;
            box-shadow: 0 0 3px #A3A3A3;
            padding: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            .selected_title{
                .selected_status{
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    li{
                        float: left;
                        margin-right: 30px;
                    }
                }
                p{
                    margin: 10px 0;
                }
                h3{
                    margin: 10px 0;
                }
            }
        }
    }
</style>
