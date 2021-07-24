var myChart = echarts.init(document.getElementById('main'));
    var option={
        title: {
            text: '某部门工作量',
        },
        legend: {},
        xAxis: {
            type: 'category',
            name: '员工',
            data: ['a','b','c','d'],
        },
        yAxis: {
            name: '工作量',
        },
        series: [{
            type:'bar',
            data: [3,1,7,5],
            name: '第一周工作量',
            stack: '工作量',
            //smooth: true,
            //areaStyle: {},
        },{type:'bar',
        data: [1,2,3,4],
        name: '第一周工作量',
        stack: '工作量',
    }],

    };
    myChart.setOption(option);