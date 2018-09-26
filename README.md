# init-project

> A Mpvue project

## Build Setup

``` bash
#创建一个mpvue小程序项目 根据自己的开发需要,一路回车创建项目
vue init mpvue/myvue-quickstart firstapp
# 安装依赖
npm install
#运行此命令,就会在项目目录中发现有个dist文件
npm run dev
#运行并查看结果:打开微信开发者工具,选择新增项目,项目目录选择指向firstapp(自己的项目文件夹)目录,即可查看结果

#使用小程序组件库,安装并使用iview weapp
npm i iview-weapp
#下载完成后,在node_modules里面找到iview-weapp下的dist文件,将这个dist文件复制到自己的mpvue工程下的static目录下
#(一定要放在此目录下,否则这些代码会被mpvue编译器错误的进行处理),然后给这个dist目录改个名字,例如iview-weapp

#如果想在
src/pages/index/index.vue
#中使用iView中的i-button组件那么就先要在
src/pages/index/main.json（
#如果没有该文件，则新建一个）中进行如下配置
{
  "usingComponents": {
    "i-button": "../../static/iview-weapp/button/index"
  }
}
#就可以使用组件了,例如
<template>
  <div class="container">
    <i-button type="primary" @click="bindViewTap">这是一个按钮</i-button>
  </div>
</template>

#组件使用注意事项
例如 bindregionchange 事件直接在 dom 上将bind改为@ @regionchange
例如 <i-input value="{{ value1 }}" title="收货人" autofocus placeholder="名字" />
改成 <i-input :value="value1" title="收货人" i-class="logs-form" autofocus placeholder="名字" />

