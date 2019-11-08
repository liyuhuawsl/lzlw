<template>
  <div class="wrapper">
    <p>人气推荐</p>
    <div class="Box">
      <img
        src="https://yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=280x280"
        alt
      />
      <div class="content">
        <p>品类限时购</p>
        <p>纯牛奶 250毫升*24</p>
        <p>原奶指标远优于欧盟标准</p>
        <p>￥79.8</p>
      </div>
    </div>
    <ul>
      <li v-for="(item) in slideData" :key="item.id">
        <img :src="item.src" alt />
        <p v-text="item.pyi"></p>
        <p v-text="item.per"></p>
        <p v-text="item.psan" class="bk"></p>
      </li>
    </ul>
  </div>
</template>
<script>
let slideData = [
  {
    id: 1,
    src:
      "https://yanxuan-item.nosdn.127.net/17c3596d257753108d1d471b8ea4d385.png?imageView&quality=65&thumbnail=330x330",
    pyi: "+5°C的保暖",
    per: "￥79",
    psan: '新人特价包邮'
  },
  {
    id: 2,
    src:
      "https://yanxuan-item.nosdn.127.net/f28c5db21c4d8aef33176e628ea3c4e2.png?imageView&quality=65&thumbnail=330x330",
    pyi: "臻密绒磨毛四件套",
    per: "￥399",
    psan: '好货内部价'
  },
  {
    id: 3,
    src:
      "https://yanxuan-item.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png?imageView&quality=65&thumbnail=330x330",
    pyi: "多喝热水",
    per: "￥75",
    psan: '品类限时购'
  }
];
export default {
  data() {
    return {
      slideData
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  li {
    float: left;
    margin: .2rem .12rem;
    width: 30%;
    text-align: center;
    img {
      background: #eee;
      width: 100%;
      height: 2rem;
      background-size: cover;
    }
    p:nth-of-type(2) {
      color: #dd1a21;
    }
    p {
      color: #333;
      font-size: 0.25rem;
      width: 100%;
      height: 0.2rem;
      margin: 0.1rem auto;
    }
    .bk {
        border: .01rem solid #dd1a21;
        line-height: .3rem;
        height: 0.3rem;
        width: 1.5rem;
        border-radius: .1rem;
        font-size: .2rem;
        color: #dd1a21;
    }
  }
  li.active {
    margin-top: 0.2rem;
  }
  & > p {
    font-size: 0.3rem;
    width: 3rem;
    margin: 6.5rem 0 0.3rem 0.18rem;
  }
  .Box {
    width: 96.5%;
    height: 4rem;
    margin: 0 auto;
    background: #fef0df;
    img {
      float: left;
      width: 3rem;
      height: 3rem;
    }
    .content {
      float: left;
      margin-top: 0.6rem;
      width: 3.2rem;
      height: 3rem;
      margin-left: 0.3rem;
      p:nth-of-type(1) {
        width: 1.5rem;
        text-align: center;
        border-radius: 0.05rem;
        height: 0.3rem;
        color: #dd1a21;
        border: 0.01rem solid #dd1a21;
      }
      p:nth-of-type(3) {
        font-size: 0.22rem;
        color: #7f7f7f;
      }
      p:nth-of-type(4) {
        color: #dd1a21;
      }
      p {
        margin: 0.2rem 0;
        width: 100%;
        height: 0.2rem;
        font-size: 0.25rem;
      }
    }
  }
}
</style>