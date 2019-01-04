<template>
  <div>
    <page-header title="Picker"></page-header>
    <group title="vux">
      <!-- 用 name ,就不用带 value 的 data -->
      <popup-picker
        title="name"
        :data="list1"
        v-model="value1"
        @on-change="onChange"
        placeholder="placeholder"
      ></popup-picker>

      <!-- value 不能是 number -->
      <popup-picker
        title="name-value"
        :data="list2"
        v-model="value2"
        @on-change="onChange2"
        show-name
        ref="picker2"
      ></popup-picker>

      <!-- :columns="2" 直接改层级 联动数据结构相同 -->
      <popup-picker
        title="联动"
        :data="list3"
        :columns="3"
        v-model="value3"
        ref="picker3"
        :show-name="true"
      ></popup-picker>

      <!-- :start-date="startDate" :end-date="endDate" -->
      <datetime title="datetime" v-model="date"></datetime>

      <x-address
        title="选择城市"
        ref="address"
        :raw-value="true"
        v-model="cityId"
        :list="addressData"
        @on-hide="addressHide"
      ></x-address>

      <!-- calendar只能在Group中使用  -->
      <!-- 当绑定值为数组时，日历将为多选模式 -->
      <!-- 置值为'TODAY'默认当前日期 -->
      <calendar title="Calendar 日历" v-model="calendarValue"></calendar>
    </group>
  </div>
</template>
<script>
import {
  PopupPicker,
  Datetime,
  Group,
  XAddress,
  ChinaAddressV4Data,
  Calendar
} from "vux";

import { Toast } from "mint-ui";

export default {
  components: {
    PopupPicker,
    Datetime,
    Group,
    Toast,
    XAddress,
    ChinaAddressV4Data,
    Calendar
  },
  data() {
    return {
      date: "",
      value1: [],
      value2: [],
      value3: [],
      cityId: [],
      cityName: [],
      calendarValue: [],
      addressData: ChinaAddressV4Data,
      list1: [["小米", "iPhone", "华为", "情怀", "三星", "其他", "不告诉你"]],
      list2: [[{ name: "小米", value: "1" }, { name: "iPhone", value: "2" }]],
      list3: [
        {
          name: "中国",
          value: "china",
          parent: 0
        },
        {
          name: "美国",
          value: "USA",
          parent: 0
        },
        {
          name: "广东",
          value: "china001",
          parent: "china"
        },
        {
          name: "广西",
          value: "china002",
          parent: "china"
        },
        {
          name: "美国001",
          value: "usa001",
          parent: "USA"
        },
        {
          name: "美国002",
          value: "usa002",
          parent: "USA"
        },
        {
          name: "广州",
          value: "gz",
          parent: "china001"
        },
        {
          name: "深圳",
          value: "sz",
          parent: "china001"
        },
        {
          name: "广西001",
          value: "gx001",
          parent: "china002"
        },
        {
          name: "广西002",
          value: "gx002",
          parent: "china002"
        },
        {
          name: "美国001_001",
          value: "0003",
          parent: "usa001"
        },
        {
          name: "美国001_002",
          value: "0004",
          parent: "usa001"
        },
        {
          name: "美国002_001",
          value: "0005",
          parent: "usa002"
        },
        {
          name: "美国002_002",
          value: "0006",
          parent: "usa002"
        }
      ]
    };
  },
  methods: {
    onChange() {
      Toast(this.value1[0]);
    },
    onChange2() {
      Toast(this.value2[0]);
      console.log(this.$refs.picker2.getNameValues());
      // 无效
      // console.log(this.$refs.picker2.nameValue);
    },
    addressHide(change) {
      Toast(
        "change:" +
          change +
          ";" +
          this.cityId[0] +
          "-" +
          this.cityId[1] +
          "-" +
          this.cityId[2]
      );
      this.cityName = this.$refs.address.nameValue;
      console.log(this.cityName);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
