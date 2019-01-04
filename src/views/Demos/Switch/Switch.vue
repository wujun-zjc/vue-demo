<template>
  <div>
    <page-header title="Switch"></page-header>

    <group title="自定义">
      <cell title="默认">
        <form-switch v-model="value1" @click.native="show"></form-switch>
      </cell>

      <cell title="带字 默认关闭 禁用">
        <form-switch v-model="value2" left="是" right="否" disabled></form-switch>
      </cell>

      <cell>
        <form-switch
          out
          v-model="value3"
          left="哈哈哈哈"
          right="吼吼吼吼"
          color1="#ff4949"
          color2="#409EFF"
        ></form-switch>
      </cell>
    </group>

    <group title="emelent-ui">
      <cell title="默认">
        <el-switch v-model="switchValue1" @change="switchChange"></el-switch>
      </cell>

      <cell title="默认关闭 禁用">
        <el-switch v-model="switchValue2" disabled @change="switchChange"></el-switch>
      </cell>

      <cell>
        <el-switch
          v-model="switchValue3"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="男"
          inactive-text="女"
          @change="switchChange"
        ></el-switch>
      </cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from "vux";
import { Toast } from "mint-ui";
import { Switch } from "element-ui";

import Formswitch from "../../../components/form-switch";

export default {
  components: {
    Group,
    Cell,
    Toast,
    "form-switch": Formswitch,
    "el-switch": Switch
  },
  data() {
    return {
      value1: true,
      value2: false,
      value3: true,

      switchValue1: true,
      switchValue2: false,
      switchValue3: true
    };
  },
  methods: {
    show() {
      Toast(this.value1 + "");
    },
    switchChange() {
      Toast(
        "switch1:" +
          this.switchValue1 +
          ";switch2:" +
          this.switchValue2 +
          ";switch3:" +
          this.switchValue3
      );
    }
  }
};
</script>
