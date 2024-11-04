<template>
  <div @click="tabOnClick" :class="tabClass" id="item" style="height: 100%;">
    <!-- 下面放一个awesome图标实心的圆形 -->
    <div v-if="showIcon" class="icon">
      <i class="fas fa-circle"></i>
    </div>
    <span>{{ pageName }}</span>
    <!-- 下面放一个关闭按钮 -->
    <div v-if="isSelected" class="close-btn" @click.stop="closeTab">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    showIcon: Boolean,
  },
  computed: {
    tabClass() {
      return this.isSelected ? 'selected' : 'unselected';
    },
  },
  methods: {
    tabOnClick() {
      this.$emit('tab-click'); // 发出事件到父组件
      console.log('this.isSelected', this.isSelected);
    },
    closeTab() {
      this.$emit('tab-close', this.pageName); // 发出关闭事件到父组件
      console.log(this.pageName + 'tab closed');
    }
  }
}
</script>

<style lang="scss">
@use '@/assets/colors';
@import '@fortawesome/fontawesome-free/css/all.css';

#item {
  margin-right: 0.4vw;
}

span{
  height: 100%;
  // 文字内容垂直居中
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon{
  font-size: 0.5vw;
  margin-right: 0.5vw;
}

.close-btn{
  font-size: 0.8vw;
  margin-left: 0.5vw;
  cursor: pointer;
}

.unselected {
  color: colors.$content-text-color;
  background-color: colors.$content-white;
  border-color: colors.$content-border-color;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  height: fit-content;
  width: fit-content;
  padding: 0px 16px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.selected {
  color: colors.$content-white;
  background-color: colors.$secondary-background-black;
  border-color: colors.$secondary-background-black;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  height: fit-content;
  width: fit-content;
  padding: 0px 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
