<template>
  <div>
    <header>
      <div>
        <h1>
          <img src="../../assets/网易严选img/首页/logo.png" alt />
          网易严选
        </h1>
        <button>
          <i class="iconfont icon-magnifier"></i>
          <span>&nbsp;搜索商品, 共24039款好物</span>
        </button>
        <span class="submit">登录</span>
      </div>
      <nav>
        <ul>
          <li
            v-for="(item) in navData"
            :key="item.id"
            :class="{active:active===item.id}"
            @click="active=item.id"
          >
            {{item.content}}
            <span :class="{active:active===item.id}"></span>
          </li>
        </ul>
      </nav>
    </header>
    <banner></banner>
    <classification></classification>
    <bigimg></bigimg>
    <privateorder></privateorder>
    <limitedtime></limitedtime>
    <newproductlaunch></newproductlaunch>
  </div>
</template>
<script>
import banner from "./banner1";
import classification from "./classification2";
import bigimg from './bigimg3';
import privateorder from './privateorder4';
import limitedtime from './limitedtime5';
import newproductlaunch from './newproductlaunch6';
let navData = [
  {
    id: 0,
    content: "推荐"
  },
  {
    id: 1,
    content: "居家生活"
  },
  {
    id: 2,
    content: "服饰鞋包"
  },
  {
    id: 3,
    content: "美食酒水"
  }
];
export default {
  data() {
    return {
      active: 0,
      navData
    };
  },
  components: {
    banner,
    classification,
    bigimg,
    privateorder,
    limitedtime,
    newproductlaunch
  }
};
</script>
<style lang="less" scoped>
header {
  background: #fff;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 0.3rem;
  width: 100%;
  h1 {
    margin: 0.2rem;
    display: inline-block;
    font-size: 0;
    color: transparent;
    img {
      width: 1.5rem;
      height: 0.45rem;
      background-size: cover;
    }
  }
  button {
    background: #ededed;
    i {
      font-size: 0.38rem;
    }
    color: #666;
    text-align: center;
    width: 4.5rem;
    height: 0.6rem;
    line-height: 0.6rem;
    border: none;
    border-radius: 0.05rem;
  }
  .submit {
    margin-left: 0.1rem;
    display: inline-block;
    width: 0.8rem;
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: 0.1rem;
    font-size: 0.25rem;
  }
}

nav {
  ul {
    li.active {
      color: #dd1a21;
    }
    li {
      margin: 0.2rem 0;
      text-align: center;
      float: left;
      width: 25%;
      color: #333;
      font-size: 0.35rem;
      span.active {
        margin-top: 0.1rem;
        margin-left: 0.28rem;
        display: block;
        width: 70%;
        text-align: center;
        height: 0.05rem;
        background: #dd1a21;
      }
    }
  }
}
</style>