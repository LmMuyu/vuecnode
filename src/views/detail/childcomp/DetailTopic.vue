<template>
  <div>
    <div class="author_info">
      <header class="title">{{ title }}</header>
      <div class="splitline"></div>
      <div class="topic">
        <li v-for="topic in topiclist" :key="topic.id">
          <router-link :to="{ path: `/detail/${topic.id}` }">{{
            topic.title
          }}</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    topiclist: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
li > a {
  text-decoration: none;
}
a {
  color: rgb(66, 185, 131);
  font-weight: 600;
  font-weight: 600;
  padding: 0px 2px;
  line-height: 25.6px;
}
.author_info {
  width: 260px;
  box-shadow: #0000001a 0px 2px 12px 0px;
  margin-top: 37.5px;
  margin-right: 37.5px;
  padding: 20px;
}
.title {
  font-size: 14px;
  font-weight: 600;
  padding: 0 0 15px 0;
}
.topic {
  padding-top: 10px;
}
.splitline {
  width: 100%;
  height: 1px;
  background-color: rgb(232, 232, 232);
  color: rgba(0, 0, 0, 0.65);
}
</style>