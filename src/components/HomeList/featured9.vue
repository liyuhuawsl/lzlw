<template>
<div class="container">
    <p class="zt">专题精选</p>
    <swiper>
    <swiper-slide v-for="(item) in bannerData" :key="item.id">
        <img :src="item.src" alt />
        <p v-text="item.content" class="sty"></p>
    </swiper-slide>
    </swiper>
    <img class="titleimg" src="https://yanxuan.nosdn.127.net/42afb1715e0fe05028a4c0ba643a85c6.jpg?imageView&thumbnail=750x0&quality=75" alt="">
</div>
</template>
<script>
    let bannerData = [
    {
        id: 1,
        src:
        "https://yanxuan.nosdn.127.net/6b9248b2680cdc5d6fd3fa60d1518775.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75",
        content: '9.9超值专区'
    },
    {
        id: 2,
        src:
        "https://yanxuan.nosdn.127.net/602ce4ac685a02279b6671753c342ba5.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75",
        content: '11月必买好物'

    },
    {
        id: 3,
        src:
        "https://yanxuan.nosdn.127.net/e95d3c2759822cee10bce4ad44df5c0f.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75",
        content: '保暖黑科技'
    }
    ];

export default {
data() {
    return {
    bannerData
    };
}
};
</script>
<style lang="less" scoped>
.zt {
        font-size: .3rem;
        width: 4rem;
        margin: .5rem 0 .3rem .18rem;
}
.swiper-slide {
img {
    margin: 0 auto;
    display: block;
    width: 90%;
    height: 3.5rem;
    background-size: cover;
    border-radius: .1rem;
}
.sty {
    border-radius: .1rem;
    margin: 0 auto;
    width: 90%;
    height: 1rem;
    line-height: 1rem;
    background: #f5f5f5;
    font-size: .3rem;
    text-align: center;
}
}
.titleimg {
    margin-top: .2rem;
    width: 100%;
    height: 4rem;
    background-size: 100% 100%;
  }

</style>