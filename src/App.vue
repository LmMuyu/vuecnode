<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

@import "./assets/css/normalize.css";

@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.eot");
  src: url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.woff2")
      format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_ry3xyghrjqd.svg#iconfont")
      format("svg");
}
</style>
