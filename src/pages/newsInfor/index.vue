<template>
  <div class="newsInfor-content">
    <h2 class="title">{{newsInfor.title}}</h2>
    <p class="subtitle">
      <span>发表时间:{{newsInfor.add_time |dataFormat}}</span>
      <span>点击:{{newsInfor.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfor.content"></div>
    <comment :id="id"></comment>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfor: {}
    };
  },
  created() {
    this.getNewsInfor();
  },
  methods: {
    getNewsInfor() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        this.newsInfor = result.body.message[0];
      });
    }
  }
};
</script>
<style lang="less" >
.newsInfor-content {
  padding: 0 10px;
  .title {
    font-size: 16px;
    margin: 10px 0;
    color: red;
    text-align: center;
  }
  .subtitle {
    font-size: 14px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>


