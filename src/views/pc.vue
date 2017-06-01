<template>
    <div class="pc">

        <div>
            <h3>这里是pc端项目展示</h3>
        </div>

        <ul class="pc_wp">
            <li v-for='item in pcList'>
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
                pcList:''
            }
        },
        mounted:function(){
            this.pcList = data.pcList;
        },
        components:{
        }
    }
</script>

<style lang="scss">
    .pc_wp{
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
