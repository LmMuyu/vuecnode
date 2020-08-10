<template>
  <div class="head">
    <div class="headinfo">
      <img src="@/assets/logo.png" alt="">
      <span>关于</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
  background-color: #454545;
  height: 50px;
}
.headinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.headinfo > span {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 50px;
}
.headinfo>img{
  width: 50px;
  height: 40px;
margin-left: 50px;
}
</style>