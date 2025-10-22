<script setup lang="ts">
import { ref } from 'vue'

const active1 = ref(1)
const active2 = ref(2)

function handleStepClick(_index: number) {
  // 步骤点击事件处理
}
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        可点击的步骤条
      </view>
      <view class="demo-desc">
        设置 clickable 属性使步骤可点击切换
      </view>

      <SkSteps v-model:active="active1" @click-step="handleStepClick">
        <SkStep title="步骤一" clickable />
        <SkStep title="步骤二" clickable />
        <SkStep title="步骤三" clickable />
        <SkStep title="步骤四" clickable />
      </SkSteps>

      <view class="demo-info">
        当前步骤: {{ active1 + 1 }}
      </view>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        部分步骤可点击
      </view>
      <view class="demo-desc">
        只有部分步骤可以点击
      </view>

      <SkSteps v-model:active="active2">
        <SkStep title="步骤一" clickable description="可点击" />
        <SkStep title="步骤二" description="不可点击" />
        <SkStep title="步骤三" clickable description="可点击" />
        <SkStep title="步骤四" description="不可点击" />
      </SkSteps>

      <view class="demo-info">
        当前步骤: {{ active2 + 1 }}
      </view>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        纵向可点击
      </view>
      <view class="demo-desc">
        纵向步骤条也支持点击切换
      </view>

      <SkSteps v-model:active="active1" direction="vertical">
        <SkStep title="选择商品" clickable description="浏览并选择心仪的商品" />
        <SkStep title="确认订单" clickable description="确认商品信息和收货地址" />
        <SkStep title="支付订单" clickable description="选择支付方式完成支付" />
        <SkStep title="完成" clickable description="等待商品发货" />
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

.demo-info {
  margin-top: 32rpx;
  padding: 24rpx;
  background: #f5f5f5;
  border-radius: 12rpx;
  font-size: 28rpx;
  color: #666;
  text-align: center;
}
</style>
