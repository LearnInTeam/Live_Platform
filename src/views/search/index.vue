<template>
  <div>
    <Card title="测试方法" dis-hover>
      <Row>
        <i-col span="6">
          <Select v-model="model" filterable>
            <Option
              v-for="item in actionList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </i-col>
        <i-col span="18">
          <Form :model="formItem" :label-width="80">
            <FormItem label="设备ID:">
              <Input v-model="formItem.LedId" placeholder="请输入设备ID"/>
            </FormItem>
            <FormItem label="文本内容:">
              <Input v-model="formItem.Text" placeholder="请输入文本内容"/>
            </FormItem>
            <FormItem label="显示特技:">
              <Select v-model="formItem.Style">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
            <FormItem label="文本颜色:">
              <ColorPicker v-model="formItem.Color"/>
            </FormItem>
          </Form>
        </i-col>
      </Row>
    </Card>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      model: "",
      actionList: [
        { value: "SendText", label: "发送文本" },
        { value: "SendTextFactoryStyle", label: "发送文本(显示特技)" },
        { value: "SendTextColor", label: "发送文本(颜色字型)" },
        { value: "SentTextFile", label: "发送文本(纯文字文档)" }
      ],
      formItem: {
        LedId: "",
        Text: "",
        Style: "",
        Color: ""
      }
    };
  }
};
</script>
<style scoped>
</style>
