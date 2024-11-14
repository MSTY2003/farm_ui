<template>
    <div class="main-content">
        <!-- 左上角搜索框 使用element plus的el-autocomplete组件 -->
        <el-autocomplete v-model="searchQuery" :fetch-suggestions="fetchSuggestions" placeholder="请输入搜索内容"
            @select="handleSelect" class="search-autocomplete"></el-autocomplete>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // 用于绑定搜索框的输入
      suggestions: [] // 用于存储建议的内容
    };
  },
  methods: {
    fetchSuggestions(query, callback) {
      // 模拟搜索建议，你可以根据实际情况请求接口获取数据
      const suggestions = this.getSampleSuggestions(query);
      callback(suggestions);
    },
    getSampleSuggestions(query) {
      // 示例数据，可以替换为你的数据
      const sampleData = ['苹果', '香蕉', '橙子', '西瓜', ' Strawberry'];
      return sampleData.filter(item => item.includes(query));
    },
    handleSelect(item) {
      // 处理选中的建议
      console.log(`选中了: ${item}`);
      this.searchQuery = item; // 将选中项赋值给搜索框
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/colors';
@import '@fortawesome/fontawesome-free/css/all.css';

.main-content {
    height: 100%;
    width: 100%;
    background-color: colors.$content-white;
}

.search-autocomplete {
    width: 25vw; // 根据需要调整搜索框宽度
    margin: 20px; // 根据需要设置边距
}
</style>
