<template>
<div class="container">
    <p>限时抢购&nbsp;<span>00</span>:<span>00</span>:<span>00</span></p>
    <ul>
        <li v-for="(item) in slideData" :key="item.id" :class="{active:item.id>3}">
            <img :src="item.src" alt="">
            <p v-text="item.per"></p>
        </li>
    </ul>
</div>
</template>
<script>
let slideData = [
    {
        id: 1,
        src: 'https://yanxuan-item.nosdn.127.net/6dc0bedcdca2e6158feadcdd25fdf6a0.png?imageView&thumbnail=216x216&quality=75',
        per: '￥119',
    }, {
        id: 2,
        src: 'https://yanxuan-item.nosdn.127.net/26ab361711995e0ca478ccf1995b17f9.png?imageView&thumbnail=216x216&quality=75',
        per: '￥273'
    }, {
        id: 3,
        src: 'https://yanxuan-item.nosdn.127.net/d77d0a70cfa7efdf313b3a03dbfb699b.png?imageView&thumbnail=216x216&quality=75',
        per: '￥138'
    },
    {
        id: 4,
        src: 'https://yanxuan-item.nosdn.127.net/057ad84194d985e95707e99867eed24f.png?imageView&thumbnail=216x216&quality=75',
        per: '￥582',
    }, {
        id: 5,
        src: 'https://yanxuan-item.nosdn.127.net/42609c92b57949b2ea5dea83a2495999.png?imageView&thumbnail=216x216&quality=75',
        per: '￥179'
    }, {
        id: 6,
        src: 'https://yanxuan-item.nosdn.127.net/3eca7b34cd80ce4128c98233e3809ece.png?imageView&thumbnail=216x216&quality=75',
        per: '￥49.9'
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
        width: 4rem;
        margin: 3.5rem 0 .3rem .18rem;
        span {
            display: inline-block;
            font-size: .2rem;
            margin: .1rem;
            color: #fff;
            width: .4rem;
            height:.4rem;
            text-align: center;
            line-height: .4rem;
            background: #333;
            border-radius: .05rem;
        }
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
            p {
                color: #dd1a21;
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