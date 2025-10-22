<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        纵向步骤条
      </view>
      <view class="demo-desc">
        设置 direction="vertical" 展示纵向步骤条
      </view>

      <SkSteps v-model:active="active" direction="vertical">
        <SkStep title="步骤一" description="这是步骤一的描述信息" />
        <SkStep title="步骤二" description="这是步骤二的描述信息" />
        <SkStep title="步骤三" description="这是步骤三的描述信息" />
        <SkStep title="步骤四" description="这是步骤四的描述信息" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向简洁模式
      </view>
      <view class="demo-desc">
        纵向步骤条不带描述
      </view>

      <SkSteps :active="2" direction="vertical">
        <SkStep title="创建订单" />
        <SkStep title="支付订单" />
        <SkStep title="订单发货" />
        <SkStep title="确认收货" />
        <SkStep title="交易完成" />
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
