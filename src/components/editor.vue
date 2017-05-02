<template>
    <div ref="editor"></div>
</template>

<script charset="utf-8">

    import afterLogin from "../utils/common";

    import '../..//static/ueditor/ueditor.config';
    import '../..//static/ueditor/ueditor.all';
    import '../../static/ueditor/zh-cn';

    import '../../static/plupload-2.1.9/js/moxie';
    import '../../static/plupload-2.1.9/js/plupload.dev';
    import qiniu from "qiniu-js";


    export default {
        name:"ueditor",
        data() {
            return {
                id: Math.random().toString(16).substring(2) + 'ueditorId',
            };
        },
        props: {
            value: {
                type: String,
                default: null,
            },
            config: {
                type: Object,
                default: {},
            }
        },
        mounted:function(){

            this.$ajax.post('http://test.appserver.com/clouds/uptoken/typeId', {
                id: '0'
            }).then(function (res) {
                console.log("拿到token值:" + res);
            }) .catch(function (error) {
                console.log(error);
            });
            var uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',      // 上传模式，依次退化
                browse_button: 'pickfiles',         // 上传选择的点选按钮，必需
                // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
                // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
                // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
                uptoken : 'S5kD04uQUJUFyMyggrG3zHB1R2kfTjbWEUS-bctk:kPUpSWMMPxnAP9NXXOK09nUFGJA=:eyJzY29wZSI6InNjLW1hZHJvY2stYXBwLXB1Yi10ZXN0IiwicmV0dXJuQm9keSI6IntcImtleVwiOiAkKGtleSksIFwiaGFzaFwiOiAkKGV0YWcpLCBcIndcIjogJChpbWFnZUluZm8ud2lkdGgpLCBcImhcIjogJChpbWFnZUluZm8uaGVpZ2h0KSxcInVybFwiOiQoa2V5KSxcInN0YXRlXCI6XCJTVUNDRVNTXCIsXCJzaXplXCI6JChmc2l6ZSksXCJvcmlnaW5hbFwiOiQoZm5hbWUpfSIsImRlYWRsaW5lIjoxNDkzNzEyNzU2fQ==',
                // uptoken_url: '/uptoken',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
                // uptoken_func: function(file){    // 在需要获取uptoken时，该方法会被调用
                //    // do something
                //    return uptoken;
                // },
                get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
                // downtoken_url: '/downtoken',
                // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
                // unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
                // save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
                domain: 'http://odoz460dp.bkt.clouddn.com',     // bucket域名，下载资源时用到，必需
                container: 'container',             // 上传区域DOM ID，默认是browser_button的父元素
                max_file_size: '100mb',             // 最大文件体积限制
                flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入flash，相对路径
                max_retries: 3,                     // 上传失败最大重试次数
                dragdrop: true,                     // 开启可拖曳上传
                drop_element: 'container',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb',                  // 分块上传时，每块的体积
                auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
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
                        var key = "";
                        return key
                    }
                }
            });

            this.$nextTick(function f1() {
                // 保证 this.$el 已经插入文档

                this.$refs.editor.id = this.id;
                this.editor = UE.getEditor(this.id, this.config);

                this.editor.ready(function f2() {
                    this.editor.setContent(this.value);

                    this.editor.addListener("contentChange", function () {
                        const wordCount = this.editor.getContentLength(true);
                        const content = this.editor.getContent();
                        const plainTxt = this.editor.getPlainTxt();
                        this.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt });
                    }.bind(this));

                    this.$emit('ready', this.editor);
                }.bind(this));
            });
        },
        watch: {
            value: function value(val, oldVal) {
                this.editor = UE.getEditor(this.id, this.config);
                if (val !== null) {
                    this.editor.setContent(val);
                }
            },
        }
    };
</script>

<style>

</style>
