<template>
    <el-menu default-active="/index/voucher" class="el-menu-vertical-demo" router>
        <div class="side_wp">
            <div class="side_img">
                <img src="../assets/10.png" alt="图片加载失败">
            </div>
        </div>
        <el-menu-item index="/index/voucher"><i class="el-icon-menu"></i>青春修炼手册</el-menu-item>
        <el-menu-item index="/index/balance"><i class="el-icon-setting"></i>项目开发</el-menu-item>
        <el-submenu index="/index/articleList">
            <template slot="title"><i class="el-icon-message"></i>文章列表</template>
            <el-menu-item index="frontEnd">前端开发</el-menu-item>
            <el-menu-item index="backEnd">后端开发</el-menu-item>
        </el-submenu>
        <el-menu-item index="/index/job"><i class="el-icon-setting"></i>求职指南</el-menu-item>
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
