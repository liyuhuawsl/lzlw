<template>
  <div id="app">
    <router-view></router-view>
    <footer class="footer">
      <ul>
        <li v-for="(item) in navData" :key="item.id">
          <router-link :to="item.route" active-class="active">
            <i :class="item.cls"></i>
            <p v-text="item.content"></p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
/* 循环数据 */
let navData = [
  {
    id: 0,
    route: "/home",
    cls: "iconfont icon-shouye",
    content: "首页"
  },
  {
    id: 1,
    route: "/classify",
    cls: "iconfont icon-fenleixuanzhong",
    content: "分类"
  },
  {
    id: 2,
    route: "/identifying",
    cls: "iconfont icon-fangjin",
    content: "识物"
  },
  {
    id: 3,
    route: "/shoppingcart",
    cls: "iconfont icon-gouwuche2",
    content: "购物车"
  },
  {
    id: 4,
    route: "/personal",
    cls: "iconfont iconfont icon-geren",
    content: "个人"
  }
];
export default {
  data() {
    return {
      activeIndex: 0,
      navData
    };
  },
  methods: {
    switchClass(id) {
      this.active = id;
      return;
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.25rem;
  ul {
    padding-top: 0.25rem;
    height: 100%;
    background: #fff;
    font-size: 0.28rem;
    li {
      a {
        color: #666;
      }
      a.active {
        color: #dd1a21;
      }
      i {
        font-size: 0.45rem;
      }
      text-align: center;
      float: left;
      width: 20%;
    }
  }
}
</style>
