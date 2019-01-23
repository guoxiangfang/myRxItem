

var CIAIntroduceApp = new Vue({
    el: '#wrapper',
    data:{
        num: '0',
        tabList:[
            {
                name:'产品简介'
            },
            {
                name:'功能介绍'
            },
            {
                name:'价格'
            }
        ]
    },
    method:{
        tabChange:function (index) {
            this.num = index;
        }
    }

});

