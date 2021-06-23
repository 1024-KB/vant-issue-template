<template>
  <div id="app">
    <van-cell :border="false" center :title="showDatetime()" />
    <div>{{ currentDate }}</div>
    <van-datetime-picker
      v-model="currentDate"
      type="datetime"
      title="选择完整时间"
      :min-date="minDate"
      :show-toolbar="false"
      item-height="38"
      visible-item-count="5"
      :filter="datetimeFilter"
      @change="datetimeChange"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 最小日期
      minDate: new Date(),
      // 选中日期
      currentDate: new Date(),
    };
  },
  methods: {
    // 格式化展示日期
    showDatetime() {
      const fullYear = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const date = this.currentDate.getDate();
      const hours = this.currentDate.getHours();
      const minutes = this.currentDate.getMinutes();
      return (
        fullYear +
        "年" +
        (month + 1) +
        "月" +
        date +
        "日 " +
        hours +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes)
      );
    },
    // 日期时间过滤器
    datetimeFilter: function (type, options) {
      if (type === "minute") {
        return options.filter((option) => option % 10 === 0);
      }

      return options;
    },
    // 改变日期
    datetimeChange(picker) {
      console.log(picker);
    },
  },
};
</script>

<style>
</style>
