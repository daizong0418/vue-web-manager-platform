<template>
    <div class="content-wrap">
    <el-table
        ref="multipleTable"
        :data="tableData"
        height="100"
        v-loading="loading"
        align="left"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="selectedChange"
        :row-class-name="tableRowClassName">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            v-for="(item,key) in tableKey"
            v-if="item.type !='tag'"
            :key="key"
            :prop="item.value"
            :label="item.name"
            :type="item.type"
            :width="item.width"
            :formatter="item.formatter"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            v-else>
            <template slot-scope="scope">
                <el-popover
                    placement="top-start"
                    :title="showTitle"
                    width="100"
                    trigger="click"
                    :content="showInfo">
                    <el-button slot="reference">{{ item.name}}</el-button>
                </el-popover>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
        style="position: fixed;bottom: 0px"
        :page-sizes="[10 , 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="sizeChange"
        @current-change="currentChange"
    >
    </el-pagination>
    </div>
</template>
<script>
    export default{
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex%2 != 1) {
                    return 'warning-row';
                }
                return '';
            }
        },
        data(){
            return{
            }
        },
        props:['tableData','tableKey','total','selectedChange','sizeChange','currentChange','rowClick','showTitle','showInfo','loading'],
    }
</script>
<style>
    .content-wrap {
        height:calc(100vh - 220px);
        background-color:#f0f4f7;
        display: flex;
        flex-direction:column;
    }

    .el-pagination{
        position: relative;
        margin-top: 0px;
    }

    .el-table .warning-row {
        background: hsla(0,0%,92%,.9);
        margin-bottom: 30px;
    }
</style>
