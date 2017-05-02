/**
 * Created by Administrator on 2017/5/2.
 */
import Md5 from "md5";

export function afterLogin(para) {
    console.log("执行此函数");
    var timestamp = new Date().getTime();
    var userId = "";
    if(this.getCookie("userId") != null && this.getCookie("userId") != ''){
        userId = this.getCookie("userId");
    }else{
        window.location.replace("../login.html");
    }

    var sign = Md5.md5("userId="+userId+"&timestamp="+timestamp);
    var special = "";
    if(typeof para == 'object'){
        if(para.division != undefined){
            for(var i in para){
                if(para[i] !== para.division){
                    special += (i+"="+para[i]+para.division);
                }
            }
            special = special.toString().substr(0,special.length-1);
        }else{
            para = JSON.stringify(para);
        }
    }
    var obj = {
        userId:userId,
        timestamp:timestamp,
        sign:sign,
        para:special == ""?para:special,
        version:Cont.version,
        terminal:2,
        h5:0
    };
    return obj
}
