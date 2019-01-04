<template>
  <div>
    <div class="page-header">
      <div class="position">
        <div class="left" v-show="hasBack" @click="back">
          <div class="back-icon">
            <img src="../assets/images/back.png" alt>
          </div>
          <div class="back-text">{{backText}}</div>
        </div>
        <div class="center">{{title}}</div>
        <div class="right" v-show="hasMore" @click="clickMore">
          <div class="more-text">{{moreText}}</div>
          <div class="more-icon">
            <img src="../assets/images/more.png" alt>
          </div>
        </div>
      </div>
    </div>

    <div class="white-space"></div>
  </div>
</template>
<script>
export default {
  name: "Pageheader",
  props: {
    title: String,
    backText: String,
    moreText: String,
    hasBack: {
      type: Boolean,
      default: true
    },
    hasMore: {
      type: Boolean,
      default: false
    },
    clickMore: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      // title: "",
      // hasBack:false,
      // backText:"",
      // hasMore:false,
      // moreText:""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.page-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: #fff;
  // border-bottom: 1px solid #ccc;
  .position {
    position: relative;
    .left {
      position: absolute;
      top: 0;
      left: 10px;
      font-size: 12px;
      color: #666;
      .back-icon {
        display: inline-block;
        img {
          width: 15px;
        }
      }
      .back-text {
        margin-left: 3px;
        display: inline-block;
      }
    }
    .center {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }
    .right {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 12px;
      color: #666;
      .more-text {
        display: inline-block;
      }
      .more-icon {
        display: inline-block;
        img {
          width: 23px;
        }
      }
    }
  }
}
.white-space {
  height: 44px;
}
</style>
