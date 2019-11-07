<template>
  <div class="header">
    <button>
      <i class="iconfont icon-magnifier"></i>
      <span>&nbsp;搜索商品, 共24039款好物</span>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 1rem;
  border-bottom: 0.01rem solid #ccc;
  background: #fff;
  button {
    width: 90%;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 0.3rem 0.3rem;
    border: none;
    font-size: 0.3rem;
    color: #666;
    background-color: #ededed;
    border-radius: 0.08rem;
  }
}
</style>