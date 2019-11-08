<template>
  <div>
    <header>
      <div>
        <h1>
          <img src="../../assets/网易严选img/首页/logo.png" alt />
          网易严选
        </h1>
        <router-link to="/search" class="button" @click="searchJump">
          <i class="iconfont icon-magnifier"></i>
          <span>&nbsp;搜索商品, 共24039款好物</span>
        </router-link>
        <router-link to="/personal" class="submit">登录</router-link>
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
    <div class="backtothetop" @click="backUp">
      <p class="iconfont icon-icon12"></p>
    </div>
    <banner></banner>
    <classification></classification>
    <bigimg></bigimg>
    <privateorder></privateorder>
    <limitedtime></limitedtime>
    <newproductlaunch></newproductlaunch>
    <recommend></recommend>
    <hotlist></hotlist>
    <featured></featured>
    <pagefooter></pagefooter>
  </div>
</template>
<script>
import banner from "./banner1";
import classification from "./classification2";
import bigimg from "./bigimg3";
import privateorder from "./privateorder4";
import limitedtime from "./limitedtime5";
import newproductlaunch from "./newproductlaunch6";
import recommend from "./recommend7";
import hotlist from "./hotlist8";
import featured from "./featured9";
import pagefooter from "./pagefooter10";

/* API */
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
  methods: {
    backUp() {
      window.scroll(0, 0);
    },
    searchJump() {
      this.$router.push("/search");
    }
  
  },
  components: {
    banner,
    classification,
    bigimg,
    privateorder,
    limitedtime,
    newproductlaunch,
    recommend,
    hotlist,
    featured,
    pagefooter
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
  .button {
    background: #ededed;
    i {
      font-size: 0.38rem;
    }
    display: inline-block;
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
.backtothetop {
  z-index: 8888;
  position: fixed;
  bottom: 1.5rem;
  right: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  transition: all 1s linear 0s;
  background: #fff;
  border-radius: 50%;
  p {
    font-size: 0.6rem;
    text-align: center;
    line-height: 0.8rem;
    color: #333;
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