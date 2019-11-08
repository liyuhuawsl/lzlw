<template>
    <div>
        <div class='w_container'>
            <div class='w-header'>
                <a href="#"><i class='iconfont icon-shouye'></i></a>
                <div class='header_c'>
                    <router-link to='/identifying' class='header_cc active'>发现</router-link>
                    <router-link to='/identifying' class='header_cc'>甄选家</router-link>
                </div>
                <div class='header_r'>
                    <a href="#" class="sousuo"><i class='iconfont icon-sousuo'></i></a>
                    <a href="#"><i class='iconfont icon-gouwuche2'></i></a>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.w_container{
    height: 100%;
    width: 100%;  
    margin-bottom: 1.25rem;
    // position: relative;
    .w-header{  
        width: 100%;  
        background: #fafafa;
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        height: 1rem;
        line-height: 1rem;
        padding: 0  .3rem;
        box-sizing: border-box;
        border-bottom: 1px solid #7F7F7F;
        a{
            color: #7F7F7F;
            .icon-shouye{
                font-size:.6rem;
            }
        }
        .header_c{
            color: #7F7F7F;
            position: absolute;
            width: 3.2rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            left: 50%;
            top: 0;
            margin-left: -1.6rem;
            font-size: .28rem;
            z-index: 1;
            display: inline-block;
            .header_cc{
                padding: 0 .16rem;
                font-size: .28rem;
            }
            .header_cc.active{
                font-size: .4rem;
                color: #b4282d;
                font-weight: bold;
            }
        }
        .header_r{
            display: inline-block;
            float: right;
            a{
                color: #7F7F7F;
                i{
                    font-size: .6rem;
                }
            }
            a.sousuo{
                padding-right: .16rem;
            }
        }
    }  
}
</style>