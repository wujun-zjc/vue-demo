<template>
  <div>
    <router-view/>

    <div class="navbar">
      <router-link to="/index/home" active-class="activeNav">
        <div class="nav-content" @click="clickChangeNav('home')">
          <img :src="imgUrlHome">
          <div class="nav-title">首页</div>
        </div>
      </router-link>

      <router-link to="/index/dynamic" active-class="activeNav">
        <div class="nav-content" @click="clickChangeNav('dynamic')">
          <img :src="imgUrlDynamic">
          <div class="nav-title">动态</div>
        </div>
      </router-link>

      <router-link to="/index/my" active-class="activeNav">
        <div class="nav-content" @click="clickChangeNav('my')">
          <img :src="imgUrlMy">
          <div class="nav-title">我的</div>
        </div>
      </router-link>
    </div>

    <div class="white-space"></div>
  </div>
</template>

<script>
import HomeOn from "../../../static/images/home-on.png";
import HomeOff from "../../../static/images/home-off.png";
import DynamicOn from "../../../static/images/dynamic-on.png";
import DynamicOff from "../../../static/images/dynamic-off.png";
import MyOn from "../../../static/images/my-on.png";
import MyOff from "../../../static/images/my-off.png";

export default {
  name: "Index",
  components: {},
  data() {
    return {
      imgUrlHome: HomeOff,
      imgUrlDynamic: DynamicOff,
      imgUrlMy: MyOff
    };
  },
  methods: {
    clickChangeNav(type) {
      // console.log(1);
      this.imgUrlHome = type == "home" ? HomeOn : HomeOff;
      this.imgUrlDynamic = type == "dynamic" ? DynamicOn : DynamicOff;
      this.imgUrlMy = type == "my" ? MyOn : MyOff;
    },
    routerChangeNav() {
      // console.log(2);
      var type = this.$route.path.slice(7);
      this.imgUrlHome = type == "home" ? HomeOn : HomeOff;
      this.imgUrlDynamic = type == "dynamic" ? DynamicOn : DynamicOff;
      this.imgUrlMy = type == "my" ? MyOn : MyOff;
    }
  },
  mounted() {
    this.routerChangeNav();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 42px;
  color: #a0a0a0;
  text-align: center;
  background: #fff;
  border-top: 1px solid #c3c3c3;
  position: fixed;
  bottom: 0;
  z-index: 99;
  display: flex;
  a {
    flex: 1;
    display: block;
    height: 42px;
    // .nav-content {
    //   width: 360px;
    // }
    img {
      width: 20px;
      height: 20px;
      margin-top: 5px;
    }
    .nav-title {
      color: #a0a0a0;
      height: 18px;
      line-height: 10px;
      font-size: 9px;
    }
  }
  .activeNav {
    .nav-title {
      color: #000;
    }
  }
}

.white-space{
  height: 42px;
}
</style>