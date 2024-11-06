<template>
  <div class="main-container">
    <!-- 第一行的四个卡片容器 -->
    <!-- 第一个卡片，在职员工：员工图标、描述文字、在职员工/总员工数量 -->
    <div id="card-employee" class="card">
      <!-- 员工图标 awesome-icon -->
      <div class="card-icon">
        <i class="fas fa-user-tie"></i>
      </div>
      <div class="card-content">
        <!-- 员工描述文字 -->
        <div class="card-text">
          <span>在职员工</span>
        </div>
        <!-- 在职员工/总员工数量 -->
        <div class="card-number">
          <span class="text-data">{{ working_employees }}/{{ total_employees }}</span>
        </div>
      </div>
    </div>
    <!-- 第二个卡片，在线设备：设备图标、描述文字、在线设备/总设备数量 -->
    <div id="card-device" class="card">
      <!-- 设备图标 awesome-icon -->
      <div class="card-icon">
        <i class="fas fa-laptop"></i>
      </div>
      <div class="card-content">
        <!-- 设备描述文字 -->
        <div class="card-text">
          <span>在线设备</span>
        </div>
        <!-- 在线设备/总设备数量 -->
        <div class="card-number">
          <span class="text-data">{{ online_devices }}/{{ total_devices }}</span>
        </div>
      </div>
    </div>
    <!-- 第三个卡片，使用中大棚：大棚图标、描述文字、使用中大棚/总大棚数量 -->
    <div id="card-farm" class="card">
      <!-- 大棚图标 awesome-icon -->
      <div class="card-icon">
        <i class="fas fa-tree"></i>
      </div>
      <div class="card-content">
        <!-- 大棚描述文字 -->
        <div class="card-text">
          <span>种植大棚</span>
        </div>
        <!-- 使用中大棚/总大棚数量 -->
        <div class="card-number">
          <span class="text-data">{{ using_farms }}/{{ total_farms }}</span>
        </div>
      </div>
    </div>
    <!-- 第四个卡片，使用中地块：地块图标、描述文字、使用中地块/总地块数量 -->
    <div id="card-field" class="card">
      <!-- 地块图标 awesome-icon -->
      <div class="card-icon">
        <i class="fas fa-map-marker-alt"></i>
      </div>
      <div class="card-content">
        <!-- 地块描述文字 -->
        <div class="card-text">
          <span>种植地块</span>
        </div>
        <!-- 使用中地块/总地块数量 -->
        <div class="card-number">
          <span class="text-data">{{ using_fields }}/{{ total_fields }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 第二行的图表容器 -->
  <div class="chart-container-top">
    <div ref="chartDom" class="chart"></div>
    <div ref="chartDom2" class="chart"></div>
  </div>
  <div class="chart-container">
    <div ref="chartDom3" class="chart"></div>
    <div ref="chartDom4" class="chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import * as echarts from 'echarts';

// 数据定义
const working_employees = ref(10);
const total_employees = ref(50);
const online_devices = ref(15);
const total_devices = ref(30);
const using_farms = ref(5);
const total_farms = ref(20);
const using_fields = ref(8);
const total_fields = ref(25);

const chartDom = ref(null);
let chartInstance = null;

const chartDom2 = ref(null);
let chartInstance2 = null;

const chartDom3 = ref(null); // 引用第三个图表DOM
let chartInstance3 = null; // 第三个图表实例

const chartDom4 = ref(null); // 引用第四个图表DOM
let chartInstance4 = null; // 第四个图表实例

// 随机生成每月耗电量数据
const generateRandomData = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 101)); // 生成0到100的随机数
};

// 随机生成每月用水量数据
const generateRandomWaterData = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 201)); // 生成0到200的随机数
};

// 随机生成区域产值数据
const generateRandomOutputData = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 500)); // 生成0到500的随机数
};

// 随机生成区域完成情况数据
const generateRandomCompletionData = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)); // 生成0到100的随机数
};

onMounted(async() => {
  await nextTick(); // 确保DOM已经渲染完成
  chartInstance = echarts.init(chartDom.value); // 初始化第一个图表
  chartInstance2 = echarts.init(chartDom2.value); // 初始化第二个图表
  chartInstance3 = echarts.init(chartDom3.value); // 初始化第三个图表
  chartInstance4 = echarts.init(chartDom4.value); // 初始化第四个图表

  const option = {
    title: { text: '实时耗电量' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['耗电量']
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      interval: 20
    },
    series: [
      {
        name: '耗电量',
        type: 'line', // 这里修改为折线图
        data: generateRandomData() // 使用随机生成的数据
      }
    ],
    grid: { // 这里定义图表的内边距
      bottom: '10%',
      containLabel: true // 使图表内容不超出边界
    }
  };

  const option2 = {
    title: { text: '每月用水量' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['用水量']
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 200,
      interval: 40
    },
    series: [
      {
        name: '用水量',
        type: 'bar', // 使用柱状图
        data: generateRandomWaterData() // 使用随机生成的水量数据
      }
    ],
    grid: { // 这里定义图表的内边距
      bottom: '10%',
      containLabel: true // 使图表内容不超出边界
    }
  };

  const option3 = {
    title: { text: '区域产值情况' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['区域产值'],
    },
    xAxis: {
      type: 'category',
      data: ['区域A', '区域B', '区域C', '区域D', '区域E', '区域F'],
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 500,
      interval: 100,
    },
    series: [
      {
        name: '区域产值',
        type: 'bar',
        data: generateRandomOutputData(), // 使用随机生成的产值数据
      },
    ],
    grid: {
      bottom: '10%',
      containLabel: true,
    },
  };

  const option4 = {
    title: { text: '区域完成情况' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['完成情况'],
    },
    xAxis: {
      type: 'category',
      data: ['区域A', '区域B', '区域C', '区域D', '区域E', '区域F'],
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      interval: 20,
    },
    series: [
      {
        name: '完成情况',
        type: 'line',
        data: generateRandomCompletionData(), // 使用随机生成的完成情况数据
      },
    ],
    grid: {
      bottom: '10%',
      containLabel: true,
    },
  };

  chartInstance.setOption(option);
  chartInstance2.setOption(option2);
  chartInstance3.setOption(option3);
  chartInstance4.setOption(option4);
});

// 销毁ECharts实例
onUnmounted(() => {
  if (chartInstance != null && chartInstance.dispose) {
    chartInstance.dispose();
  }
  if (chartInstance2 != null && chartInstance2.dispose) {
    chartInstance2.dispose(); // 清理第二个图表实例
  }
  if (chartInstance3 != null && chartInstance3.dispose) {
    chartInstance3.dispose(); // 清理第三个图表实例
  }
  if (chartInstance4 != null && chartInstance4.dispose) {
    chartInstance4.dispose(); // 清理第四个图表实例
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/colors';
@import '@fortawesome/fontawesome-free/css/all.css';

.main-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  margin-right: 2vw;
}

.card {
  display: flex;
  justify-content: space-between;
  flex: 1;
  background-color: colors.$content-white;
  height: 15vh;
  padding: 0.3vw 2vw;
  margin: 0.5vh;
  border-radius: 0.25vw;
}

.card-text span {
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 3vh;
}

.card-content {
  // 垂直排布靠右
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

// 图表容器
.chart-container-top {
  display: flex;           // 使用flex布局
  justify-content: space-between; // 让图表之间有间距
  padding: 1vw 0 0 0;
  width: 100%;
}

// 图表容器
.chart-container {
  display: flex;           // 使用flex布局
  justify-content: space-between; // 让图表之间有间距
  padding: 0.5vw 0 0 0;
  width: 100%;
}

// 图表样式
.chart {
  flex: 1;                // 让每个图表占据相等的空间
  height: 35vh;
  background-color: colors.$content-white;
  border-radius: 0.25vw;
  // padding除了底下的边距外，其他都为2vw
  padding: 2vw 2vw 0 2vw;
  margin: 0.5vh;
}
</style>
