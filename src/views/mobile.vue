<template>
    <div class="mobile">

        <div>
            <h3>这里是mobile端项目展示</h3>
        </div>

        <ul class="mb_wp">
            <li v-for='item in mobileList'>
                <img :src="item.gifUrl">
            </li>
        </ul>
    </div>
</template>

<script>

    import data from './json/data.json';
    export default{
        data(){
            return{
                mobileList:''
            }
        },
        mounted:function(){
            this.mobileList = data.mobileList;
        },
        components:{
        }
    }
</script>

<style lang="scss">
    .mb_wp{
        list-style-type: none;
        padding: 0 20px;
        li{
            float: left;
            width: 50%;
            img{
               width: 100%;
            }
        }
    }
</style>


//mb
