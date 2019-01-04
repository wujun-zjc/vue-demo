<template>
  <div>
    <page-header title="Demos" backText="返回" moreText="更多" :hasMore="true" :clickMore="clickMore"></page-header>

    <div class="main">
      <div class="search-content">
        <div class="search-text">垃圾</div>
        <div class="search-right"></div>
      </div>

      <div class="carousel-content">
        <el-carousel :autoplay="false" type="card" height="75px">
          <el-carousel-item v-for="item in carouselData" :key="item">
            <!-- <img src="../../assets/images/banner1.png"> -->
            <img :src="item">
            <!-- <a href="" style="background:url('../../assets/images/banner1.png')"></a> -->
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <page-sider v-model="showSider" width="200">
      <div class="sider-content">
        <div class="sider-header">demo 列表</div>
        <div class="sider-body">
          <mu-button color="primary" flat :full-width="true" to="/Picker">Picker</mu-button>
          <mu-button color="primary" flat :full-width="true" to="/Switch">Switch</mu-button>
          <mu-button color="primary" flat small :full-width="true" to="/Button">Button/MessageBox</mu-button>
        </div>
      </div>
    </page-sider>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from "element-ui";

import { Button } from "muse-ui";

import Pagesider from "../../components/page-sider";

import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";

import { setTimeout } from "timers";

export default {
  components: {
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem,
    "mu-button": Button,
    "page-sider": Pagesider
  },
  data() {
    return {
      searchValue: "",
      carouselData: [banner1, banner2, banner3],
      // carouselData: ["../../assets/images/banner1.png","../../assets/images/banner2.png","../../assets/images/banner3.png"],
      showSider: false
    };
  },
  methods: {
    clickMore() {
      this.showSider = true;
    }
  }
};
</script>
<style lang="less" scope>
.search-content {
  height: 44px;
  // line-height: 44px;
  overflow: hidden;
  .search-text {
    float: left;
    width: 20%;
  }
  .search-right {
    float: right;
    width: 80%;
  }
}
.carousel-content {
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.sider-content {
  padding: 15px;
  .sider-header {
    height: 44px;
    line-height: 44px;
    font-weight: bold;
  }
  .sider-body {
    padding: 0 10px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      margin: 5px 0;
    }
  }
}
</style>