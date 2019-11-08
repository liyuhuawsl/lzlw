        <template>
  <div class="container">
    <swiper>
      <swiper-slide v-for="(item) in bannerData" :key="item.id" class="swiper-container">
        <img :src="item.src" alt />
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <ul>
      <li>
        <i class="iconfont icon-youyouyanxuan"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="iconfont icon-beishubaozheng"></i>
        <span>三十天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icon-jiaoyi"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
  </div>
</template>
        <script>
let bannerData = [
  {
    id: 1,
    src:
      "https://yanxuan.nosdn.127.net/6962cab6a909ac395f4af647be0a41a2.jpg?imageView&quality=75&thumbnail=750x0"
  },
  {
    id: 2,
    src:
      "https://yanxuan.nosdn.127.net/9d3c05ef9249ab4b13ce900587136b28.jpg?imageView&quality=75&thumbnail=750x0"
  },
  {
    id: 3,
    src:
      "https://yanxuan.nosdn.127.net/a2e0f844d3b10277d18ac81544f0086c.jpg?imageView&quality=75&thumbnail=750x0"
  },
  {
    id: 4,
    src:
      "https://yanxuan.nosdn.127.net/a89846a8b31a807c230026e042516814.png?imageView&quality=75&thumbnail=750x0"
  },
  {
    id: 5,
    src:
      "https://yanxuan.nosdn.127.net/4f25322b7a3d1de9bcd8abfae3c85e85.jpg?imageView&quality=75&thumbnail=750x0"
  },
  {
    id: 6,
    src:
      "https://yanxuan.nosdn.127.net/aa860e44fbd468a7804c1a84796c4827.jpg?imageView&quality=75&thumbnail=750x0"
  },
  {
    id: 7,
    src:
      "https://yanxuan.nosdn.127.net/b7a92310d930cb3bd76bbfd312ef6a70.jpg?imageView&quality=75&thumbnail=750x0"
  },
  {
    id: 8,
    src:
      "https://yanxuan.nosdn.127.net/28664331571785592305895daed76aa8.jpg?imageView&quality=75&thumbnail=750x0"
  }
];

export default {
  data() {
    return {
      bannerData
    };
  },
  methods: {
    
  }
};
</script>
        <style lang="less" scoped>
.container {
  margin-top: 1.8rem;
}
.swiper-slide {
  img {
    display: block;
    width: 100%;
    height: 4rem;
    background-size: cover;
  }
}
ul {
  margin: 0.2rem 0;
  li {
    color: #333;
    float: left;
    width: 33.33%;
    text-align: center;
    i {
      color: #dd1a21;
      font-size: 0.3rem;
      margin: 0 0.1rem;
    }
  }
}
</style>
