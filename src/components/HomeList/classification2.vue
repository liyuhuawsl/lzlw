<template>
  <div class="container">
    <ul>
      <li v-for="(item) in liData" :key="item.id">
        <img :src="item.src" alt />
        <p v-text="item.content"></p>
      </li>
    </ul>
  </div>
</template>
<script>
let liData = [
  {
    id: 1,
    src: "https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
    content: "新品首发"
  },
  {
    id: 2,
    src: "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
    content: "居家生活"
  },
  {
    id: 3,
    src: "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
    content: "服饰鞋包"
  },
  {
    id: 4,
    src: "https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
    content: "美食酒水"
  },
  {
    id: 5,
    src: "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
    content: "个护清洁"
  },
  {
    id: 6,
    src: "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
    content: "母婴亲子"
  },
  {
    id: 7,
    src: "https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
    content: "运动旅行"
  },
  {
    id: 8,
    src: "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
    content: "数码家电"
  },
  {
    id: 9,
    src: "https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
    content: "全球特色"
  },
  {
    id: 10,
    src: "https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
    content: "好货秒底"
  }
];
export default {
  data() {
    return {
      liData
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  li {
    float: left;
    width: 20%;
    text-align: center;
    img {
      margin: 0.1rem;
      display: block;
      height: 1.2rem;
      background-size: cover;
    }
  }
}
</style>