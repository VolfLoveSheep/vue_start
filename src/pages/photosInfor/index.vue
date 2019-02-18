<template>
  <div class="photoinfo-container">
    <h2>{{photoInfor.title}}</h2>
    <p class="subtitle">
      <span>发表时间:{{photoInfor.add_time | dataFormat}}</span>
      <span>点击: {{photoInfor.click}} 次</span>
    </p>
    <div class="thumbs">
      <img
        class="preview-img"
        v-for="(item, index) in list"
        :src="item.src"
        height="100"
        @click="$preview.open(index, list)"
        :key="item.src"
      >
    </div>
    <div v-html="photoInfor.content" class="content"></div>
    <comment :id="id"></comment>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfor: [],
      list:[]
    };
  },
  created() {
    this.getPhotoInfor()
    this.getThumbs()
  },
  methods: {
    getPhotoInfor() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        this.photoInfor = result.body.message[0];
      });
    },
    getThumbs() {
        this.$http.get('api/getthumimages/'+this.id).then(result=>{
            result.body.message.forEach(element => {
                element.w=600
                element.h=400
            })
            this.list=result.body.message
        })
    }
  }
};
</script>
<style lang="less" scoped>
.photoinfo-container {
  padding: 3px;
  h2 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    img {
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>


