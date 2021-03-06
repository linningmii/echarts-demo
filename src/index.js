import './style.scss';

const eCharts = require('echarts');

const barChart = eCharts.init(document.getElementById('bar-chart'));

barChart.setOption({
  title: {
    text: '柱形图'
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
});

const pieChart = eCharts.init(document.getElementById('pie-chart'));

pieChart.setOption({
  title: {
    text: '饼图'
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '80%',
    data: [
      {value: 400, name: '搜索引擎'},
      {value: 335, name: '直接访问'},
      {value: 310, name: '邮件营销'},
      {value: 274, name: '联盟广告'},
      {value: 235, name: '视频广告'}
    ]
  }]
});

setTimeout(() => {
  pieChart.setOption({
    title: {
      text: '南丁格尔图'
    },
    roseType: 'angle',
    itemStyle: {
      emphasis: {
        // 阴影的大小
        shadowBlur: 200,
        // 阴影水平方向上的偏移
        shadowOffsetX: 0,
        // 阴影垂直方向上的偏移
        shadowOffsetY: 0,
        // 阴影颜色
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  })
}, 5000);

