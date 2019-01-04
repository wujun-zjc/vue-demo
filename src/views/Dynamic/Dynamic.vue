<template>
  <div class="page">
    <page-header title="动态" :hasBack="false"></page-header>

    <div class="tab-content">
      <tab v-model="tabIndex" active-color="#00A0E9" bar-active-color="#00A0E9">
        <tab-item @on-item-click="onTabClick" :selected="0 === tabContainerIndex">已发货</tab-item>
        <tab-item @on-item-click="onTabClick" :selected="1 === tabContainerIndex">未发货</tab-item>
        <tab-item
          @on-item-click="onTabClick"
          :selected="2 === tabContainerIndex"
          badge-label="1"
        >全部订单</tab-item>
      </tab>
    </div>
    <div class="swiper-content">
      <swiper v-model="tabContainerIndex" height="100%" :show-dots="false">
        <swiper-item>
          <div class="tab-container">
            <div class="list">
              <div class="list-item" v-for="(item, index) in list" :key="index">{{item}} - {{index}}</div>
            </div>
          </div>
        </swiper-item>
        <swiper-item></swiper-item>
        <swiper-item></swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem } from "vux";
export default {
  data() {
    return {
      tabIndex: 0,
      tabContainerIndex: 0,
      tabContainerData: [1, 2, 3],
      list:["list-item","list-item","list-item","list-item","list-item","list-item","list-item","list-item",]
    };
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  methods: {
    onTabClick(i) {
      this.tabContainerIndex = this.tabIndex;
    }
  },
  watch: {
    tabIndex() {
      // console.log(this.tabIndex);
    }
  }
};
</script>

<style lang="less" scope>
.list {
  padding: 0 15px 10px 15px;
  .list-item {
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin-top: 10px;
    background-color: #fff;
  }
}
.tab-content {
  width: 100%;
  position: fixed;
  top: 44px;
  z-index: 99;
}
.swiper-content {
  height: 553px;
  padding-top: 44px;
  .vux-slider {
    height: 100%;
    .vux-swiper {
      overflow-y: auto;
    }
  }
}
.page {
  height: 598px;
  // position: fixed;
  width: 100%;
}
</style>