<template>

    <div>
        <router-view></router-view>
        <main>
            <img src="@/assets/img/niao.png" alt="" class="niao" />
            <div class="content">
                <div class="xulie">
                    <img src="@/assets/img/fangzi.png" alt="">
                    <a href="/" class="jiantou">主页</a>
                    <a href="/" class="jiantou">社区</a>
                    <a href="/">公益事业</a>
                </div>
            
            <img src="@/assets/img/titimg.png" alt="" style="margin:0 auto;display:block;">
            <section class="character">
                <p>距今为止，我们的慈善机构已经有 <span>{{ cishan }}</span> 人参与爱心捐款。<br>捐款金额达到：<span style="color:#ed4f34;">{{ juankuanNum }}</span>元 人名币
                </p>
                <p>在中国，还有数以千万计需要救助的贫困儿童，每年也还有新的脆弱儿童因家庭变故而陷入困境，他们有的甚至吃不饱饭、无人照顾。盈富永泰希望<br>能与更多的爱心人士奉献微薄之力，携手贫困留守儿童，用爱帮助更多贫困儿童得到更好的成长环境,改变未来.</p>
            </section>
            </div>
            <div class="compnay">
                    <ul class="">
                        <li v-for="(item, index) in dataList" :key="index+'l'" class="tile">
                            <img :src="item.url" alt="">
                            <div class="lines"></div>
                            <div class="compnayname">
                                <p> {{ item.name }}</p>
                                <p> {{ item.content }}</p>
                            </div>
                        </li>   
                    </ul>
                <img src="@/assets/img/join.png" alt="" style="width:100%;" />
                </div>
                <img src="@/assets/img/banqiu.png" class="banqiu" alt="">
        </main>
    </div>
</template>
<style scoped src="@/assets/pulice/css/normalize.css"></style>
<style scoped src="@/assets/css/animate.css"></style>
<style scoped src="@/assets/pulice/css/pulice.css"></style>
<script>
// import "@/assets/pulice/css/normalize.css";
// import "@/assets/css/animate.css";
// import "@/assets/pulice/css/pulice.css";
// import "@/assets/css/benefit.css";
import "@/assets/js/jquery-2.1.1.min.js";
import "@/assets/js/benefit.js"
export default {
    data() {
        return {
            titleImg:'@/assets/img/titimg.png',
            cishan:'1680',
            juankuanNum:'8625.60',
            dataList:[
                { name:"我们的故事",content:"贫困山区的留守儿童们",url:require("@/assets/img/firstls.png") },
                { name:"我们的故事",content:"去山区捐物见见孩子们",url:require("@/assets/img/twols.png") },
                { name:"我们的故事",content:"贫困家庭",url:require("@/assets/img/threels.png") },
                { name:"山里的孩子",content:"给孩子们带去学习礼物",url:require("@/assets/img/fourls.png") },
                { name:"贫困留守儿童需要关爱",content:"给孩子希望 改变未来",url:require("@/assets/img/fivels.png") },
                {}
            ]
        }
    },
    computed:{
        
    },
    methods:{
        
    },
    created(){console.log(this.$route.path)}
}
</script>
<style lang="scss" scoped>
main{background:#f8f5f6;width:100%;position:relative;padding-bottom:60px;}
header{background:url('/static/img/gongyi_01.jpg')center no-repeat;}
.content{width: 1400px;margin:0 auto;padding-top:20px;position: relative;z-index: 2;
    .character{
        p{
            text-align:center;
        }
        p:nth-of-type(1){
            font-size:30px;
            font-weight:800;
            span{
                color:#ffc704;
                display:inline-block;
                margin:0 20px;
                font-size:44px;
                margin:10px;
            }
        }
        p:nth-of-type(2){
            line-height:2;
        }
    }
}
.niao{position: absolute;left:0;top:300px;}
.banqiu{position:absolute;right:0;bottom:0;}
.lines{
        position: absolute;
    width: 90%;
    height: 90%;
    margin: auto;
    top: 0;
    z-index: 2;
    left: 0;
    bottom: 0;
    right: 0;
    border: 3px solid #fff;
    transform: scale3d(0.9, 0.9, 1);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
}
.tile{
     
    transition: transform .1s;
    position: relative;
    &:hover{
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    }
}
.compnay{
    width: 1400px;
    margin:0 auto;
    .compnayname{
        width: 100%;
        height: 136px;
        position: absolute;
        bottom: 0;
        background: rgba(0,0,0,.5);
        text-align: left;
        padding-top:28px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        >p{
            color: #fff;
            font-size: 28px;
            text-indent: 2.2em;
        }
        >p:nth-of-type(2){
            font-size: 26px;
            font-weight: 100;
        }
    }
    // .compnayname:nth-last-child(1),.compnayname:nth-last-child(2){
    //     padding-top: 30px;
    // }
    ul{
        display:flex;
        flex-direction: row;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-wrap: wrap;
        padding:0;
        margin:0;
        li{
            position:relative;
            flex-grow:1;
margin-bottom:10px;
            img{
                width: 100%;   
                height:100%;
            }
            &:hover .lines{
                    opacity: 1;
            }
        }
        li:last-child{
            background:#ffc704;
            div{    
                display:none;
            }
        }
        li:nth-of-type(3){
            // flex-grow:3;
            width: 250px;
            // img{
            //     height:100%;
            // }
        }
        li:nth-of-type(2),li:nth-of-type(5){
            margin-left:12px;
            margin-right:12px;
        }
       li:nth-last-child(3) .compnayname,li:nth-last-child(2) .compnayname{
padding-top:18px;
       }
    }
    .compnayname{
        position:absolute;
        bottom:0;
    }
}
</style>