<template>
  <div class="app">
    有没有啊
    <div class="box"></div>
    <!-- 注释的为全局导入 vantage组件 -->
    <!-- <van-button type="primary">主要按钮</van-button>
    <van-cell-group class="color">
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>-->
    <van-button type="info">按钮</van-button>
    <hr />User:
    <van-field placeholder="请输入用户名" />
  </div>
</template>
<script>
</script>
<style>
/* .color {
  border: 1px solid red;
} */
* {
  font-size: 12px;
}
.app {
  width: 375px;
  height: 375px;
  background-color: pink;
}
.app .box {
  width: 150px;
  height: 150px;
  background-color: green;
}
</style>
