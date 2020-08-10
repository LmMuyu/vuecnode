<template>
  <div class="author_info">
    <div class="info">
      <div class="fileinfo">
        <el-avatar
          shape="square"
          :size="50"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3141755450,3498941965&fm=26&gp=0.jpg"
        ></el-avatar>
        <span>hyj1991</span>
      </div>
      <div class="file_info">
        <span>积分：3175</span>
        <span>Github：hyj1991</span>
        <span>注册时间：4 年前</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.author_info {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.fileinfo {
  display: flex;
  align-items: center;
}
.info {
  box-shadow: #0000001a 0 2px 12px 0px;
  margin-top: 40px;
  padding: 20px;
}
.fileinfo > span {
  margin-left: 25px;
}
.file_info {
  display: flex;
  flex-direction: column;
}
</style>