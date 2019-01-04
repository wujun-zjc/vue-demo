<template>
  <div>
    <transition name="slide">
      <div class="sider-view" v-show="show" @click="$emit('change', false)">
        <div class="sider-main" :style="'width:'+width+'px'" @click.stop>
            <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Pagesider",
  model: {
    prop: "show",
    event: "change"
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 200
    }
  }
};
</script>
<style lang="less" scoped>
.sider-view {
  width: 360px;
  height: 640px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  .sider-main {
      height: 100%;
    // width: 200px;
    // float: right;
    // padding: 0 15px;
    margin-left: 160px;
    background-color: #fff;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
}

.slide-enter {
  -webkit-transform: translate(360px, 0);
  transform: translate(360px, 0);
}

.slide-leave-active {
  -webkit-transform: translate(360px, 0);
  transform: translate(360px, 0);
}
</style>

