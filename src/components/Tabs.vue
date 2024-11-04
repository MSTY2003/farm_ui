<template>
  <div>
    <TabItemNew v-for="(tab, index) in tabsCopy" :key="index" :pageName="tab" :isSelected="selectedTab === index"
      :showIcon="selectedTab === index" @tab-click="handleTabClick(index)" @tab-close="handleTabClose(tab)" />
  </div>
</template>

<script>
import TabItemNew from './TabItemNew.vue';

export default {
  components: {
    TabItemNew,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selectedTab: {
      type: Number,
      required: true, // 新增的 prop，来自父组件
      default: 0,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    handleTabClick(index) {
      this.$emit('tab-click', index);// 更新选中的 Tab 索引
      console.log(`Tab ${index + 1} clicked`); // 打印日志
    },
    handleTabClose(tabName) {
      this.$emit('tab-closed', tabName);// 发出事件通知父组件关闭的 tab
      console.log(`Tab ${tabName} closed`);// 打印关闭的 Tab 名称
    }
  },
  computed: {
    tabsCopy() {
      return this.tabs; // 返回父组件传入的tabs列表副本
    },
  },
};
</script>

<style scoped>
/* tabs横着排列 */
div {
  height: 100%;
  display: flex;
  justify-content: left;
}
</style>
