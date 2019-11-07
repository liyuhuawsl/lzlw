<template>
<div class="container">
    <p>私人订制</p>
    <ul>
        <li v-for="(item) in slideData" :key="item.id">
            <img :src="item.src" alt="">
            <p v-text="item.pyi"></p>
            <p v-text="item.per"></p>
        </li>
    </ul>
</div>
</template>
<script>
let slideData = [
    {
        id: 1,
        src: 'https://yanxuan-item.nosdn.127.net/b727b68c950e91874831dd7ada1cac18.png?imageView&quality=65&thumbnail=330x330',
        pyi: '防螨防漏床垫保护垫',
        per: '￥79',
    }, {
        id: 2,
        src: 'https://yanxuan-item.nosdn.127.net/8f4265e206020ecfbbe34c2a2d230fb2.png?imageView&quality=65&thumbnail=330x330',
        pyi: '日式全棉格纹四件套',
        per: '￥299'
    }, {
        id: 3,
        src: 'https://yanxuan-item.nosdn.127.net/2181df75cc63d89f8ab098faed332641.png?imageView&quality=65&thumbnail=330x330',
        pyi: '阿胶糕私享装',
        per: '￥118'
    }
]
export default {
    data() {
        return {
            slideData
        }
    }
};
</script>
<style lang="less" scoped>
.container {
    &>p {
        font-size: .3rem;
        width: 3rem;
        margin: 7rem 0 .3rem .18rem;
    }
    ul {
        li {
            float: left;
            margin: 0 .12rem;
            width: 30%;
            text-align: center;
            img {
            background: #eee;
                width: 100%;
                height: 2rem;
                background-size: cover;
            }
            p:nth-of-type(2) {
                color: #dd1a21;
            }
            p {
                color: #333;
                font-size: .25rem;
                width: 100%;
                height: 0.2rem;
                margin: .1rem auto;
            }
            
        }
    }
}
</style>