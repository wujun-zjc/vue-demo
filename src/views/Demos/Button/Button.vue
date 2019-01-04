<template>
  <div>
    <page-header title="Button"></page-header>

    <div class="messageBox-content">
      <div class="messageBox">
        <mu-button color="success" @click="messageAlert">alert</mu-button>
      </div>
      <div class="messageBox">
        <mu-button color="warning" @click="messageConfirm">confirm</mu-button>
      </div>
      <div class="messageBox">
        <mu-button color="error" @click="messagePrompt">prompt</mu-button>
      </div>
    </div>

    <div class="long-button">
      <mu-button color="primary">primary</mu-button>
      <mu-button flat color="secondary">Secondary</mu-button>
    </div>
  </div>
</template>
<script>
import { Toast, Indicator, MessageBox } from "mint-ui";
import { Button } from "muse-ui";

export default {
  components: {
    Toast,
    Indicator,
    MessageBox,
    "mu-button": Button
  },
  methods: {
    messageAlert() {
      MessageBox.alert("操作成功!");
    },
    messageConfirm() {
      MessageBox.confirm(
        "三个MessageBox有确定就可以带then,有取消就可以带catch!"
      )
        .then(() => {
          Toast("确定了");
        })
        .catch(() => {
          Toast("取消了");
        });
    },
    messagePrompt() {
      // ({value}) 必须带上 ({}) , 因为有两个参数 , action 没卵用 , value 不填为 null
      MessageBox.prompt("请输入,不输入则 value 为 null 不为''!")
        .then(({ value }) => {
          Indicator.open({
            text: "加载中...",
            // spinnerType: "fading-circle"
            // spinnerType: "double-bounce"
            spinnerType: "triple-bounce"
          });
          setTimeout(function() {
            Indicator.close();
            // 直接 toast(null) 会报错
            Toast(value + "");
          }, 2000);
        })
        .catch(() => {
          Toast("取消了");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.messageBox-content {
  width: 100%;
  // height: 40px;
  // line-height: 40px;
  margin: 10px 0;
  background-color: #fff;
  display: flex;
  .messageBox {
    flex: 1;
    text-align: center;
    button {
      margin: 10px;
      // padding: 5px 15px;
      // border-radius: 5px;
      // border: 1px solid #ccc;
      // background-color: #fff;
    }
  }
}
.long-button {
  width: 100%;
  background-color: #fff;
  button {
    width: 300px;
    margin: 5px 30px;
  }
}
</style>
