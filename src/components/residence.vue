<template>
    <div>
        <com-header :headerbj="require('@/assets/img/zhuzhai.jpg')">
            <template slot="slot1">
                <div class="header_text">
                        <!-- <img src="@/assets/img/dazao.png" alt="" class="fadeInDown animated">    
                        <img src="@/assets/img/kongjian.png" alt="" class="zoomIn animated">     -->
                        <ul>
                            <li v-on:click="headerLiClick(index)" v-for="(itemq,index) in headerList" :key="itemq">{{ itemq }}</li>
                            <!-- <li>找整租</li>
                            <li>找小区</li>
                            <li>找商圈</li> -->
                        <div class="triangle"></div>
                        </ul>
                        <input type="text" placeholder="请输入区域 / 商圈或小区名开始找房">
                        <button>开始找房</button>
                        <img src="@/assets/img/dazao.png" alt="">
                    </div>
            </template>
            <template slot="slot2">
                <div class="header_footer">
                    <ul>
                        <li><img src="@/assets/img/header_icon.png" alt=""><b>地图找房</b></li>
                        <li><img src="@/assets/img/header_icon.png" alt=""><b>VR实景看房</b></li>
                        <li><img src="@/assets/img/header_icon.png" alt=""><b>公寓增值服务</b></li>
                    </ul>
                </div>
            </template>
        </com-header>
        <main>
            <img src="@/assets/img/sjzhuzhai_02.jpg" alt="">
            <div class="content">
                <img src="@/assets/img/wnex.png" alt="">
            </div>
        </main>
    </div>
</template>
<style scoped src="@/assets/css/residence.scss" lang="scss" type="text/css"></style>

<script>
import comHeader from "./pulice/header.vue";
export default {
    components:{
        'com-header':comHeader
    },
    data() {
        return {
            headerList:[
                '找合租','找整租','找小区','找商圈'
            ]
        }
    },
    methods:{
        headerLiClick:function(index){
            let triangle = document.getElementsByClassName('triangle')[0]
            triangle.style.left = (index*87)+55+'px'
            
        }
    }
}
</script>
