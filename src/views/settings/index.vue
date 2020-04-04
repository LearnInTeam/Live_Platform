<template>
  <div>
    <Button type="primary" @click="Device=true">新增</Button>
    <Table stripe border :columns="columns" :data="data">
      <template slot-scope="{ row,index }" slot="操作">
        <Button type="warning" size="small" style="margin-right: 5px" @click="change(index)">修改</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <Modal v-model="Device" :title="title" @on-ok="sendDevice" @on-cancel="cancel">
      <Form :model="DeviceItem">
        <FormItem label="设备Id">
          <Input v-model="DeviceItem.Id" placeholder="请输入设备Id"/>
        </FormItem>
        <FormItem label="设备IP">
          <Input v-model="DeviceItem.IP" placeholder="请输入设备IP"/>
        </FormItem>
        <FormItem label="设备端口">
          <Input v-model="DeviceItem.Port" placeholder="请输入设备端口"/>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "settings",
  data() {
    return {
      columns: [
        {
          title: "设备Id",
          key: "Id"
        },
        {
          title: "设备IP",
          key: "IP"
        },
        {
          title: "设备端口",
          key: "Port"
        },
        {
          title: "操作",
          slot: "操作",
          width: 150,
          align: "center"
        }
      ],
      data: [],
      Device: false,
      title: "",
      DeviceItem: {
        Id: "",
        IP: "",
        Port: ""
      }
    };
  },
  methods: {
    sendDevice() {
      if (
        this.DeviceItem.Id !== "" &&
        this.DeviceItem.IP !== "" &&
        this.DeviceItem.Port !== ""
      )
        this.data.push(this.DeviceItem);
      this.$ajax({
        methods: "post",
        url: "",
        data: ""
      })
        .then(response => {
          const data = response.data;
          console.log(data)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    cancel() {},
    change(index) {
      this.Device = true;
      this.DeviceItem = this.data[index];
    },
    remove(index) {
      this.data.splice(index, 1);
    }
  }
};
</script>
<style scoped>
</style>
