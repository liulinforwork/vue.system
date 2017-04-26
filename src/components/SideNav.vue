<template>


    <el-menu default-active="/index/voucher" class="el-menu-vertical-demo" router>
        <div class="side_wp">
            <div class="side_img">
                <img src="../assets/10.png" alt="图片加载失败">
            </div>

            <!--bule-->
            <!--<br>-->
            <!--白金代理商-->
        </div>
    <!--<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">-->

        <el-menu-item index="/index/voucher"><i class="el-icon-menu"></i>充值中心</el-menu-item>
        <el-menu-item index="/index/balance"><i class="el-icon-setting"></i>余额账户</el-menu-item>
        <el-menu-item index="/index/correct"><i class="el-icon-setting"></i>冲正中心</el-menu-item>
        <el-menu-item index="/index/statistics"><i class="el-icon-setting"></i>订单统计</el-menu-item>

        <el-submenu index="/index/business">
            <template slot="title"><i class="el-icon-message"></i>业务办理</template>
            <el-menu-item-group>
                <template slot="title">即时业务</template>
                <el-menu-item index="5-1">素材管理</el-menu-item>
                <el-menu-item index="5-2">状态统计</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-submenu index="/index/parts">
            <template slot="title"><i class="el-icon-message"></i>手机配件</template>
            <el-menu-item-group>
                <template slot="title">电子产品</template>
                <el-menu-item index="6-1">移动设备</el-menu-item>
                <el-menu-item index="6-2">可穿戴设备</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <!--<el-submenu index="/index/o2o">-->
            <!--<template slot="title"><i class="el-icon-message"></i>O2O收银台</template>-->
            <!--<el-menu-item-group>-->
                <!--<template slot="title">收银台</template>-->
                <!--<el-menu-item index="/index/o2o/1">视频素材管理</el-menu-item>-->
                <!--<el-menu-item index="/index/o2o/2">音频素材管理</el-menu-item>-->
            <!--</el-menu-item-group>-->
        <!--</el-submenu>-->

        <el-menu-item index="/index/activity"><i class="el-icon-setting"></i>活动中心</el-menu-item>
        <!--<el-menu-item index="/index/Propaganda"><i class="el-icon-setting"></i>宣传物料</el-menu-item>-->

        <!--<el-submenu index="/index/money">-->
            <!--<template slot="title"><i class="el-icon-message"></i>财务管理</template>-->
            <!--<el-menu-item-group>-->
                <!--<template slot="title">公司财务</template>-->
                <!--<el-menu-item index="10-1">对内财务</el-menu-item>-->
                <!--<el-menu-item index="10-2">对外财务</el-menu-item>-->
            <!--</el-menu-item-group>-->
        <!--</el-submenu>-->

        <!--<el-submenu index="/index/security">-->
            <!--<template slot="title"><i class="el-icon-message"></i>安全设置</template>-->
            <!--<el-menu-item-group>-->
                <!--<template slot="title">个人设置</template>-->
                <!--<el-menu-item index="11-1">更改密码</el-menu-item>-->
                <!--<el-menu-item index="11-2">更改邮箱</el-menu-item>-->
            <!--</el-menu-item-group>-->
        <!--</el-submenu>-->



    </el-menu>
</template>

<script>
</script>

<!--<style lang="scss">-->
<style>
    .side_wp{
        width:86%;
        padding:7%;
    }
    .side_img{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        background:url("../assets/10.png") no-repeat center;
        background-size: 100% 100%;
       overflow: hidden;
    }
    .side_img img{
        width:100%;
    }
</style>