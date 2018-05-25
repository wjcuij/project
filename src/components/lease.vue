<template>

    <div>
        <router-view></router-view>
        <com-header :headerbj="require('@/assets/img/hqdh.png')" ></com-header>
        <main>
            <div class="content">

                <p class="tit">盈富永泰提供最便捷最中心的办公地点，
                    <span>满足你全方位的需求</span><br> 写字楼办公租赁外，盈富永泰商务中心随时随地，灵活多变，提供全面智能服务
                </p>
                <ul class="content_ul">
                    <li v-for="(item,index) in list" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{ item.title }}</p>
                    </li>
                </ul>
            </div>
        </main>
        <div class="details">
            <ul>
                <!-- <li v-for="(item,index) in detailsList" :key="index+'l'">
                    <img src="" alt="">
                </li> -->
                <li>
                    <img src="@/assets/img/zjxc1.png" alt="" />
                    <div>

                        <p>天河珠江新城环球都会广场带装修多个间隔
                            <span>广州天河</span>
                        </p>
                        <div>
                            <span>带装修</span>
                            <span>东南朝向</span>
                            <span>花城汇</span>
                            <span>望江</span>
                            <span>望广州塔</span>
                        </div>
                        <div class="mianji">
                            <p>单元面积：
                                <span>380.0</span>平方米</p>
                            <p>实收：
                                <span>210-230</span>元</p>
                            <button>预约看盘</button>
                        </div>
                        <div class="weizhi">
                            
                            <span><b>楼层：</b>高层／63楼</span>
                            
                            <span><b>物业费：</b>物业管理35元/平米</span>
                            <span><b>附近地铁：</b>APM线 黄埔大道 (500米内)  猎德地铁 (500-1000米)</span>
                            <span><b>楼盘位置：</b>天河区 珠江新城中 花城大道68号</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped src="@/assets/pulice/css/normalize.css"></style>
<style scoped src="@/assets/css/animate.css"></style>
<style scoped src="@/assets/pulice/css/pulice.css"></style>
<style scoped src="@/assets/css/lease.scss" lang="scss" type="text/css"></style>
<script>
import comHeadder from "./pulice/header.vue";

export default {
    components:{
'com-header':comHeadder
    },
    // created(){
    //     let vm = this
    //     let pageName = this.$route.path;
    //     // this.pageName = "一站式商务企业服务"
    //     pageName = pageName.replace(/[\/]/g,'');
    //     // this.list.map((e,i)=>{
    //     //     console.log(e);
            
    //     //     vm.headerImg = (e.title == vm.pageName) ? e.url : vm.list[0].url;
    //     // })
    //     console.log(pageName);
        
    // },
  data() {
    return {
    pageName:null,
   
      list: [
        {
          url: require("@/assets/img/xzl.png"),
          title: "环球写字楼租赁项目"
        },
        {
          url: require("@/assets/img/hqdh.png"),
          title: "环球都会广场商务中心"
        },
        {
          url: require("@/assets/img/yzs.png"),
          title: "一站式商务企业服务"
        }
      ],
      detailsList: [
        {
          url: require("@/assets/img/zjxc1.png"),
          title: "天河珠江新城环球都会广场带装修多个间隔",
          loca: "广州天河",
          label: ["带装修", "东南朝向", "花城汇", "望江", "望广州塔"],
          area: "380.0"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>

