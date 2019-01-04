<template>
  <div>
    <page-header title="首页" :hasBack="false" :hasMore="true" :clickMore="clickMore"></page-header>

    <mt-loadmore
      topDropText="释放刷新"
      topLoadingText="刷新中..."
      bottomPullText="上拉加载"
      bottomDropText="释放加载"
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="false"
      ref="loadmore"
    >
      <div class="banner-content">
        <mt-swipe>
          <mt-swipe-item>
            <img src="../../assets/images/banner1.png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/images/banner2.png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/images/banner3.png" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <div class="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">{{item}} - {{index}}</div>
      </div>
    </mt-loadmore>

    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Loadmore, Actionsheet } from "mint-ui";

export default {
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
    "mt-loadmore": Loadmore,
    "mt-actionsheet": Actionsheet
  },
  data() {
    return {
      searchValue: "",
      sheetVisible: false,
      list: [
        "list-item",
        "list-item",
        "list-item",
        "list-item",
        "list-item",
        "list-item",
        "list-item",
        "list-item"
      ],
      actions: [
        {
          name: "demos页",
          method: () => {
            this.$router.push("/demos");
          }
        },
        {
          name: "login页",
          method: () => {
            this.$router.push("/login");
          }
        },
        {
          name: "form页",
          method: () => {
            this.$router.push("/form");
          }
        }
      ],
      defaultResult: [
        "Apple",
        "Banana",
        "Orange",
        "Durian",
        "Lemon",
        "Peach",
        "Cherry",
        "Berry",
        "Core",
        "Fig",
        "Haw",
        "Melon",
        "Plum",
        "Pear",
        "Peanut",
        "Other"
      ]
    };
  },
  methods: {
    request() {
      this.$_request({
        url: "esType=jobseekerService&method=searchPositions",
        data: {
          KeyWords: "",
          userId: "oleXzjrRM31WKTnEf-nYsbnRdZpM",
          pageindex: 1,
          area: ""
        },
        success: function(res) {
          console.log("res:", res);
        },
        fail: function(res) {
          console.log("res:", res);
        }
      });
    },
    clickMore() {
      this.sheetVisible = true;
    },
    onSearch() {
      console.log(this.searchValue);
    },
    clickResult() {
      console.log(this.searchValue);
    },
    loadTop() {
      console.log("loadTop");
    },
    loadBottom() {
      console.log("loadBottom");
    }
  },
  mounted() {
    this.request();
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(searchValue =>
        new RegExp(this.searchValue, "i").test(searchValue)
      );
    }
  }
};
</script>
<style lang="less" scope>
.banner-content {
  width: 100%;
  height: 150px;
  img {
    width: 360px;
    height: 150px;
  }
}
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
</style>