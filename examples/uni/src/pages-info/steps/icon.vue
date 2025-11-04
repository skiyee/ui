<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        自定义图标
      </view>
      <view class="demo-desc">
        通过 icon 属性自定义步骤图标
      </view>

      <SkSteps v-model:active="active">
        <SkStep title="购物车" icon="i-lucide:shopping-cart" />
        <SkStep title="确认订单" icon="i-lucide:file-check" />
        <SkStep title="支付" icon="i-lucide:credit-card" />
        <SkStep title="完成" icon="i-lucide:check-circle" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向自定义图标
      </view>
      <view class="demo-desc">
        纵向步骤条支持自定义图标
      </view>

      <SkSteps :active="2" direction="vertical">
        <SkStep title="登录账号" description="使用手机号登录" icon="i-lucide:user" />
        <SkStep title="验证身份" description="输入验证码" icon="i-lucide:shield-check" />
        <SkStep title="设置密码" description="设置新密码" icon="i-lucide:lock" />
        <SkStep title="完成设置" description="开始使用" icon="i-lucide:check-circle-2" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        混合模式
      </view>
      <view class="demo-desc">
        部分步骤使用图标，部分使用数字
      </view>

      <SkSteps :active="1">
        <SkStep title="开始" icon="i-lucide:play" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
        <SkStep title="完成" icon="i-lucide:flag" />
      </SkSteps>
    </view>
  </view>
</template>

<style scoped>
.page {
  padding: 32rpx;
  background: #f5f5f5;
  min-height: 100vh;
}

.demo-section {
  margin-bottom: 32rpx;
  padding: 32rpx;
  background: #fff;
  border-radius: 16rpx;
}

.demo-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 16rpx;
}

.demo-desc {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 32rpx;
}
</style>
