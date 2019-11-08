<template>
  <div class="container">
    <div class="search">
      <button class="iconfont icon-magnifier">
        <span>预售乳胶床垫&nbsp;低至275折</span>
      </button>
      <router-link to="/home" class="cancel">取消</router-link>
    </div>
    <p>热门搜索</p>
    <ul>
      <li class="active">回馈金卡充11得33</li>
      <li>保暖内衣&nbsp;限时99元</li>
      <li>降噪耳机&nbsp;直降100元</li>
      <li>9.9元超值专区</li>
      <li>蓝牙耳机</li>
      <li class="active">预售&nbsp;低过11.11</li>
      <li>行李箱</li>
      <li class="active">羽绒服</li>
      <li>爆款物品</li>
      <li>床垫</li>
      <li>保温杯</li>
      <li class="active">保暖内衣</li>
      <li>女装</li>
      <li>纸巾</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
html,
body {
  width: 100%;
  height: 100%;
  background: #eee;
}
.search {
  button {
    width: 80%;
    height: 0.5rem;
    background: #f4f4f4;
    border: none;
    margin: 0.15rem 0 0 0.2rem;
    border-radius: 0.1rem;
    span {
      padding-left: 0.1rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }
  & > .cancel {
    display: inline-block;
    width: 15%;
    color: #333;
    text-align: center;
    font-size: 0.25rem;
  }
}
p {
  color: #999;
  margin: 0.45rem 0 0 0.3rem;
  font-size: 0.25rem;
}
li {
  float: left;
  border-radius: 0.1rem;
  font-size: 0.2rem;
  margin: 0.3rem 0 0 .3rem;
  width: auto;
  padding: 0.1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border: 1px solid #999;
}
li.active {
  border: 0.01rem solid #dd1a21;
}
</style>