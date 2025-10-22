<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)
</script>

<template>
  <view class="page">
    <view class="demo-section">
      <view class="demo-title">
        自定义样式
      </view>
      <view class="demo-desc">
        使用 clax 属性自定义样式
      </view>

      <SkSteps v-model:active="active" clax="custom-steps">
        <SkStep title="步骤一" />
        <SkStep title="步骤二" />
        <SkStep title="步骤三" />
        <SkStep title="步骤四" />
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        自定义图标插槽
      </view>
      <view class="demo-desc">
        通过插槽自定义步骤图标
      </view>

      <SkSteps :active="2">
        <SkStep title="选择商品">
          <template #icon>
            <view class="custom-icon">
              🛒
            </view>
          </template>
        </SkStep>
        <SkStep title="确认订单">
          <template #icon>
            <view class="custom-icon">
              📝
            </view>
          </template>
        </SkStep>
        <SkStep title="支付">
          <template #icon>
            <view class="custom-icon">
              💳
            </view>
          </template>
        </SkStep>
        <SkStep title="完成">
          <template #icon>
            <view class="custom-icon">
              ✅
            </view>
          </template>
        </SkStep>
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        自定义标题和描述
      </view>
      <view class="demo-desc">
        通过插槽自定义标题和描述内容
      </view>

      <SkSteps :active="1" direction="vertical">
        <SkStep>
          <template #title>
            <view class="custom-title">
              <text class="title-text">
                第一步
              </text>
              <view class="title-badge">
                必填
              </view>
            </view>
          </template>
          <template #description>
            <view class="custom-desc">
              请填写您的基本信息，包括姓名、手机号等
            </view>
          </template>
        </SkStep>

        <SkStep>
          <template #title>
            <view class="custom-title">
              <text class="title-text">
                第二步
              </text>
              <view class="title-badge">
                必填
              </view>
            </view>
          </template>
          <template #description>
            <view class="custom-desc">
              上传您的身份证照片，确保照片清晰
            </view>
          </template>
        </SkStep>

        <SkStep>
          <template #title>
            <view class="custom-title">
              <text class="title-text">
                第三步
              </text>
              <view class="title-badge optional">
                选填
              </view>
            </view>
          </template>
          <template #description>
            <view class="custom-desc">
              完善其他信息，有助于提升服务质量
            </view>
          </template>
        </SkStep>
      </SkSteps>
    </view>

    <view class="demo-section">
      <view class="demo-title">
        完全自定义
      </view>
      <view class="demo-desc">
        结合多种自定义方式
      </view>

      <SkSteps :active="2" direction="vertical">
        <SkStep status="finish">
          <template #icon>
            <view class="success-icon">
              ✓
            </view>
          </template>
          <template #title>
            <view class="step-title success">
              订单已创建
            </view>
          </template>
          <template #description>
            <view class="step-time">
              2024-01-01 10:00:00
            </view>
            <view class="step-detail">
              订单号: 202401010001
            </view>
          </template>
        </SkStep>

        <SkStep status="finish">
          <template #icon>
            <view class="success-icon">
              ✓
            </view>
          </template>
          <template #title>
            <view class="step-title success">
              支付成功
            </view>
          </template>
          <template #description>
            <view class="step-time">
              2024-01-01 10:05:30
            </view>
            <view class="step-detail">
              支付金额: ¥99.00
            </view>
          </template>
        </SkStep>

        <SkStep status="process">
          <template #icon>
            <view class="loading-icon">
              ⏳
            </view>
          </template>
          <template #title>
            <view class="step-title process">
              正在发货
            </view>
          </template>
          <template #description>
            <view class="step-time">
              预计今天发货
            </view>
            <view class="step-detail">
              商品正在打包中...
            </view>
          </template>
        </SkStep>

        <SkStep status="wait">
          <template #icon>
            <view class="wait-icon">
              ○
            </view>
          </template>
          <template #title>
            <view class="step-title wait">
              确认收货
            </view>
          </template>
          <template #description>
            <view class="step-time">
              等待发货
            </view>
            <view class="step-detail">
              预计3-5天送达
            </view>
          </template>
        </SkStep>
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

.custom-icon {
  font-size: 40rpx;
}

.custom-title {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.title-text {
  font-size: 28rpx;
  font-weight: 500;
}

.title-badge {
  padding: 4rpx 12rpx;
  background: #ff4d4f;
  color: #fff;
  font-size: 20rpx;
  border-radius: 8rpx;
}

.title-badge.optional {
  background: #52c41a;
}

.custom-desc {
  font-size: 24rpx;
  color: #666;
  line-height: 1.6;
}

.success-icon,
.loading-icon,
.wait-icon {
  font-size: 32rpx;
  font-weight: bold;
}

.success-icon {
  color: #52c41a;
}

.loading-icon {
  color: #1890ff;
}

.wait-icon {
  color: #d9d9d9;
}

.step-title {
  font-size: 28rpx;
  font-weight: 500;
  margin-bottom: 8rpx;
}

.step-title.success {
  color: #52c41a;
}

.step-title.process {
  color: #1890ff;
}

.step-title.wait {
  color: #999;
}

.step-time {
  font-size: 24rpx;
  color: #999;
  margin-bottom: 4rpx;
}

.step-detail {
  font-size: 24rpx;
  color: #666;
}
</style>
