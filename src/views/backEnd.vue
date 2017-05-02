<template>
    <div class="bal">
        {{test1}}
    </div>
</template>

<script>
    export default{
        data(){
            return{
                test1:"",
            }
        },
        mounted:function(){
            var that = this;
            this.$ajax.get('/article/submit').then(function (res) {
                if(res.data.data.code == 1000){
                    console.log(res.data.data)
                    that.test1 = res.data.data;
                }
            });
        },
        methods: {
        }
    }
</script>

<style>
</style>
