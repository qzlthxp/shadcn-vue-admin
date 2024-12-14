<template>
  <div class="border p-4 rounded-lg">
    <div id="dashboard-chart" class="h-full"> </div>
  </div>
</template>

<script setup>
  import * as echarts from 'echarts/core';
  import { GridComponent } from 'echarts/components';
  import { BarChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { onMounted, onUnmounted } from 'vue';

  echarts.use([GridComponent, BarChart, CanvasRenderer]);

  let myChart = null;

  const renderChart = () => {
    let option;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' },
            ]),
          },
        },
      ],
    };

    option && myChart.setOption(option);
  };

  const handleResize = () => {
    myChart && myChart.resize();
  };

  onMounted(() => {
    const chartDom = document.getElementById('dashboard-chart');
    myChart = echarts.init(chartDom);
    renderChart();

    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
</script>
