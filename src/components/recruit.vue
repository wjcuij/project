<template>

  <div>
    <router-view></router-view>
    <main>
      <div class="content">
        <div class="xulie">
          <img src="@/assets/img/fangzi.png" alt="">
          <span class="jiantou">主页</span>
          <span class="jiantou">走进盈富永泰</span>
          <span>招聘窗口</span>
        </div>
        <div class="tit">
          <h2>我们是谁?</h2>
        </div>
        <section>
          <p class="section_p">国内租赁行业的翘首，近两年成长最快的租赁平台。高速增长的集团业务公司。<br>其实我们只是一群想做点事情的人，一群有着相同价值观的人，一群坚信能创造伟大的人。</p>
          <ul class="section_ul">
            <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
              <swiper-slide v-for="(e,i) in 8" :key="i+'l'" class="li">
                  <img src="@/assets/img/yfytlogo.png" alt="">
                  <h5>盈富永泰集团有限公司{{i}}</h5>
                  <p class="section_ul_p1">
                    <span>品质总监高级专员</span>
                    <span>面议</span>
                  </p>  
                  <p class="section_ul_p2">
                    <span>设计总监</span>
                    <span>30-50万</span>
                  </p>
                  <a href="javascript:;" class="rezhao">更多热招职位 </a>
              </swiper-slide>

            </swiper>
            <!-- 
            <li>
              <img src="@/assets/img/yfytlogo.png" alt="">
              <h5>盈富永泰集团有限公司</h5>
              <p class="section_ul_p1">
                <span>品质总监高级专员</span>
                <span>面议</span>
              </p>
              <p class="section_ul_p2">
                <span>设计总监</span>
                <span>30-50万</span>
              </p>
              <a href="javascript:;" class="rezhao">更多热招职位 </a>
            </li> -->
            <div class="ytyf_jtl" slot="button-prev">
              <img src="@/assets/img/jtleft.png" alt="">
            </div>
            <div class="ytyf_jtr" slot="button-next">

              <img src="@/assets/img/jtright.png" alt="" >
            </div>
          </ul>
          <div class="tit">
            <h2>我们的客户也在招贤纳士</h2>
          </div>
          <ul class="section_ul section_ul2">
            <swiper :options="swiperOption2" ref="mySwiper" @someSwiperEvent="callback">
              <swiper-slide v-for="(e,i) in 12" :key="i+'p'" class="li">
                  <img src="@/assets/img/yfytlogo.png" alt="">
                  <h5>腾讯有限公司{{i+'p'}}</h5>
                  <p class="section_ul_p1">
                    <span>品质总监高级专员</span>
                    <span>面议</span>
                  </p>  
                  <p class="section_ul_p2">
                    <span>设计总监</span>
                    <span>30-50万</span>
                  </p>
                  <a href="javascript:;" class="rezhao">更多热招职位 </a>
              </swiper-slide>

            </swiper>
             <swiper :options="swiperOption2" ref="mySwiper" @someSwiperEvent="callback">
              <swiper-slide v-for="(e,i) in 12" :key="i+'p'" class="li">
                  <img src="@/assets/img/yfytlogo.png" alt="">
                  <h5>腾讯有限公司{{i+'p'}}</h5>
                  <p class="section_ul_p1">
                    <span>品质总监高级专员</span>
                    <span>面议</span>
                  </p>  
                  <p class="section_ul_p2">
                    <span>设计总监</span>
                    <span>30-50万</span>
                  </p>
                  <a href="javascript:;" class="rezhao">更多热招职位 </a>
              </swiper-slide>

            </swiper>
            <div class="ytyf_jtl2" slot="button-prev">
              <img src="@/assets/img/jtleft.png" alt="">
            </div>
            <div class="ytyf_jtr2" slot="button-next">
              <img src="@/assets/img/jtright.png" alt="" >
            </div>
          </ul>
          <div class="tit">
            <h2>友情链接</h2>
          </div>
          <img :src="logoImg" alt="" style="display:block;width:100%;">
          <!-- <img v-for="(e,i) in 10" :key="i" src="@/assets/logo.png" /> -->
        </section>

      </div>
    </main>
  </div>
</template>
<!--<style scoped src="@/assets/pulice/css/normalize.css"></style>
<style scoped src="@/assets/css/animate.css"></style>
<style scoped src="swiper/dist/css/swiper.css"></style>
<style scoped src="@/assets/pulice/css/pulice.css"></style>
<style scoped src="@/assets/css/recruit.css"></style>-->
<script>
// import "@/assets/pulice/css/normalize.css";
// import "@/assets/css/animate.css";
import "swiper/dist/css/swiper.css"
// import "@/assets/pulice/css/pulice.css";
import "@/assets/css/recruit.css";
import "@/assets/js/jquery-2.1.1.min.js";
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import "@/assets/js/index.js";
let logoImg = require("@/assets/img/hezuo.jpg");
export default {
  name: 'carrousel',
  components: { 
      swiper,
      swiperSlide
    },
    data() {
      return {
        logoImg:logoImg,
        swiperOption: {
          slidesPerView: 5,//一行多少个
        spaceBetween: 12,//距离多少
        slidesPerGroup: 1,//点击出现多少个
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".ytyf_jtl",
          prevEl: ".ytyf_jtr"
        }
        },
        swiperOption2: {
          slidesPerView: 5,//一行多少个
        spaceBetween: 12,//距离多少
        slidesPerGroup: 1,//点击出现多少个
        slidesPerColumn:1,
        slidesPerColumnFill: 'row',
        autoHeight: true, 
        loop: true,
        // loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".ytyf_jtl2",
          prevEl: ".ytyf_jtr2"
        }
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      callback:function(){

      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(1, 1000, false)
    }
    // name: "HelloWorld",
    // components: { 
    //   swiper,
    //   swiperSlide
    // },
    // data() {
    //   return {
    //     msg: "Welcome to Your Vue.js App",
    //     logoImg: null
    //   };
    // },
    // created() {
    //   this.logoImg = logoImg;
    
    // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


