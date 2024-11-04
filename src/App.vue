<script>
import Tabs from './components/Tabs.vue' // 导入Tabs组件

export default {
  data() {
    return {
      currentTitle: '概览', // 默认标题
      currentIcon: 'fa-chart-line', // 默认图标
      currentIndex: 0, // 用于存储当前选中的菜单项索引
      tabsSelectedIndex: 0, // 用于存储当前选中的 tab 索引
      titles: {
        1: { title: '概览', icon: 'fa-chart-line' },
        '2-1': { title: '地块数据分析', icon: 'fa-house' },
        '2-2': { title: '地块监控画面', icon: 'fa-house' },
        '3-1': { title: '作物分布', icon: 'fa-seedling' },
        '3-2': { title: '品种管理', icon: 'fa-seedling' },
        '3-3': { title: '种植计划', icon: 'fa-seedling' },
        '4-1': { title: '任务分配', icon: 'fa-tasks' },
        '4-2': { title: '设备管理', icon: 'fa-tasks' },
        '4-3': { title: '设备控制', icon: 'fa-tasks' },
        '5-1': { title: '出库管理', icon: 'fa-box-open' },
        '5-2': { title: '入库管理', icon: 'fa-box-open' },
        '5-3': { title: '在库查询', icon: 'fa-box-open' },
        '6-1': { title: '人员管理', icon: 'fa-tractor' },
        '6-2': { title: '业务数据', icon: 'fa-tractor' }
      },
      tabs: ['概览', '人员管理'],
    }
  },
  methods: {
    handleSelect(index) {
      // 根据选择的index更新标题和图标
      if (this.titles[index]) {
        this.currentTitle = this.titles[index].title
        this.currentIcon = this.titles[index].icon
        this.currentIndex = index; // 更新当前索引
        this.handleTabAdd(this.titles[index].title);
        console.log(`tabsSelectedIndex: ${this.tabsSelectedIndex}, currentIndex: ${this.currentIndex}`); // 打印输出被选择的菜单项索引
        // 在选择项后调用changeView来更新路由视图
        this.changeView(index);
      }
    },
    // 根据当前的选中项切换路由的视图
    changeView(index) {
      // 根据当前选中的索引，构建路由路径
      let routePath = '';
      if (index === '1') {
        routePath = '/home'; // 假设概览的路由路径为 /overview
      }

      // 使用 Vue Router 进行跳转
      if (routePath) {
        this.$router.push(routePath);
      }
    },
    // 添加新的tabs项
    handleTabAdd(TabItemName) {
      // 先检查tabs中是否有重复的名称
      if (!this.tabs.includes(TabItemName)) {
        this.tabs.push(TabItemName); // 增加新的 tab 到父组件的 tabs 列表
        this.tabsSelectedIndex = this.tabs.length - 1; // 选中新的 tab (tab末项)
      } else {
        // 如果已经创建，将选中项设置为已存在项
        this.tabsSelectedIndex = this.tabs.indexOf(TabItemName);
      }
    },
    handleTabRemove(tabName) {
      this.tabs = this.tabs.filter(tab => tab !== tabName); // 更新父组件的 tabs 列表
      console.log(`Removed tab: ${tabName}`); // 打印输出被移除的 tab 名称
    },
    updateTab(index) {
      this.tabsSelectedIndex = index; // 更新当前选中的 tab 索引
    },
    tabClicked(index) {
      this.tabsSelectedIndex = index; // 更新当前选中的 tab 索引
      // 根据选中的tab在titles中查找对应的index赋值给currentIndex
      for (const key in this.titles) {
        if (this.titles[key].title === this.tabs[index]) {
          this.currentIndex = key;
          this.handleSelect(key);
          break;
        }
      }
      console.log(`Clicked tab: ${this.tabs[index]},currentIndex: ${this.currentIndex}`); // 打印输出被点击的 tab 名称
    },
  },
  components: {
    Tabs // 注册Tabs组件
  }
}
</script>

<template>
  <div class="app">
    <el-container style="height: 100%;">
      <el-aside width="20vw" class="aside">
        <el-menu id="menu" background-color=colors.$primary-background-black text-color=colors.$aside-text-color
          active-text-color="#ffffff" @select="handleSelect" :default-active="currentIndex">
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
            <el-menu-item index="6-1">人员管理</el-menu-item>
            <el-menu-item index="6-2">业务数据</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header" height="10vh">
          <div class="top-part">
            <!-- 顶栏左侧的可变图标，根据选中的菜单项同时改变图标和文字 -->
            <div class="icon-container"><font-awesome-icon :icon="currentIcon" /></div>
            <div class="title-container">{{ currentTitle }}</div>
          </div>
          <div class="bottom-part">
            <!-- 底部的tagsview 用于切换曾经打开过的窗口 -->
            <Tabs :tabs="tabs" @tab-click="tabClicked" @tab-closed="handleTabRemove" :selectedTab="tabsSelectedIndex" @update:selectedTab="updateTab" />
          </div>
        </el-header>
        <el-main>
          <!-- 路由视图 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

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

.el-aside::-webkit-scrollbar {
      display: none;
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
  height: 50%;
  display: flex;
  // 水平靠左，垂直居中
  justify-content: flex-start;
  align-items: center;
}

.el-header .icon-container {
  font-size: 1.7vw;
  margin-right: 1vw;
}

.el-header .title-container {
  font-size: 1.5vw;
  font-weight: bold;
}

.el-header .bottom-part {
  display: flex;
  justify-content: flex-start;
  align-items: end;
  height: 45%;
}
</style>
