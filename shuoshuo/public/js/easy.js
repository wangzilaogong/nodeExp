/**
 * Created by wk on 2017-04-06.
 */
$(function(){
    $('#box').layout({
        fit : true//布局组件适应父容器
    });
    /*安全退出*/
    $('#loginOut').click(function() {
        $.messager.confirm('系统提示', '您确定要退出本次登录吗?', function(r) {
            if (r) {
                location.href = '/ajax/loginout.ashx';
            }
        });});
    /*tabs工具栏*/
    $('#tabs').tabs({
        fit:true,
        tools:[
            {
                iconCls:'icon-home3',
                handler:function(){
                    $('#tabs').tabs('add',{
                        title:'home',
                        content:'aaa',
                        href:'home.html',
                        closable:true
                    });


                },
            },{
                iconCls:'icon-loop2',
                handler:function(){//刷新当前页面
                    var currentTab = $('#tabs').tabs('getSelected');
                    var url = $(currentTab.panel('options')).attr('href');
                    $('#tabs').tabs('update', {
                        tab: currentTab,
                        options: {
                            href: url
                        }
                    });
                    currentTab.panel('refresh');
                }},
            {
                iconCls:'icon-cross',
                handler:function() {//关闭当前选择的tabs
                    //var tab = $('#tabs').tabs('getSelected');
                    //if (tab){
                    //    var index = $('#tabs').tabs('getTabIndex', tab);
                    //    $('#tabs').tabs('close', index);
                    $("#tabs li").each(function(index, obj) {
                        //获取所有可关闭的选项卡
                        var tab = $(".tabs-closable", this).text();
                        $("#tabs").tabs('close', tab);
                    });
                }
            }

        ]});
    /*树形结构单击添加tabs*/
    $('#ttPeople,#ttMessage,#ttLog,#ttSetting,#ttPeople,#ttBase,#ttSystem').tree({
        onClick: function (node) {
            if(!$('#tabs').tabs('exists',node.text)){
                $('#tabs').tabs('add',{
                    title:node.text,
                    href:node.attributes.url,
                    closable:true
                });
            }
        }
    });
    /*系统管理*/
    $('#ttSystem').tree({
        url:'json/ttSystem.json'
    });
    /*基础信息*/
    $('#ttBase').tree({
        url:'json/ttBase.json'
    });
    /*人员管理*/
    $('#ttPeople').tree({
        url:'json/ttPeople.json'
    });
    /*报警设置*/
    $('#ttSetting').tree({
        url:'json/ttSetting.json'
    });
    /*日志系统*/
    $('#ttLog').tree({
        url:'json/ttLog.json'
    });
    /* 发送消息*/
    $('#ttMessage').tree({
        url:'json/ttMessage.json'
    });
});