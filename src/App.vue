
<template>
  <div id="app">
    <!-- <transition name="fade"> -->
    <transition name="slide">
      <router-view :key="activeQuery" class="transition-view"></router-view>
    </transition>
    <!-- <router-view :key="activeQuery"></router-view> -->
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    activeQuery() {
      return this.$route.query + new Date();
    }
  },
  mounted() {
    console.log("vw:" + window.innerWidth + "-vh:" + window.innerHeight);
    console.log(
      window.screen.width * window.devicePixelRatio +
        "-" +
        window.screen.height * window.devicePixelRatio
    );
  }
};
</script>
<style lang="less" scoped>
.transition-view {
  // 直接给 fixed 可以实现好看的滑动效果 translate(30px, 0) , 但是会跟 Loadmore 冲突 , 所以在 四个阶段都给上 fixed
  // 不用 translate , 只用 opacity 则渐隐 , 不需要 position
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // transition: all 0.5s linear;
  // transition: all 0.5s ease;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

// 动画效果
.slide-leave,
.slide-enter-active {
  position: fixed;
}
.slide-enter {
  position: fixed;
  opacity: 0;
  // translate(360px, 0) 全屏滚动
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-leave-active {
  position: fixed;
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.fade-leave,
.fade-enter-active {
  position: fixed;
}
.fade-enter {
  position: fixed;
  opacity: 0;
}
.fade-leave-active {
  position: fixed;
  opacity: 0;
}
</style>


<style lang="less">  // vux 自定义属性
.weui-cells{
  font-size: 14px !important;
}
// picker颜色
.vux-cell-value {
  color: #333 !important;
}
// cell border
.vux-cell-box:not(:first-child):before {
  left: 0 !important;
}
// cell border      datatime/calendar
.weui-cell:before,
.vux-calendar:before {
  left: 0 !important;
}
</style>


