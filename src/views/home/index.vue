<template>
  <div>
    <Card title="已配置设备" dis-hover>
      <div>
        <Table stripe :columns="columns" :data="data"></Table>
      </div>
    </Card>
    <div v-for="(item,index) in array" :key="index">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      columns: [
        { title: "设备Id", key: "LedId" },
        { title: "设备IP", key: "IP" },
        { title: "设备端口", key: "Port" },
        { title: "文本内容", key: "Text" },
        { title: "文本颜色", key: "Color" },
        { title: "文本字体", key: "Font" },
        { title: "显示特技", key: "Style" }
      ],
      data: [],
      array: [{ a: 1 }]
    };
  }
};
</script>
<style scoped>
* >>> .ivu-card-body {
  padding: 0;
}
</style>
