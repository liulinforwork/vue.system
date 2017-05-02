<template>
    <div class="bal">
        <div class="edit-area">
            <!--<editor v-bind:value=defaultMsg v-bind:config=config v-on:input="input" v-on:ready="ready"></editor>-->
            <editor v-bind:value=defaultMsg v-bind:config=config></editor>
        </div>
    </div>
</template>

<script>
    import Editor from '../components/editor.vue';
    export default{
        data(){
            return{
                defaultMsg: '初始文本',
                config: {
                  initialFrameWidth: null,
                  initialFrameHeight: 320,
                },
            }
        },
        components: {
            Editor,
        }
    }
</script>

<style>
</style>
