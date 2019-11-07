<template>
  <div class="container">
    <div class="Box">
      <img
        class="big"
        src="https://yanxuan-item.nosdn.127.net/9dcbdaf570a11e205ec6ea86887eb21b.png?imageView&thumbnail=168x0&quality=75"
        alt
      />
      <img
        class="article"
        src="https://yanxuan.nosdn.127.net/95ee1720e4d8d6d3992a7b5699512336.png?imageView&thumbnail=750x0&quality=75"
        alt
      />
      <div class="bg">
        <div class="left">
          <p>性价比大赏</p>
          <p>尖货亲民价</p>
        </div>
        <img
          class="right"
          src="https://yanxuan-item.nosdn.127.net/4dd4a4573d63cae893adf45544d1f655.png?imageView&thumbnail=160x160&quality=75"
          alt
        />
      </div>
      <div class="bg">
        <div class="left">
          <p>秋冬好物</p>
          <p>本季必买TOP10</p>
        </div>
        <img
          class="right"
          src="https://yanxuan-item.nosdn.127.net/a18ea2c6027896fcd50ab3a60982cf62.png?imageView&thumbnail=160x160&quality=75"
          alt
        />
      </div>
    </div>
    <img
      class="Exclusive"
      src="https://yanxuan.nosdn.127.net/03cb5439882496a245e5802c62330a85.gif"
      alt
    />
    <div class="imgs">
      <ul>
        <li v-for="(item) in imgsData" :key="item.id">
          <p v-text="item.textyi"></p>
          <p v-text="item.texter"></p>
          <img :src="item.imgyi" alt />
          <img :src="item.imger" alt />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
let imgsData = [
  {
    id: 1,
    textyi: "断货补单王",
    texter: "紧急补仓疯抢中",
    imgyi:
      "https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75",
    imger:
      "https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?imageView&thumbnail=150x150&quality=75"
  },
  {
    id: 2,
    textyi: "加量不加价",
    texter: "人气单品低至5折",
    imgyi:
      "https://yanxuan-item.nosdn.127.net/758b098102d7b82ccabcfd95b25b02c3.png?imageView&thumbnail=150x150&quality=75",
    imger:
      "https://yanxuan-item.nosdn.127.net/0d415719917072eadde6364442568f14.png?imageView&thumbnail=150x150&quality=75"
  },
  {
    id: 3,
    textyi: "无限回购榜单",
    texter: "买了又买的超值好物",
    imgyi:
      "https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75",
    imger:
      "https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?imageView&thumbnail=150x150&quality=75"
  },
  {
    id: 4,
    textyi: "11.11选购指南",
    texter: "一键解决选择困难症",
    imgyi:
      "https://yanxuan-item.nosdn.127.net/5e2f6eff4922907b455a61b11f3552b6.png?imageView&thumbnail=150x150&quality=75",
    imger:
      "https://yanxuan-item.nosdn.127.net/5191271233a26fb5b30708cb27625816.png?imageView&thumbnail=150x150&quality=75"
  }
];
export default {
  data() {
    return {
      imgsData
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 4.2rem;
  .imgs {
    li:nth-child(1) {
      margin-left: 0.3rem;
    }
    li:nth-child(3) {
      margin-left: 0.3rem;
    }
    li {
      margin: 0.1rem;
      float: left;
      height: 3rem;
      width: 45%;
      background: #eee;
      p {
        color: #7f7f7f;
        margin: 0.2rem;
      }
      p:nth-child(1) {
        padding-top: 0.3rem;
        font-size: 0.35rem;
        color: #333;
      }

      img {
        float: left;
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        background-size: cover;
      }
    }
  }
  .Exclusive {
    width: 100%;
    height: 1.5rem;
  }
  .Box {
    position: relative;
    width: 100%;
    height: 3rem;
    background: url("https://yanxuan.nosdn.127.net/fc8295e7aeeae94abe23c5710221231c.gif?imageView&quality=75")
      no-repeat center center;
    background-size: contain;
    .big {
      display: block;
      width: 2rem;
      height: 100%;
      background-size: cover;
      position: absolute;
      top: -0.4rem;
      left: 0.6rem;
    }
    .article {
      margin-top: 2.8rem;
      width: 100%;
    }
    .bg {
      float: left;
      margin: 0.05rem;
      width: 48%;
      height: 3rem;
      background: url("https://yanxuan.nosdn.127.net/e09682e055ffac88d9cf221457bdf76a.png?imageView&thumbnail=375x0&quality=75")
        no-repeat center center;
      position: relative;
      background-size: 100% 100%;
      .left {
        position: absolute;
        top: 1.2rem;
        left: 0.3rem;
        p:nth-child(1) {
          font-size: 0.3rem;
        }
      }
      .right {
        position: absolute;
        width: 2rem;
        height: 2rem;
        top: 0.5rem;
        left: 1.5rem;
      }
    }
  }
}
</style>