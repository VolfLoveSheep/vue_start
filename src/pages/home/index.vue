<template>
  <div class="hello">
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe> -->
    <swiper :lunbotuList="lunbotuList"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newList">
               <img src="../../assets/menu1.png">
                <div class="mui-media-body">新闻资讯</div>
          </router-link> 
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link  to="/home/photoList">
                <img src="../../assets/menu2.png">
                <div class="mui-media-body">图片分享</div>
            </router-link >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/shopsList">
                <img src="../../assets/menu3.png">
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/menu6.png">
                <div class="mui-media-body">联系我们</div></a></li>
       
		</ul>
  </div>
</template>

<script>
import swiper from '../../components/swiper.vue'
export default {
  data(){
    return {
      lunbotuList:[]
    }
  },
  created(){
     this.getLunbotu()
  },
  methods:{
    getLunbotu(){
      this.$http.get("api/getlunbo").then(result=>{
        this.lunbotuList=result.body.message
      })
    }
  },
  components:{
    swiper
  }
}
</script>


<style>
 
 ul {
   background-color:#fff;
 }
 ul img {
   width:80%;
 }
</style>
