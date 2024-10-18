<template>
  <div class="app">
    <el-container style="height: 100%;">
      <el-aside width="20vw" class="aside">
        <el-menu
          id="menu"
          background-color=colors.$primary-background-black
          text-color=colors.$aside-text-color
          active-text-color="#ffffff"
        >
          <el-menu-item index="1">
            <div class="aside-icon"><i class="fa-solid fa-chart-line"></i></div>
            <span class="aside-title">概览</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <div class="aside-icon"><i class="fa-solid fa-house"></i></div>
              <span class="aside-title">地块管理</span>
            </template>
            <el-menu-item index="2-1">地块数据分析</el-menu-item>
            <el-menu-item index="2-2">地块监控画面</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <div class="aside-icon"><i class="fa-solid fa-seedling"></i></div>
              <span class="aside-title">作物管理</span>
            </template>
            <el-menu-item index="3-1">作物分布</el-menu-item>
            <el-menu-item index="3-2">品种管理</el-menu-item>
            <el-menu-item index="3-3">种植计划</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <div class="aside-icon"><i class="fa-solid fa-tasks"></i></div>
              <span class="aside-title">任务管理</span>
            </template>
            <el-menu-item index="4-1">任务分配</el-menu-item>
            <el-menu-item index="4-2">设备管理</el-menu-item>
            <el-menu-item index="4-3">设备控制</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <!-- 这里的图标使用库存管理的图标 -->
              <div class="aside-icon"><i class="fa-solid fa-box-open"></i></div>
              <span class="aside-title">农资管理</span>
            </template>
            <el-menu-item index="5-1">出库管理</el-menu-item>
            <el-menu-item index="5-2">入库管理</el-menu-item>
            <el-menu-item index="5-3">在库查询</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>
              <!-- 这里图标用农田图标 -->
              <div class="aside-icon"><i class="fa-solid fa-tractor"></i></div>
              <span class="aside-title">农场管理</span>
            </template>
            <el-menu-item index="5-1">人员管理</el-menu-item>
            <el-menu-item index="5-2">业务数据</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header
          class="header"
          height="10vh"
        >
          <div class="top-part"></div>
          <div class="bottom-part"></div>
        </el-header>
        <el-main>main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@use '@/assets/colors';
@import '@fortawesome/fontawesome-free/css/all.css';

.app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: colors.$content-background-color;
}

#menu {
  // 边框颜色改为colors.$secondary-background-black
  border-color: colors.$secondary-background-black;
}

.aside {
  background-color: colors.$secondary-background-black;
  color: colors.$aside-text-color;
}

.aside-title {
  color: colors.$aside-active-text-color;
}

.aside-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: colors.$aside-active-text-color;
  margin-right: 1vw
}

.el-header {
  background-color: colors.$content-white;
}

.el-header .top-part {
  height: 60%;
}

.el-header .bottom-part {
  height: 40%;
}
</style>
