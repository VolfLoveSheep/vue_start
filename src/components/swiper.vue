<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
        <img :src="item.img ||item.src ">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["lunbotuList"]
};
</script>
<style lang="less" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>



