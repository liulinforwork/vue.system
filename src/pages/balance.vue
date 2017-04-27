<template>
    <div class="bal">
        <div class="block bal_time">
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择开始日期"
                :picker-options="pickerOptions0">
            </el-date-picker>
            -
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择开始日期"
                :picker-options="pickerOptions0">
            </el-date-picker>
            <el-button type="info" class="bal_btn">查询</el-button>
            <span>今天</span>
            <span>近7天发布</span>
        </div>

        {{test1}}
    </div>
</template>

<script>
    export default{
        data(){
            return{
              pickerOptions0: {
                  disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                  }
                },
                 value1: '',
                test1:"",
            }
        },
        mounted:function(){
            var that = this;
            this.$ajax.get('/article/getData').then(function (res) {
                if(res.data.data.code == 1000){
                    console.log(res.data.data)
                    that.test1 = res.data.data;
                }
            });
        },
        methods: {
            /*onSubmit() {
                console.log('submit!');
            }*/
        }
    }
</script>

<style lang="scss" scoped>
    .bal{
        .bal_time{
            background-color: white;
            padding: 20px 10px;
            position: relative;
            margin: 0 0 15px;
            .bal_btn{
                background-color: #FF5F4F;
                outline: none;
                border: none;
                margin-left: 10px;
            }
            span{
                display: inline-block;
                margin-left: 10px;
                font-size: 16px;
                text-decoration: blink;
                cursor: pointer;
                transition: all .2s;
                &:hover{
                    color: #FF5F4F;
                    /*text-decoration: underline ;*/
                }
            }
        }
    }
</style>
