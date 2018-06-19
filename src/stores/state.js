/*
* 全局变量，状态管理
* */
const state = {
    sureurl:'',
    treeids:[],
    permission:'',
    token:'',
    tableurl:'',
    total:'',
    tableData:'',
    system:'system',
    showedit:true,
    showdel:true,
    buttonpermission:'',
    asideinfo:[
        {"id":1, "system":"xfxt","name":"消费系统","icon":"fab fa-apple","url":"aaaa","pId":null,"button":null,
            "children":[
                {"id":11,"system":null,"name":"消费系统菜单一","icon":"fab fa-apple","url":"aaaa","pId":1,"button":null,"children":[
                    {"id":111,"system":null, "name":"消费系统菜单一一", "icon":"fab fa-apple", "url":"aaaa", "pId":11, "button":null, "children":[]}]},
                {"id":12,"system":null,"name":"消费系统菜单二","icon":"fab fa-apple","url":"aaaa","pId":1,"button":null,"children":[]}]},
        {"id":2,"system":"mjxt","name":"门禁系统","icon":"fab fa-apple","url":"aaaa","pId":null,"button":null,
            "children":[
                {"id":21,"system":null,"name":"门禁系统菜单一","icon":"fab fa-apple","url":"aaaa","pId":2,"button":null,"children":[]},
                {"id":22,"system":null,"name":"门禁系统菜单二","icon":"fab fa-apple","url":"aaaa","pId":2,"button":null,"children":[]}]
        }],
    systeminfo:[
        {
            "id":1,
            "system":"xfxt",
            "name":"消费系统",
            "icon":"fab fa-apple",
            "url":"aaaa",
            "pId":null,
            "button":null
        },{
            "id":2,
            "system": "mjxt",
            "name":"门禁系统",
            "icon":"fab fa-apple",
            "url":"aaaa",
            "pId":null,
            "button":null
    }]
}

export default state
