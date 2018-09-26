<template>
    <div class="contain-logs">
        <i-panel title="基础用法">
            <i-input :value="userName" i-class="logs-form" autofocus placeholder="请输入用户名" />
            <i-input :value="password" i-class="logs-form" type="number" placeholder="请输入密码" />
        </i-panel>
        <i-button i-class="logs-form" inline @click="loginTo" type="success">登陆</i-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userName:"wuchen",
            password:"123456"
        }
    },
    methods: {
        loginTo(){
            console.log('点我登陆喽')
        }
    }
}
</script>


<style>
.contain-logs{
    padding-top: 200rpx;
    width: 100%;
}
.logs-form{
    width:95%;
}
</style>
