<template>
  <div class="container">
    <div>计数结果：{{count}}</div>
    <button class="navlink" @click="haha">进入计数器页面</button>
    <a href="/pages/test1/main" class="navlink">进入计数器页面</a>
    <i-button type="primary" @click="bindViewTap">这是一个iview按钮</i-button>
  </div>
</template>

<script>
import globalStore from "../../stores/global-store";

export default {
  data() {
    return {
      
    };
  },
  computed: {
    count() {
      return globalStore.state.count;
    }
  },
  methods: {
    haha() {
      wx.navigateTo({
        url: "/pages/test1/main"
      });
    },
    bindViewTap() {
      console.log("点我干啥");
    },
  }
};
</script>

<style scoped>
.navlink {
  text-decoration: underline;
  text-align: center;
}
</style>