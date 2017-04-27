<template>
    <div>
        <!--<el-button type="text" @click="dialogVisible = true" class="bal_creat">创建项目</el-button>-->
        <!--<el-table-->
        <!--:data="tableData"-->
        <!--stripe-->
        <!--style="width: 100%">-->
        <!--<el-table-column-->
        <!--prop="date"-->
        <!--label="日期"-->
        <!--width="180"align="center">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="name"-->
        <!--label="姓名"-->
        <!--width="180"align="center">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="address"-->
        <!--label="电话号码"width="240"align="center">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="text"-->
        <!--label="地址"align="center">-->
        <!--</el-table-column>-->
        <!--</el-table>-->
        <!--<el-dialog title="提示" v-model="dialogVisible" size="tiny">-->
        <!--<span>-->
        <!--<el-form ref="form" :model="form" label-width="80px">-->

        <!--<el-form-item label="活动名称">-->
        <!--<el-input v-model="form.name"></el-input>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="活动区域">-->
        <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
        <!--<el-option label="区域一" value="shanghai"></el-option>-->
        <!--<el-option label="区域二" value="beijing"></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->

        <!--&lt;!&ndash;<el-form-item label="活动时间">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-col :span="11">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-col class="line" :span="2">-</el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-col :span="11">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->

        <!--<el-form-item label="即时配送">-->
        <!--<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="活动性质">-->
        <!--<el-checkbox-group v-model="form.type">-->
        <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
        <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
        <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
        <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
        <!--</el-checkbox-group>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="特殊资源">-->
        <!--<el-radio-group v-model="form.resource">-->
        <!--<el-radio label="线上品牌商赞助"></el-radio>-->
        <!--<el-radio label="线下场地免费"></el-radio>-->
        <!--</el-radio-group>-->
        <!--</el-form-item>-->

        <!--&lt;!&ndash;<el-form-item label="活动形式">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-input type="textarea" v-model="form.desc"></el-input>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->

        <!--<el-form-item>-->
        <!--<el-button type="primary" @click="onSubmit">立即创建</el-button>-->
        <!--<el-button>取消</el-button>-->
        <!--</el-form-item>-->
        <!--</el-form>-->
        <!--</span>-->
        <!--<span slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
        <!--</span>-->
        <!--</el-dialog>-->
    </div>
</template>
tableData: [{
date: '2016-05-02',
name: '王小虎',
text: '上海市普陀区金沙江路 1518 弄',
address: '18782038801'
}, {
date: '2016-05-04',
name: '王小虎',
text: '上海市普陀区金沙江路 1517 弄',
address: '18782038801'
}, {
date: '2016-05-01',
name: '王小虎',
text: '上海市普陀区金沙江路 1519 弄',
address: '18782038801'
}, {
date: '2016-05-03',
name: '王小虎',
text: '上海市普陀区金沙江路 1516 弄',
address: '18782038801'
},],
dialogVisible: false,
form: {
name: '',
region: '',
date1: '',
date2: '',
delivery: false,
type: [],
resource: '',
desc: ''
}
}
<script>
    export default{
        data(){
            return{

            }
        },
        components:{
        }
    }
</script>

<style scoped>
</style>
