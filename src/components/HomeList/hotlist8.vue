        <template>
  <div class="container">
    <p>类目热销榜</p>
    <div class="Box">
      <div class="left gd">
        <span>热销榜</span>
        <img
          src="https://yanxuan-item.nosdn.127.net/17c3596d257753108d1d471b8ea4d385.png?imageView&quality=65&thumbnail=200x200"
          alt
        />
      </div>
      <div class="right gd">
        <span>好评榜</span>
        <img
          class="titleimg" src="https://yanxuan-item.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200"
          alt
        />
      </div>
    </div>
    <ul class="list">
      <li v-for="(item) in imgsData" :key="item.id">
        <p v-text="item.content"></p>
        <img :src="item.src" alt="">
      </li>
    </ul>
    <img class="titleimg" src="https://yanxuan.nosdn.127.net/56ba53679b99c816de0ea6d36c995eb0.jpg?imageView&thumbnail=750x0&quality=75" alt="">
  </div>
</template>
<script>
let imgsData = [
  {
    id: 1,
    src:
      "https://yanxuan-item.nosdn.127.net/f961b628a67e5a95150b962a48963b6d.png?imageView&quality=65&thumbnail=200x200",
    content: "美食酒水榜"
  },
  {
    id: 2,
    src:
      "https://yanxuan-item.nosdn.127.net/0255079a57dece1ecaf713d245d9cde8.png?imageView&quality=65&thumbnail=200x200",
    content: "居家生活榜"
  },
  {
    id: 3,
    src:
      "https://yanxuan-item.nosdn.127.net/42609c92b57949b2ea5dea83a2495999.png?imageView&quality=65&thumbnail=200x200",
    content: "服饰鞋包榜"
  },
  {
    id: 4,
    src:
      "https://yanxuan-item.nosdn.127.net/6cdb3da46a4b95b36dea89d6d47d3bd9.png?imageView&quality=65&thumbnail=200x200",
    content: "数码家电榜"
  },
  {
    id: 5,
    src:
      "https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&quality=65&thumbnail=200x200",
    content: "个护清洁榜"
  },
  {
    id: 6,
    src:
      "https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&quality=65&thumbnail=200x200",
    content: "母婴亲子榜"
  },
  {
    id: 7,
    src:
      'https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200',
    content: "全球特色榜"
  },
  {
    id: 8,
    src:
      "https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200",
    content: "运动旅行榜"
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
  .titleimg {
    width: 100%;
    height: 4rem;
    background-size: 100% 100%;
  }
  .list {
    width: 100%;
    height: 3rem;
    li {
      box-sizing: border-box;
      p {
        padding-top: .2rem;
      }
      width: 22%;
      font-size: .25rem;
      text-align: center;
      margin: .1rem;
      float: left;
      background: #f5f5f5;
      img {
      width: 1.5rem;
      height: 1.5rem;
    }
    }
  }
  & > p {
    font-size: 0.3rem;
    width: 3rem;
    margin: 4rem 0 0.3rem 0.18rem;
  }
  .Box {
    .gd {
      width: 46%;
      float: left;
      height: 2rem;
      margin-left: 0.18rem;
      span {
        float: left;
        font-size: 0.3rem;
        line-height: 2rem;
        margin-left: 0.3rem;
      }

      img {
        float: right;
        width: 2rem;
        height: 2rem;
      }
    }
    .left {
      background: #f9f3e4;
    }
    .right {
      background: #ebeff6;
    }
  }
}
</style>