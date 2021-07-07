<template>
  <div class="home-container">
    <div class="top">
      <router-link class="top-title" :to="externalLink"
        >codesandbox</router-link
      >
    </div>

    <div class="content">
      <h4>vant 组件</h4>
      <ul class="list-wrap">
        <li class="list-item">
          <router-link to="datetimepicker">datetimepicker</router-link>
        </li>
        <li class="list-item">
          <router-link to="tab">tab</router-link>
        </li>
        <li class="list-item">
          <router-link to="cell">cell</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      externalLink: "https://codesandbox.io",
    };
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  line-height: 1.5;

  .top {
    .top-title {
      display: inline-block;
      font-size: 32px;
      line-height: 1.5em;
      font-weight: 700;
    }
  }

  .content {
    .list-wrapper {
      float: left;
      border: 1px solid #000;

      a {
        display: inline-block;
        margin-right: 8px;
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        color: #c3c3c3;
      }
    }
  }
}
</style>