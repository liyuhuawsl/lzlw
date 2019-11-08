<template>
  <div class="container">
    <header>
      <div class="userleft">
        <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt />
        <div class="text">
          <span>普通用户李玉华</span>
        </div>
      </div>
      <div class="QRcode">
        <img src="https://yanxuan.nosdn.127.net/2bbe2405bcc99ab49278fc3f1138a578.png" alt />
        <img src="../../assets/网易严选img/qrcode.png" alt />
      </div>
      <span>信息</span>
    </header>
    <p class="assets">我的资产</p>
    <ul class="onassets">
      <li v-for="(item) in assetsData" :key="item.id">
        <p v-text="item.money"></p>
        <p v-text="item.text"></p>
      </li>
    </ul>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
let assetsData = [
  {
    id: 1,
    money: "￥0",
    text: "回馈金"
  },
  {
    id: 2,
    money: "0",
    text: "红包"
  },
  {
    id: 3,
    money: "￥0",
    text: "优惠劵"
  },
  {
    id: 4,
    money: "￥0",
    text: "津贴"
  },
  {
    id: 5,
    money: "0",
    text: "礼品卡"
  }
];
export default {
  data() {
    return {
      phone: "",
      password: "",
      assetsData
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 3rem;
  background: url("http://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png")
    no-repeat center center;
  .userleft {
    .text {
      float: left;
      margin-left: 0.3rem;
      margin-top: -0.3rem;
      p:nth-child(1) {
        font-size: 0.35rem;
      }
      p {
        font-size: 0.28rem;
        font-weight: 200;
        width: 2.5rem;
        height: 0.5rem;
        margin: 0;
        color: #fff;
      }
    }
    width: 75%;
    line-height: 2.5rem;
    img {
      margin-left: 0.5rem;
      margin-top: 0.6rem;
      float: left;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-size: 100% 100%;
      line-height: 1.5rem;
    }
  }
  .QRcode {
    width: 25%;
    float: right;
    height: 100%;
    img:nth-child(2) {
      margin-left: 0.3rem;
    }
    img {
      margin-top: 1.2rem;
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      background-size: 100% 100%;
    }
  }
}
.assets {
  font-size: 0.3rem;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-indent: 0.5rem;
  border-bottom: 0.01rem solid #eee;
}
.onassets {
  li {
    margin-top: 0.3rem;
    font-size: 0.25rem;
    text-align: center;
    width: 20%;
    float: left;
    p:nth-child(1) {
      font-weight: 600;
    }
    p {
      margin-top: 0.1rem;
    }
  }
}
</style>
