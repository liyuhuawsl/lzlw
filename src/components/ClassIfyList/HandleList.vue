<template>
  <div class="cate-Container">
    <div class="cateLeft">
      <ul class="cateLeft-list">
        <li>
          <a href>双11专区</a>
        </li>
        <li>
          <a href>暖冬好物</a>
        </li>
        <li>
          <a href>爆品专区</a>
        </li>
        <li>
          <a href>新品专区</a>
        </li>
        <li>
          <a href>居家生活</a>
        </li>
        <li>
          <a href>服饰鞋包</a>
        </li>
        <li>
          <a href>美食酒水</a>
        </li>
        <li>
          <a href>个护清洁</a>
        </li>
        <li>
          <a href>母婴亲子</a>
        </li>
        <li>
          <a href>运动旅行</a>
        </li>
        <li>
          <a href>数码家电</a>
        </li>
        <li>
          <a href>全球特色</a>
        </li>
      </ul>
    </div>
    <div class="cateRight">
      <list-right></list-right>
    </div>
  </div>
</template>
<script>
import ListRight from "./ListRight";
export default {
  components: {
    ListRight
  }
};
</script>
<style lang="less" scoped>
.cate-Container {
  width: 100%;
  margin-top: 1rem;
  .cateLeft {
    float: left;
    width: 20%;
    padding: 0.53rem 0;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto; //overflow-x 横屏滚动 overflow-y 竖屏滚动
    overflow-y: hidden; //overflow-x 横屏滚动 overflow-y 竖屏滚动
    white-space: nowrap;
    .cateLeft-list > li {
      width: 1.62rem;
      height: 0.67rem;
      margin-bottom: 0.4rem;
      text-align: center;
      font-size: 0.26rem;
      a {
        color: #333;
      }
    }
  }
  .cateRight {
    float: left;
    width: 80%;
    padding: 0.4rem 0.4rem 0.28rem;
    box-sizing: border-box;
    .banner {
      width: 100%;
      margin-bottom: 0.42rem;
      img {
        width: 100%;
      }
    }
    .cateRight-list .cateItem {
      float: left;
      width: 28%;
      margin-left: 0.25rem;
      text-align: center;

      a {
        color: #333;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>