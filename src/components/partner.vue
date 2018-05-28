<template>
    <div>
         <router-view></router-view>
        <main>
            <img src="@/assets/img/huaduo.png" alt="" class="huaduo">

            <div class="main_div">


                <div class="xulie">
                    <img src="@/assets/img/fangzi.png" alt="">
                    <span class="jiantou">主页</span>
                    <span class="jiantou">走进盈富永泰</span>
                    <span>客户展示&合作伙伴</span>
                </div>
                <div class="main_content">
                    <img src="@/assets/img/name.png" alt="">
                    <p class="main_content_p">盈富永泰集团，是一家
                        <br>集商业地产租售托管服务为中心、互联网信息服务、
                        <br>智能科技、商务中心开发运营、优质企业孵化及IPO服务为一体的多元化集团。</p>
                    <p class="content_title">500+客户服务案例</p>
                    <img src="@/assets/img/hezuo.jpg" alt="" class="hzicon">
                    <img src="@/assets/img/8.png" alt="" class="fuwual">
                </div>
                <img src="@/assets/img/qiu.png" alt="" class="qiu">
            </div>
            <div class="zlhz">


                <p class="zhanlue">我们的战略合作伙伴</p>
                <img src="@/assets/img/kangbai.png" alt="" class="kbicon">
                <p>康栢会计师事务所有限公司是香港注册的执业会计师行，自1998年成立以来，为全球投资者提供一站式专业服务，</p>
                <p>
                    服务涵盖审计、会计、税务及财务咨询、公司注册、知识产权保护、企业融资及上市策划等领域。
                </p>
                <p>康栢会计师事务所官方网站：http://www.conpak.com.cn</p>
            </div>
        </main>
        
    </div>
   
</template>

<style scoped src="@/assets/css/index.css"></style>
<script>
// import "@/assets/pulice/css/normalize.css";
// import "@/assets/css/animate.css";
// import "@/assets/pulice/css/pulice.css";
// import "@/assets/css/index.css";
import "@/assets/js/index.js";
export default {
  name: "partner",
  data() {
    return {
    //   msg: "Welcome to Your Vue.js App",
    //   logoImg: null
    };
  },
  created() {
    //this.logoImg = logoImg;
   
  }
};
</script>
