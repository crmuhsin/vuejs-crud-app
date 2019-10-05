<template>
  <div class="container">
    <span id="boss"></span>
    <highcharts :options="options" id="c"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import highchartsMore from 'highcharts/highcharts-more'
import axios from 'axios';

highchartsMore(Highcharts);

let timer = null
const data = {
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: 'Speedometer',
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [[0, '#FFF'], [1, '#333']],
        },
        borderWidth: 0,
        outerRadius: '109%',
      },
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [[0, '#333'], [1, '#FFF']],
        },
        borderWidth: 1,
        outerRadius: '107%',
      },
      {
        // default background
      },
      {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%',
      },
    ],
  },
  // the value axis
  yAxis: {
    min: 0,
    max: 200,
    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',
    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto',
    },
    title: {
      text: 'km/h',
    },
    plotBands: [
      {
        from: 0,
        to: 60,
        color: '#55BF3B', // green
      },
      {
        from: 60,
        to: 80,
        color: '#DDDF0D', // yellow
      },
      {
        from: 80,
        to: 100,
        color: '#DF5353', // red
      },
    ],
  },
  series: [
    {
      name: 'Speed',
      data: [20],
      tooltip: {
        valueSuffix: ' km/h',
      },
    },
  ],
}
export default {

  data() {
    return {
      options: data,
      Highcharts
    }
  },
  mounted() {
    // let assetOid = "20190707-182217-fqiKPhMgoZfsDiG";
    const chart = Highcharts.chart('c', this.options);
    // let point = chart.series[0].points[0];

    if (!chart.renderer.forExport) {
      timer = setInterval(function() {
        // axios.get("http://192.168.0.155:5555/api/v1/monitor/" + assetOid)
        // .then(result => {
        //   let newVal = ((+result.data[0].ram_used)*100/(+result.data[0].ram_total)).toFixed(2);
        //   document.getElementById('boss').innerHTML = newVal
        //   point.update(newVal);
        // }).catch(error => {
        //   document.getElementById('boss').innerHTML = error;
        // });
        var point = chart.series[0].points[0],
                newVal,
                inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);
      }, 1000)
    }
  },
  destroyed() {
    if (timer) {
      clearInterval(timer)
    }
  },
}

</script>

<style scoped>
.custombtn {
  width: 45% !important;
}
</style>
