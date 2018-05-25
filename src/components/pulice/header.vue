<template>
    <div id="headerModule">
        <header :style="{background:'url('+headerbj+')'}">
            <div>
                <div class="nav_left">
                    <img src="@/assets/img/jticon.png" alt="">
                    <img src="@/assets/img/tiaowen.png" alt="" class="tab">
                </div>
                <!--<img src="@/assets/img/COOPERATIVEPARTNER.png" alt="" class="yw">-->
                <div class="nav_right">
                    <div class="nav_right_icon">
                        <img src="@/assets/img/sousuo.png" alt="">
                        <img src="@/assets/img/aixin.png" alt="">
                        <img src="@/assets/img/xiaoxi.png" alt="">
                        <img src="@/assets/img/fenxiang.png" alt="">
                    </div>
                    <div class="nav_right_yuan">
                        <div class="loading">
                            <div class="quan">
                            </div>
                            <div>
                                <div class="show_01 show"></div>
                                <div class="show_02 show"></div>
                                <div class="show_03 show"></div>
                                <div class="show_04 show"></div>
                            </div>
                        </div>
                        <p class="dingwei">公益计时</p>
                        <p class="daojishi dingwei">
                            <span id="daojishi">90</span>
                            <span class="miao">秒</span>
                        </p>
                    </div>
                    <p class="daoji_content">页面停留时间超过
                        <span class="miaoshu">90</span>秒， <br>我们将自行向公益机构捐赠
                        <span class="miaoshu">0.2</span>元</p>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name:"headerModule",
    props:{
        headerbj:{
            type:String,
            default:() => {
                // return require('@/assets/img/nav_01.jpg')
                return headerba
            }
        }
    },
    created(){
        let vm = this
        let pageName = this.$route.path;
        // this.pageName = "一站式商务企业服务"
        pageName = pageName.replace(/[\/]/g,'');
        // this.list.map((e,i)=>{
        //     console.log(e);
            
        //     vm.headerImg = (e.title == vm.pageName) ? e.url : vm.list[0].url;
        // })
        // console.log(pageName);
        // pageName == 'lease' ? headerbj = require('@/assets/img/hqdh.png') : headerbj = require('@/assets/img/nav_01.jpg');
    }
    // data(){
    //     return{
    //          headerImgStyle:{
    //             '环球':{
    //                 background:
    //             }
    //         }
    //     }
    // }
}
</script>
