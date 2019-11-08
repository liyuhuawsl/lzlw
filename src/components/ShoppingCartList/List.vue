<template>
    <main>

        <!-- 版头 -->
        <header>
            <span>
                购物车
            </span>
            <a href="">领券</a>
        </header>

        <!-- 30天无忧退货 -->
        <div>
            <ul>
                <li class="item">
                    <i class="u-icon u-icon-servicePolicy"></i>
                    <span>30天无忧退货</span>
                </li>
                <li class="item">
                    <i class="u-icon u-icon-servicePolicy"></i>
                    <span>48小时快速退款</span>
                </li>
                <li class="item">
                    <i class="u-icon u-icon-servicePolicy"></i>
                    <span>满88元免邮费</span>
                </li>
            </ul>
        </div>

        <div class="img"></div>
        <div class="txt">去添加点什么吧 </div>
        <div class="button">登录</div>

    </main>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
main {
    width: 100%;
    margin: 0 auto;
}

header {
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
    background: #fff;
}

main>header>span {
    position: relative;
    padding-left: .3rem;
    text-align: center;
    background-color: #fff;
    font-size: .35rem;
    color: #333;
}

main>header a {
    position: absolute;
    right: .6rem;
    height: 1.17333rem;
    font-size: .3rem;
    color: #DD1A21;
}

main>div ul {
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    background: #eee;
    flex-flow: row nowrap;
    align-items: center;
}

div ul li {
    float: left;
    width: 33%;
    font-size: .25rem;
    color: #666;
}

.img {
    position: absolute;
    top: 5.5rem;
    left: 2.5rem;
    background: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png) no-repeat center;
    background-size: cover;
    width: 2.48rem;
    height: 2.48rem;
}

.txt {
    position: absolute;
    top: 8rem;
    left: 2.7rem;
    font-size: .3rem;
    color: #999999;
}

.button {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 7rem;
    height: 0.92rem;
    width: 5rem;
    font-size: .3rem;
    background: #DD1A21;
    text-align: center;
    line-height: 0.92rem;
    color: #FFFFFF;
}
</style>