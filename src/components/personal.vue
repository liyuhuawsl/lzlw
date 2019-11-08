<template>
<div class="container">
    <header>
    <div class="userleft">
        <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt />
        <div class="text">
        <p>18870079052</p>
        <p>普通用户</p>
        </div>
    </div>
    <div class="QRcode">
        <img src="https://yanxuan.nosdn.127.net/2bbe2405bcc99ab49278fc3f1138a578.png" alt="">
        <img src="../../assets/网易严选img/qrcode.png" alt="">
    </div>
    </header>
    <p class="assets">我的资产</p>
    <ul class="onassets">
        <li v-for="(item) in assetsData" :key="item.id">
            <p v-text="item.money"></p>
            <p v-text="item.text"></p>
        </li>
    </ul>
    <ul class="multipleclasses">
        <li v-for="(item) in multipleclassesData" :key="item.id">
            <i :class="item.cls"></i>
            <p v-text="item.text"></p>
        </li>
    </ul>
    <button class="signout">
        退出登录
    </button>
</div>
</template>
<script>
let multipleclassesData = [
    {
        id: 1,
        cls: 'iconfont icon-6',
        text: '我的订单'
    }, {
        id: 2,
        cls: 'iconfont icon-wodeyizhou',
        text: '周日一起拼'
    }, {
        id: 3,
        cls: 'iconfont icon-shouhou',
        text: '售后服务'
    }, {
        id: 4,
        cls: 'iconfont icon-yaoqingfanli',
        text: '邀请返利'
    }, {
        id: 5,
        cls: 'iconfont icon-huiyuanqia',
        text: '回馈金卡'
    }, {
        id: 6,
        cls: 'iconfont icon-gouwu',
        text: '优先购'
    }, {
        id: 7,
        cls: 'iconfont icon-jifen',
        text: '积分中心'
    }, {
        id: 8,
        cls: 'iconfont icon-weibiaoti--',
        text: '会员俱乐部'
    }, {
        id: 9,
        cls: 'iconfont icon-dizhi',
        text: '地址管理'
    }, {
        id: 10,
        cls: 'iconfont icon-beishubaozheng',
        text: '账号安全'
    }, {
        id: 11,
        cls: 'iconfont icon-kefu',
        text: '帮助与客服'
    }, {
        id: 12,
        cls: 'iconfont icon-fankui',
        text: '意见反馈'
    }
]
let assetsData = [
    {
        id: 1,
        money: '￥0',
        text: '回馈金'
    },{
        id: 2,
        money: '0',
        text: '红包'
    },{
        id: 3,
        money: '￥0',
        text: '优惠劵'
    },{
        id: 4,
        money: '￥0',
        text: '津贴'
    },{
        id: 5,
        money: '0',
        text: '礼品卡'
    }
]
export default {
    data() {
        return {
            assetsData,
            multipleclassesData
        }
    }
};
</script>
<style lang="less" scoped>
header {
    
width: 100%;
height: 3rem;
background: url("http://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png")
    no-repeat center center;
.userleft {
    .text {
    float: left;
    margin-left: .3rem;
    margin-top: -.22rem;
    p:nth-child(1) {
        font-size: 0.35rem;
        font-weight: 600;
    }
    p {
        font-size: .28rem;
        font-weight: 200;
        width: 2.5rem;
        height: 0.5rem;
        margin: 0;
        color: #fff;
    }
    }
    width: 75%;
    line-height: 2.5rem;
    img {
        margin-left: .5rem;
        margin-top: .6rem;
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-size: 100% 100%;
    line-height: 1.5rem;
    }
}
.QRcode {
    width: 25%;
    float: right;
    height: 100%;
    img:nth-child(2) {
        margin-left: .3rem;
    }
    img {
        margin-top: 1.2rem;
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        background-size: 100% 100%;
    }
}
}
.assets {
        font-size: .3rem;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-indent: .5rem;
        border-bottom: .01rem solid #eee;
    }
    .onassets {
        li {
            margin-top: .3rem;
            font-size: .26rem;
            text-align: center;
            width: 20%;
            float: left;
            p:nth-child(1) {
                font-weight: 600;
            }
            p {
                margin-top: .1rem;
            }
        }
    }
    .multipleclasses {
        width: 100%;
        margin-top: 1.8rem;
        li {
            padding-top: .4rem;
            border: 1px solid #eee;
            float: left;
            width: 33%;
            box-sizing: border-box;
            text-align: center;
            height: 1.8rem;
            i {
                font-size: .6rem;
            }
            p {
                font-size: .25rem;
            }
        }
    }
    .signout {
        margin-top: .5rem;
        width: 100%;
        background: #eee;
        height: 1rem;
        font-size: .3rem;
        font-weight: 500;
        border: none;
        margin-bottom: 1.5rem;
    }
</style>