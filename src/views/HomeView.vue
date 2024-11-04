<template>
  <div class="main-container">
    <!-- 第一行的四个卡片容器 -->
    <!-- 第一个卡片，在职员工：员工图标、描述文字、在职员工/总员工数量 -->
    <div id="card-employee"></div>
    <!-- 第二个卡片，在线设备：设备图标、描述文字、在线设备/总设备数量 -->
    <div id="card-device"></div>
    <!-- 第三个卡片，使用中大棚：大棚图标、描述文字、使用中大棚/总大棚数量 -->
    <div id="card-farm"></div>
    <!-- 第四个卡片，使用中地块：地块图标、描述文字、使用中地块/总地块数量 -->
    <div id="card-field"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      // 正在工作员工数量
      working_employees: 0,
      // 总员工数量
      total_employees: 0,
      // 在线设备数量
      online_devices: 0,
      // 总设备数量
      total_devices: 0,
      // 使用中大棚数量
      using_farms: 0,
      // 总大棚数量
      total_farms: 0,
      // 使用中地块数量
      using_fields: 0,
      // 总地块数量
      total_fields: 0,
    }
  },
}
</script>
