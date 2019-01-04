<template>
  <div>
    <div class="switch-content" @click="disabled?'':$emit('change', !value)">
      <div class="switch-left" v-show="out" :style="{color:!value?colorActive:''}">{{left}}</div>
      <div class="switch" :style="{background:!value?color1:color2}">
        <div class="text-left" v-show="!out">{{left}}</div>
        <div class="text-right" v-show="!out">{{right}}</div>
        <div class="switch-circular" :class="!value?'left':'right'"></div>
      </div>
      <div class="switch-right" v-show="out" :style="{color:value?colorActive:''}">{{right}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formswitch",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean,
    left: {
      type: String,
      default: ""
    },
    right: {
      type: String,
      default: ""
    },
    out: {
      type: Boolean,
      default: false
    },
    color1: {
      type: String,
      default: "#5f606d"
    },
    color2: {
      type: String,
      default: "#2fd237"
    },
    colorActive: {
      type: String,
      default: "#409EFF"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less" scoped>
.switch-content {
  overflow: hidden;
  .switch {
    width: 50px;
    height: 25px;
    line-height: 25px;
    float: left;
    // margin: 10px;
    border-radius: 15px;
    // background-color: #2fd237;
    position: relative;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    .text-left,
    .text-right {
      width: 25px;
      height: 25px;
      line-height: 27px;
      float: left;
      color: #fff;
      text-align: center;
    }
    .switch-circular {
      width: 25px;
      height: 25px;
      border-radius: 15px;
      border: 1px solid #ccc;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
      // transition: all .5s ease;
    }
    .left {
      left: 0;
    }
    .right {
      left: 25px;
    }
  }
  .switch-left,
  .switch-right {
    height: 25px;
    line-height: 25px;
    color: #000;
    margin: 0 5px;
    float: left;
  }
}
</style>

