<template>
<div class="container">
    <p>新品发布</p>
    <ul>
        <li v-for="(item) in slideData" :key="item.id" :class="{active:item.id>3}">
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
        src: 'https://yanxuan-item.nosdn.127.net/db75025a87478795b2a1bad702f78e31.png?imageView&quality=65&thumbnail=330x330',
        pyi: '福建平和蜜柚',
        per: '￥33',
    }, {
        id: 2,
        src: 'https://yanxuan-item.nosdn.127.net/f8b80d9cfb95573de5ffe3ad8ac3e9fe.png?imageView&quality=65&thumbnail=330x330',
        pyi: '男式潮流老爹鞋',
        per: '￥280'
    }, {
        id: 3,
        src: 'https://yanxuan-item.nosdn.127.net/e49e636cb6049b12822bee7e96c0adad.png?imageView&quality=65&thumbnail=330x330',
        pyi: '给脚放个假吧',
        per: '￥39.9'
    },
    {
        id: 4,
        src: 'https://yanxuan-item.nosdn.127.net/5e6f4b5523be752e53dbec8c81feeb1d.png?imageView&quality=65&thumbnail=330x330',
        pyi: '天鹅绒柔暖床笠',
        per: '￥109',
    }, {
        id: 5,
        src: 'https://yanxuan-item.nosdn.127.net/0d7f0028d1cb07ef67f2a865cbe9dbe6.png?imageView&quality=65&thumbnail=330x330',
        pyi: '羊毛内里乐福鞋',
        per: '￥299'
    }, {
        id: 6,
        src: 'https://yanxuan-item.nosdn.127.net/54e9c325ef69dfead72bdb6859feb2f3.png?imageView&quality=65&thumbnail=330x330',
        pyi: '女式地表强温羽绒服',
        per: '￥803'
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
        margin: 6rem 0 .3rem .18rem;
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
        li.active {
            margin-top: .2rem;
        }
    }
}
</style>