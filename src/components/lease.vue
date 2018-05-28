<template>

    <div>
       
        <com-header :headerbj="require('@/assets/img/kongjian2_01.jpg')" >

        <template slot="slot1">
             <div class="header_text">
                    <img src="@/assets/img/dazao.png" alt="" class="fadeInDown animated">    
                    <img src="@/assets/img/kongjian.png" alt="" class="zoomIn animated">    
                </div>
        </template>
        <template slot="slot2">
            <div class="header_footer">
                <ul>
                    <li><img src="@/assets/img/header_icon.png" alt=""><b>写字楼办公租赁</b></li>
                    <li><img src="@/assets/img/header_icon.png" alt=""><b>盈富永泰商务中心</b></li>
                    <li><img src="@/assets/img/header_icon.png" alt=""><b>一站式企业服务</b></li>
                </ul>
            </div>
        </template>
        </com-header>
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
                <li class="clearfloat" v-for="(item,index) in detailsList" :key="index">
                    <img :src="item.url" alt="" />
                    <div>

                        <p>{{ item.title }}
                            <span>{{ item.loca }}</span>
                        </p>
                        <div class="biaoqian">
                            <span v-for="itemi in item.label" :key="itemi">{{ itemi }}</span>
                            <!-- <span>东南朝向</span>
                            <span>花城汇</span>
                            <span>望江</span>
                            <span>望广州塔</span> -->
                        </div>
                        <div class="mianji">
                            <p>单元面积：
                                <span>{{ item.area }}</span>平方米</p>
                            <p>实收：
                                <span>{{ item.shishou }}</span>元</p>
                            <button v-on:click="look">预约看盘</button>
                        </div>
                        <div class="weizhi clearfloat">
                            
                            <span v-for="(itemo,indexi) in item.didian" :key="indexi"><b>{{ itemo.title }}</b>{{ itemo.lc }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<!--<style scoped src="@/assets/pulice/css/normalize.css"></style>
<style scoped src="@/assets/css/animate.css"></style>
<style scoped src="@/assets/pulice/css/pulice.css"></style>-->
<style scoped src="@/assets/css/lease.scss" lang="scss" type="text/css"></style>
<script>
import comHeadder from "./pulice/header.vue";

export default {
    components:{
'com-header':comHeadder
    //     slot2: {
    //     template: '<button>'+
    //                     '<slot name="name1"></slot>'+
    //                     'button标签'+
    //                 '</button>'
    // }
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
          area: "380.0",
          shishou:"210-230",
          didian:[
              {title:'楼层：',lc:'高层／63楼'},
              {title:'物业费：',lc:'物业管理35元/平米'},
              {lc:'APM线 黄埔大道 (500米内)  猎德地铁 (500-1000米)',title:'附近地铁：'},
              {lc:'天河区 珠江新城中 花城大道68号',title:'楼盘位置：'}
          ]
        },
        {
          url: require("@/assets/img/zjxc2.png"),
          title: "天河珠江新城环球都会广场带装修多个间隔",
          loca: "广州天河",
          label: ["带装修", "东南朝向", "花城汇", "望江", "望广州塔"],
          area: "380.0",
          shishou:"210-230",
          didian:[
              {title:'楼层：',lc:'高层／63楼'},
              {title:'物业费：',lc:'物业管理35元/平米'},
              {lc:'APM线 黄埔大道 (500米内)  猎德地铁 (500-1000米)',title:'附近地铁：'},
              {lc:'天河区 珠江新城中 花城大道68号',title:'楼盘位置：'}
          ]
        },
        {
          url: require("@/assets/img/zjxc3.png"),
          title: "天河珠江新城环球都会广场带装修多个间隔",
          loca: "广州天河",
          label: ["带装修", "东南朝向", "花城汇", "望江", "望广州塔"],
          area: "380.0",
          shishou:"210-230",
          didian:[
              {title:'楼层：',lc:'高层／63楼'},
              {title:'物业费：',lc:'物业管理35元/平米'},
              {lc:'APM线 黄埔大道 (500米内)  猎德地铁 (500-1000米)',title:'附近地铁：'},
              {lc:'天河区 珠江新城中 花城大道68号',title:'楼盘位置：'}
          ]
        }
      ]
    };
  },
  created(){
      
  },
  methods: {
      look:function(){
          alert(1)
      }
  }

};
</script>
<style lang="scss" scoped>
</style>

