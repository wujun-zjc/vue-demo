<template>
  <div>
    <page-header title="我的" :hasBack="false"></page-header>
  </div>
</template>
<script>
import { Switch } from "element-ui";
import { Toast } from "mint-ui";
export default {
  components: {
    "el-switch": Switch,
    Toast
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
