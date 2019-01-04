<template>
  <div>
    <page-header title="Form"></page-header>

    <!-- => <= 布局   popup-picker/datetime/x-address : value-text-align="left" ; cell : value-align="left"  -->
    <!-- <group title="投保人信息" label-align="right" label-width="80px" label-margin-right="20px"> -->
    <group title="投保人信息">
      <x-input
        title="姓名"
        placeholder="请输入投保人姓名"
        text-align="right"
        v-model="name"
        :max="5"
        required
        ref="name"
        is-type="china-name"
      ></x-input>

      <popup-picker
        title="证件类型"
        :data="idTypeList"
        v-model="idType"
        show-name
        required
        ref="idType"
        @on-change="idTypeChange"
      ></popup-picker>

      <x-input
        title="证件号码"
        placeholder="请输入证件号码"
        text-align="right"
        v-model="idNum"
        :max="18"
        required
        ref="idNum"
        :is-type="idValidate"
      ></x-input>
      <!-- @on-change="idChange" -->
      <datetime
        title="生日"
        placeholder="请选择出生日期"
        v-model="birthday"
        start-date="1900-01-01"
        :end-date="today"
        default-selected-value="1990-01-01"
      ></datetime>

      <x-input
        title="年龄"
        placeholder="请输入年龄"
        text-align="right"
        type="number"
        v-model="age"
        :max="3"
        required
        ref="age"
        :is-type="ageValidate"
      ></x-input>

      <cell title="性别">
        <form-switch out v-model="sex" left="女" right="男" color1="#ff4949" color2="#409EFF"></form-switch>
      </cell>

      <x-input
        title="手机号码"
        placeholder="请输入手机号码"
        text-align="right"
        type="tel"
        mask="999 9999 9999"
        v-model="phoneNum"
        :max="13"
        required
        ref="phoneNum"
        is-type="china-mobile"
      ></x-input>

      <x-input
        title="邮箱"
        placeholder="请输入邮箱"
        text-align="right"
        v-model="email"
        :max="24"
        required
        ref="email"
        is-type="email"
      ></x-input>

      <x-address
        title="城市"
        placeholder="请选择城市"
        :raw-value="true"
        v-model="cityCode"
        :list="addressData"
        required
        ref="address"
        @on-hide="addressHide"
      ></x-address>
    </group>

    <group title="被保人信息">
      <!-- placeholder="请选择与投保人关系" -->
      <popup-picker
        title="与投保人关系"
        :data="relationList"
        v-model="relation"
        @on-change="relationChange"
        show-name
        required
        ref="relation"
      ></popup-picker>
    </group>

    <div class="footer">
      <div class="footer-left">
        <span>¥</span>
        <span class="money">{{money}}</span>
        <span>元</span>
      </div>
      <div class="submit" @click="submit">确认并支付</div>
    </div>
  </div>
</template>
<script>
import {
  Group,
  Cell,
  XInput,
  PopupPicker,
  Datetime,
  XAddress,
  ChinaAddressV4Data
} from "vux";
import { Toast } from "mint-ui";

import Formswitch from "../../components/form-switch";

export default {
  components: {
    Group,
    Cell,
    XInput,
    PopupPicker,
    Datetime,
    Toast,
    XAddress,
    ChinaAddressV4Data,
    "form-switch": Formswitch
  },
  data() {
    return {
      today: "",
      name: "",
      idType: ["01"],
      idTypeList: [
        [
          {
            name: "身份证",
            value: "01"
          },
          {
            name: "外国护照",
            value: "02"
          },
          {
            name: "军人证",
            value: "03"
          },
          {
            name: "驾驶证",
            value: "04"
          },
          {
            name: "港澳通行证",
            value: "05"
          },
          {
            name: "中国护照",
            value: "06"
          },
          {
            name: "其他",
            value: "07"
          }
        ]
      ],
      idNum: "",
      birthday: "",
      sex: true,
      age: "",
      phoneNum: "",
      email: "",
      cityCode: [],
      cityName: [],
      addressData: ChinaAddressV4Data,
      relation: ["01"],
      relationList: [
        [
          {
            name: "本人",
            value: "01"
          },
          {
            name: "配偶",
            value: "02"
          },
          {
            name: "子女",
            value: "03"
          },
          {
            name: "父母",
            value: "04"
          },
          {
            name: "其他",
            value: "05"
          }
        ]
      ],
      money: "0"
    };
  },
  methods: {
    idTypeChange() {
      Toast(this.idType[0]);
      console.log(this.$refs.idType.getNameValues());
    },
    idChange() {
      console.log(this.idNum);
      const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
      if (reg.test(this.idNum)) {
        this.idValidate(true);
      } else {
        this.idValidate(false);
      }
    },
    idValidate(value) {
      const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
      if (reg.test(value)) {
        this.sex = parseInt(value.substr(16, 1)) % 2 == 1;
        const birthday =
          value.substring(6, 10) +
          "-" +
          value.substring(10, 12) +
          "-" +
          value.substring(12, 14);
        if (
          new Date(birthday.replace(/-/g, "/")) >
          new Date(this.GetDateStr(0).replace(/-/g, "/"))
        )
          return { valid: false, msg: "身份证号码错误!" };
        this.birthday = birthday;
        return { valid: true };
      } else {
        return { valid: false, msg: "身份证格式错误!" };
      }
    },
    ageValidate(value) {
      if (value >= 0) {
        return { valid: true };
      } else {
        return { valid: false, msg: "年龄错误!" };
      }
    },
    addressHide(change) {
      Toast(
        "change:" +
          change +
          ";" +
          this.cityCode[0] +
          "-" +
          this.cityCode[1] +
          "-" +
          this.cityCode[2]
      );
      this.cityName = this.$refs.address.nameValue;
      console.log(this.cityName);
    },
    relationChange() {
      Toast(this.relation[0]);
      console.log(this.$refs.relation.getNameValues());
    },
    submit() {
      if (!this.$refs.name.valid) {
        this.$refs.name.focus();
        this.$refs.name.blur();
        this.$refs.name.focus();
        return;
      }
      if (!this.$refs.idNum.valid) {
        this.$refs.idNum.focus();
        this.$refs.idNum.blur();
        this.$refs.idNum.focus();
        return;
      }
      if (!this.birthday) {
        Toast("请选择出生日期!");
        return;
      }
      if (!this.$refs.phoneNum.valid) {
        this.$refs.phoneNum.focus();
        this.$refs.phoneNum.blur();
        this.$refs.phoneNum.focus();
        return;
      }
      if (!this.$refs.email.valid) {
        this.$refs.email.focus();
        this.$refs.email.blur();
        this.$refs.email.focus();
        return;
      }
      if (!this.cityCode.length && !this.cityName.length) {
        Toast("请选择地址!");
        return;
      }
    },
    GetDateStr(AddDayCount) {
      let dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
      let y = dd.getFullYear();
      let m = dd.getMonth() + 1; //获取当前月份的日期
      let d = dd.getDate();
      if (m >= 1 && m <= 9) m = "0" + m;
      if (d >= 0 && d <= 9) d = "0" + d;
      return y + "-" + m + "-" + d;
    }
  },
  mounted() {
    this.today = this.GetDateStr(0);
  },
  watch: {
    birthday(val) {
      let date = new Date(val.replace(/-/g, "/"));
      let d = new Date();
      this.age =
        d.getFullYear() -
        date.getFullYear() -
        (d.getMonth() < date.getMonth() ||
        (d.getMonth() == date.getMonth() && d.getDate() < date.getDate())
          ? 1
          : 0);
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: 99;
  display: flex;
  background-color: #fff;
  .footer-left {
    flex: 0.4;
    color: #ff0000;
    .money {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .submit {
    flex: 0.6;
    color: #fff;
    font-size: 16px;
    background-color: #1679d4;
  }
}
</style>
