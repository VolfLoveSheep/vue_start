<template>
  <div class="goodsInfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <!-- <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item ,index) in lunboto" :key="index">
              <img :src="item.src" alt="">
          </mt-swipe-item>
          
        </mt-swipe> -->
         <div class="mui-card-content-inner">
             <swiper :lunbotuList="lunbotuList"></swiper>
         </div>
        
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
import swiper from '../../components/swiper.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                this.lunbotuList=result.body.message
                
            })
        }
    },
    components:{
        swiper
    }
};
</script>
<style lang="less" scoped>
.goodsInfo-container {
  background-color: #eee;
  overflow: hidden;
}
</style>



