<template>
    <div class="page">
        <el-pagination
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>

<style lang="scss">
    .page{
        width: 100%;
        padding: 10px 0;
        text-align: center;
    }
</style>
