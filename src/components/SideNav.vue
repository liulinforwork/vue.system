<template>
    <el-menu default-active="/index/voucher" class="el-menu-vertical-demo" router>
        <div class="side_wp">
            <div class="side_img">
                <img src="../assets/10.png" alt="图片加载失败">
            </div>
        </div>
        <el-menu-item index="/index/voucher"><i class="el-icon-menu"></i>个人信息</el-menu-item>

        <!--<el-menu-item index="/index/balance">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--项目开发-->
        <!--</el-menu-item>-->

        <!--<el-submenu index="/index/edit1">-->
        <el-submenu index="/index/esa">
            <template slot="title"><i class="el-icon-message"></i>项目开发</template>
            <el-menu-item index="mobile">mobile端project</el-menu-item>
            <el-menu-item index="pc">pc端project</el-menu-item>
        </el-submenu>

        <el-submenu index="/index/articleList">
            <template slot="title"><i class="el-icon-message"></i>文章列表</template>
            <el-menu-item index="frontEnd">前端开发</el-menu-item>
            <el-menu-item index="backEnd">后端开发</el-menu-item>
        </el-submenu>

        <!--<el-submenu index="/index/edit">-->
            <!--<template slot="title"><i class="el-icon-message"></i>内容编辑</template>-->
            <!--<el-menu-item index="Technology">技术文章</el-menu-item>-->
            <!--<el-menu-item index="Emotion">心情随笔</el-menu-item>-->
        <!--</el-submenu>-->

        <!--&lt;!&ndash;<el-submenu index="/index/edit">&ndash;&gt;-->
        <!--<el-submenu index="2">-->
            <!--<template slot="title"><i class="el-icon-message"></i>轮播管理</template>-->
            <!--<el-menu-item index="Technology">轮播列表</el-menu-item>-->
        <!--</el-submenu>-->

        <!--<el-menu-item index="/index/job"><i class="el-icon-setting"></i>求职指南</el-menu-item>-->
        <!--<el-menu-item index="/index/charts"><i class="el-icon-setting"></i>统计图表</el-menu-item>-->

        <!--<el-submenu index="/index/edit2">-->
            <!--<template slot="title"><i class="el-icon-message"></i>评论管理</template>-->
            <!--<el-menu-item index="Technology">评论列表</el-menu-item>-->
            <!--<el-menu-item index="Emotion">意见反馈</el-menu-item>-->
        <!--</el-submenu>-->

        <!--<el-submenu index="/index/edit3">-->
            <!--<template slot="title"><i class="el-icon-message"></i>会员管理</template>-->
            <!--<el-menu-item index="Technology">会员列表</el-menu-item>-->
            <!--<el-menu-item index="Emotion">删除会员</el-menu-item>-->
            <!--<el-menu-item index="Emotion">等级管理</el-menu-item>-->
            <!--<el-menu-item index="Emotion">积分管理</el-menu-item>-->
            <!--<el-menu-item index="Emotion">浏览记录</el-menu-item>-->
            <!--<el-menu-item index="Emotion">分享记录</el-menu-item>-->
        <!--</el-submenu>-->

    </el-menu>
</template>

<script>
</script>

<style lang="scss">
    ul.el-menu{
        background-color: #2C303B;
        color: white;
    }
    li.el-menu-item, .el-submenu{
        color: #A4A8C7;
        /*transition: all 0s;*/
    }
    li.el-menu-item:hover{
        /*background-color: transparent;*/
        background-color:#FF5F4F;
        color: white;
    }
    li.el-submenu .el-menu-item:hover, div.el-submenu__title:hover{
        background-color:#FF5F4F;
        color: white;
    }
    li.el-menu-item, div.el-submenu__title{
        background-color: #2C303B;
        color: #A4A8C7;
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, li.el-menu-item.is-active{
        background-color:#FF5F4F;
        color: white;
    }
    .side_wp{
        width:86%;
        padding:7%;
        .side_img{
            width: 60px;
            height: 60px;
            border-radius: 100%;
            background:url("../assets/10.png") no-repeat center;
            background-size: 100% 100%;
            overflow: hidden;
            img{
                width:100%;
            }
        }
    }
</style>
