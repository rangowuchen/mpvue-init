<template>
  <div class="container">
    <i-notice-bar icon="systemprompt" loop closable>
      快来看看自己的定位了哦!
    </i-notice-bar>
    <map class="mapView" :longitude="longitude" :latitude="latitude" @regionchange="regionChange" @begin="regionChangeBegin" @end="regionChangeEnd" :markers="markers"></map>
    <i-tab-bar :current="current" @change="handleChange" fixed>
      <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
      <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
      <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
      <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
    </i-tab-bar>
    <i-card title="卡片标题" i-class="card-demo" full extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card title="卡片标题" i-class="card-demo" full extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      current: "homepage",
      latitude: "31.23",
      longitude: "121.47",
      markers: [
        {
          latitude: "",
          longitude: "",
          name: "me"
        }
      ]
    };
  },
  mounted() {
    this.locationToMe();
  },
  methods: {
    handleChange(detail) {
      console.log(detail);
      this.current = detail.mp.detail.key;
    },
    locationToMe() {
      var that = this;
      wx.getLocation({
        type: "wgs84",
        success: function(res) {
          console.log("1111", res);
          that.latitude = res.latitude;
          that.longitude = res.longitude;
          that.markers[0].latitude = res.latitude;
          that.markers[0].longitude = res.longitude;
        }
      });
    }
  }
};
</script>
<style>
.card-demo {
  margin-top: 20rpx;
}
</style>

<style scoped>
.mapView {
  width: 100%;
  height: 500rpx;
}
</style>