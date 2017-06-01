<template>
    <div class="bal">
        <div class="bal_wp" @click="upLoad">
        <!--<div class="bal_wp">-->
            <a id="pickfiles">上传封面图片到七牛云</a>
        </div>

    </div>
</template>
<!--<script type="text/javascript">-->
<script>
    import '../../static/plupload-2.1.9/js/moxie';
    import '../../static/plupload-2.1.9/js/plupload.dev';
    import qiniu from "qiniu-js";
    import qs from 'querystring';

    export default{
        data(){
            return{
                upToken:"",
                upUrl:""
            }
        },
        mounted:function(){
            var that = this;
            that.getUpToken();
        },
        methods: {
            getUpToken:function(){
                 var self = this;
                 this.$ajax.post('http://test.appserver.com/clouds/uptoken/typeId',qs.stringify({
                         userId:582,
                         timestamp:1494233564065,
                         sign:"75f61e3e31ecf2fd4e1febb99802ed02",
                         para:"id=0",
                         version:"1.5.9",
                         terminal:2,
                         h5:0
                     })
                 )
                 .then(function (res) {
                     console.log(res);
                     if (res.data.code == 200) {
                         /*self.upToken = res.data.data.uptoken;
                         self.upUrl = res.data.data.url;
                         console.log(self.upToken);
                         console.log(self.upUrl);*/
                     }
                 })
                 .catch(function (err) {
                     console.log(err);
                 });
            },
            upLoad:function(){
                var uploader = Qiniu.uploader({
                    runtimes: 'html5,flash,html4',
                    browse_button: 'pickfiles',
                    uptoken : this.upToken,
                    get_new_uptoken: false,
                    domain: this.upUrl,
                    container: 'container',
                    max_file_size: '100mb',
                    flash_swf_url: 'path/of/plupload/Moxie.swf',
                    max_retries: 3,
                    dragdrop: true,
                    drop_element: 'container',
                    chunk_size: '4mb',
                    auto_start: true,
                    init: {
                        'FilesAdded': function(up, files) {
                            plupload.each(files, function(file) {
                            // 文件添加进队列后，处理相关的事情
                            });
                        },
                        'BeforeUpload': function(up, file) {
                            // 每个文件上传前，处理相关的事情
                        },
                        'UploadProgress': function(up, file) {
                            // 每个文件上传时，处理相关的事情
                        },
                        'FileUploaded': function(up, file, info) {

                        },
                        'Error': function(up, err, errTip) {
                            //上传出错时，处理相关的事情
                        },
                        'UploadComplete': function() {
                            //队列文件处理完毕后，处理相关的事情
                        },
                        'Key': function(up, file) {
                            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                            // 该配置必须要在unique_names: false，save_key: false时才生效
                            var key = "";
                            // do something with key here
                            return key
                        }
                    }
                });
            }
        }

    }
</script>

<style lang="scss">
    .bal_wp{
        margin-bottom: 20px;
        border-width: 2px;
        border-radius: 3px;
        border-color: #dcdcdc;
        cursor: default;
    }
    #pickfiles{
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: #00a0e9;
        color: white;
    }
</style>
