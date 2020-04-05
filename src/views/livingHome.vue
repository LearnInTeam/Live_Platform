<style lang="scss" scoped>
.livingHome {
  width: 100%;
  height: 100%;
  .container {
    width: 1400px;
    background-color: gray;
    margin: 0 auto;
    .header {
      // position: fixed;
      width: 100%;
    }
    .content {
      min-height: 500px;
      .card {
        margin: 20px 0;
        border-radius: unset;
      }
    }
  }
}
</style>
<template>
  <div>
    <div class="livingHome">
      <Layout class="container">
        <Header class="header"></Header>
        <Content class="content">
          <Card
            v-for="(item,index) in componentList"
            :key="index"
            :bordered="false"
            dis-hover
            class="card"
          >
            <component :is="item"></component>
          </Card>
        </Content>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
      </Layout>
    </div>
  </div>
</template>
 
<script>
import livingSug from "@/views/home/livingSug.vue";
export default {
  name: "livingHome",
  components: { livingSug },
  data() {
    return {
      componentList: []
    };
  },
  methods: {},
  mounted() {}
};
</script>