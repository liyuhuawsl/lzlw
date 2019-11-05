<template>
  <div id="app">
    <router-view></router-view>
    <footer class="footer">
      <ul>
        <li class="active">
          <i class="iconfont icon-shouye active"></i>
          <p>首页</p>
        </li>
        <li>
          <i class="iconfont icon-fenleixuanzhong"></i>
          <p>分类</p>
        </li>
        <li>
          <i class="iconfont icon-fangjin"></i>
          <p>识物</p>
        </li>
        <li>
          <i class="iconfont icon-gouwuche2"></i>
          <p>购物车</p>
        </li>
        <li>
          <i class="iconfont icon-geren"></i>
          <p>个人</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style lang="less">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.25rem;
  ul {
    padding-top: .25rem;
    height: 100%;
    background: pink;
    font-size: .28rem;
    li {
      color: #666;
      i {
        font-size: .45rem;
      }
      text-align: center;
      float: left;
      width: 20%;
    }
    li.active {
      color: #dd1a21;
    }
  }
}
</style>
