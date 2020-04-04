/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          //画一条简单的线
          line1: function (id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
              }]
            };

            this.chart.setOption(optionData);
          },
          line2: function (title, data, id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            if (data.length != 0) {
              var time1 = []
              var time2 = []
              var data4 = {}
              data4.arr1 = []
              data4.arr2 = []
              data4.arr3 = []
              for (var i = 0; i < data.length - 1; i++) {
                time1.push(data[i].time)
                data4.arr1.push(data[i].tem)
              }
              for (var i = 1; i < data.length; i++) {
                time2.push(data[i].time)
                data4.arr2.push(data[i].tem)
              }
              for (var i = 0; i < data.length - 1; i++) {
                // if (t == 'minute')
                data4.arr3.push(
                  ((data4.arr2[i] - data4.arr1[i])
                    /
                    (
                      (new Date(time2[i]).getTime() - new Date(time1[i]).getTime()) / 1000 / 60
                    )).toFixed(2)
                )
              }
              console.log(data4)
              const fldata = data4.arr3
              const time = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
              const optionData = {
                title: {
                  text: title + "测点温度趋势(℃)",
                  textStyle: { //设置主标题风格
                    width: '151px',
                    height: '15px',
                    fontFamily: 'MicrosoftYaHei',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    letterSpacing: ' 1px',
                    color: '#19aa8d'
                  },
                  left: '37px'
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'cross',
                    label: {
                      backgroundColor: '#6a7985'
                    }
                  }
                },
                grid: [{
                  x: 37,
                  y: 30,
                  x2: 38,
                  y2: 0,
                  containLabel: true
                }],
                xAxis: [{
                  axisLine: { show: false },
                  splitLine: {
                    show: false
                  },
                  data: time,
                  axisLabel: {
                    show: true,
                    textStyle: {
                      color: '#6e7173'
                    }
                  },
                  type: 'category'
                }],
                yAxis: [{
                  type: 'value',
                  position: 'left',
                  min: function (fldata) {
                    return fldata.min;
                  },
                  axisLabel: {
                    show: true,
                    textStyle: {
                      color: '#6e7173'
                    }
                  },
                  axisLine: { show: true }
                }],
                series: [{
                  name: '温度',
                  type: 'line',
                  symbol: 'none', //这句就是去掉点的  
                  smooth: true, //这句就是让曲线变平滑的 
                  data: fldata,
                  lineStyle: {
                    normal: {
                      width: 3, //连线粗细
                      color: "#1c84c6" //连线颜色
                    }
                  }
                }]
              }
              this.chart.setOption(optionData);
            }
          },
        }

      }
    }
  })
}

export default {
  install
}